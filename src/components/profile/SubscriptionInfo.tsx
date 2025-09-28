
import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { supabase } from '@/integrations/supabase/client'
import { useAuth } from '@/hooks/useAuth'
import { toast } from '@/hooks/use-toast'
import { CreditCard, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react'
import { formatCurrency } from '@/utils/currency'

interface SubscriptionData {
  subscription_status: string | null
  subscription_end_date: string | null
  subscription_id: string | null
  assinaturaid: string | null
}

export function SubscriptionInfo() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [syncing, setSyncing] = useState(false)
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData | null>(null)

  useEffect(() => {
    if (user) {
      fetchSubscriptionData()
    }
  }, [user])

  const fetchSubscriptionData = async () => {
    try {
      setLoading(true)
      
      const { data, error } = await supabase
        .from('profiles')
        .select('subscription_status, subscription_end_date, subscription_id, assinaturaid')
        .eq('id', user?.id)
        .single()

      if (error && error.code !== 'PGRST116') {
        throw error
      }

      setSubscriptionData(data || {
        subscription_status: null,
        subscription_end_date: null,
        subscription_id: null,
        assinaturaid: null
      })
    } catch (error: any) {
      console.error('Erro ao buscar dados da assinatura:', error)
      toast({
        title: "Erro ao carregar assinatura",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const fetchExternalSubscriptionData = async () => {
    if (!subscriptionData?.assinaturaid) {
      toast({
        title: "Informações não disponíveis",
        description: "ID da assinatura não encontrado no perfil",
        variant: "destructive",
      })
      return
    }

    try {
      setSyncing(true)
      
      const { data, error } = await supabase.functions.invoke('get-subscription-info', {
        body: { subscriptionId: subscriptionData.assinaturaid }
      })

      if (error) {
        throw error
      }

      toast({
        title: "Informações atualizadas",
        description: "Dados da assinatura carregados do sistema externo",
      })

      // Show external data in a simple alert for now
      const info = [
        `Status: ${data.status}`,
        `Valor: R$ ${data.valor}`,
        `Ciclo: ${data.ciclo}`,
        `Próximo pagamento: ${new Date(data.proimoPagamento).toLocaleDateString('pt-BR')}`
      ].join('\n')
      
      alert(`Informações da Assinatura:\n\n${info}`)
      
    } catch (error: any) {
      console.error('Erro ao buscar dados externos:', error)
      toast({
        title: "Erro ao buscar informações",
        description: error.message || "Não foi possível carregar os dados externos",
        variant: "destructive",
      })
    } finally {
      setSyncing(false)
    }
  }

  const getStatusBadge = (status: string | null) => {
    if (!status) return <Badge variant="secondary">Não informado</Badge>
    
    switch (status.toLowerCase()) {
      case 'active':
      case 'ativa':
        return <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">Ativa</Badge>
      case 'cancelled':
      case 'cancelada':
        return <Badge variant="destructive">Cancelada</Badge>
      case 'suspended':
      case 'suspensa':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">Suspensa</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const formatDate = (dateString: string | null): string => {
    if (!dateString) return 'Não informado'
    return new Date(dateString).toLocaleDateString('pt-BR')
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Informações da Assinatura
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <RefreshCw className="h-8 w-8 animate-spin text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Carregando informações da assinatura...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Informações da Assinatura
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!subscriptionData?.subscription_status ? (
          <div className="text-center py-8 space-y-4">
            <CreditCard className="h-12 w-12 text-muted-foreground mx-auto" />
            <div className="space-y-2">
              <p className="text-muted-foreground">Nenhuma assinatura encontrada</p>
              <p className="text-sm text-muted-foreground">
                Você ainda não possui uma assinatura ativa ou os dados não foram sincronizados.
              </p>
            </div>
            {subscriptionData?.assinaturaid && (
              <Button onClick={fetchExternalSubscriptionData} disabled={syncing} variant="outline" size="sm">
                <RefreshCw className={`h-4 w-4 mr-2 ${syncing ? 'animate-spin' : ''}`} />
                {syncing ? 'Carregando...' : 'Ver Detalhes'}
              </Button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Status da Assinatura</span>
              {getStatusBadge(subscriptionData.subscription_status)}
            </div>
            
            {subscriptionData.subscription_end_date && (
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Data de Expiração</span>
                <span className="text-sm text-muted-foreground">
                  {formatDate(subscriptionData.subscription_end_date)}
                </span>
              </div>
            )}
            
            {subscriptionData.subscription_id && (
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">ID da Assinatura</span>
                <span className="text-xs font-mono text-muted-foreground">
                  {subscriptionData.subscription_id}
                </span>
              </div>
            )}

            <div className="pt-4 border-t">
              <Button 
                onClick={fetchExternalSubscriptionData} 
                disabled={syncing} 
                variant="outline" 
                size="sm"
                className="w-full"
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${syncing ? 'animate-spin' : ''}`} />
                {syncing ? 'Carregando...' : 'Ver Detalhes da API'}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
