
import { useEffect, useMemo, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { supabase } from '@/integrations/supabase/client'
import { toast } from 'sonner'

export interface ReportTransaction {
  id: number
  created_at: string
  quando: string | null
  estabelecimento: string | null
  valor: number | null
  detalhes: string | null
  tipo: string | null
  category_id: string
  categorias?: {
    id: string
    nome: string
  }
}

export interface ReportFilters {
  startDate: string
  endDate: string
  type: string
  categoryId: string
  period: 'day' | 'month' | 'year' | 'custom'
}

export function useReports() {
  const { user } = useAuth()
  const now = new Date()
  const defaultStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0]
  const defaultEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0]

  const [filters, setFilters] = useState<ReportFilters>({
    startDate: defaultStart,
    endDate: defaultEnd,
    type: '',
    categoryId: '',
    period: 'month'
  })

  const [transactions, setTransactions] = useState<ReportTransaction[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchTransactions = async () => {
    if (!user?.id) {
      setTransactions([])
      return
    }

    setIsLoading(true)
    try {
      let query = supabase
        .from('transacoes')
        .select('id, created_at, quando, estabelecimento, valor, detalhes, tipo, category_id, categorias(id, nome)')
        .eq('userid', user.id)
        .order('quando', { ascending: false })

      if (filters.startDate) {
        query = query.gte('quando', filters.startDate)
      }
      if (filters.endDate) {
        query = query.lte('quando', filters.endDate)
      }
      if (filters.type) {
        query = query.eq('tipo', filters.type)
      }
      if (filters.categoryId) {
        query = query.eq('category_id', filters.categoryId)
      }

      const { data, error } = await query

      if (error) throw error

      setTransactions((data as unknown as ReportTransaction[]) || [])
    } catch (error: any) {
      console.error('Erro ao carregar transações:', error)
      toast.error('Erro ao carregar transações: ' + error.message)
      setTransactions([])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTransactions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id, filters.startDate, filters.endDate, filters.type, filters.categoryId])

  // Calculate summary data
  const summaryData = useMemo(() => {
    const receitas = transactions
      .filter(t => t.tipo === 'receita')
      .reduce((acc, t) => acc + (t.valor || 0), 0)
    
    const despesas = transactions
      .filter(t => t.tipo === 'despesa')
      .reduce((acc, t) => acc + (t.valor || 0), 0)
    
    const saldo = receitas - despesas

    // Group by category
    const byCategory = transactions.reduce((acc, transaction) => {
      const categoryName = transaction.categorias?.nome || 'Sem categoria'
      const valor = transaction.valor || 0
      
      if (!acc[categoryName]) {
        acc[categoryName] = { receitas: 0, despesas: 0, total: 0 }
      }
      
      if (transaction.tipo === 'receita') {
        acc[categoryName].receitas += valor
      } else {
        acc[categoryName].despesas += valor
      }
      
      acc[categoryName].total = acc[categoryName].receitas - acc[categoryName].despesas
      
      return acc
    }, {} as Record<string, { receitas: number; despesas: number; total: number }>)

    // Group by type for chart data
    const chartData = [
      { name: 'Receitas', value: receitas, color: '#22c55e' },
      { name: 'Despesas', value: despesas, color: '#ef4444' }
    ]

    return {
      receitas,
      despesas,
      saldo,
      byCategory,
      chartData,
      totalTransactions: transactions.length
    }
  }, [transactions])

  return {
    transactions,
    isLoading,
    filters,
    setFilters,
    summaryData
  }
}
