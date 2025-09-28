
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase } from '@/integrations/supabase/client'
import { toast } from '@/hooks/use-toast'
import { Loader2, User } from 'lucide-react'

export function CreateTestUser() {
  const [creating, setCreating] = useState(false)

  const createTestUser = async () => {
    setCreating(true)
    try {
      const email = 'teste@financas.com'
      const password = 'teste123456'

      // Create the test user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            nome: 'Usuário de Teste'
          }
        }
      })

      if (authError) throw authError

      if (authData.user) {
        // Create some default categories for the test user
        const defaultCategories = [
          { nome: 'Alimentação', tags: 'comida,supermercado,restaurante', userid: authData.user.id },
          { nome: 'Transporte', tags: 'combustível,uber,ônibus,metrô', userid: authData.user.id },
          { nome: 'Moradia', tags: 'aluguel,água,luz,gás,condomínio', userid: authData.user.id },
          { nome: 'Saúde', tags: 'médico,farmácia,exames,plano de saúde', userid: authData.user.id },
          { nome: 'Lazer', tags: 'cinema,viagem,entretenimento', userid: authData.user.id },
          { nome: 'Salário', tags: 'trabalho,renda,receita', userid: authData.user.id },
        ]

        const { error: categoriesError } = await supabase
          .from('categorias')
          .insert(defaultCategories)

        if (categoriesError) {
          console.warn('Erro ao criar categorias padrão:', categoriesError)
        }

        toast({
          title: "Usuário de teste criado",
          description: `Usuário criado com sucesso. Use ${email} para fazer login.`,
        })
      }
    } catch (error: any) {
      console.error('Erro ao criar usuário de teste:', error)
      toast({
        title: "Erro ao criar usuário de teste",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setCreating(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Criar Usuário de Teste
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground">
            <p><strong>Email:</strong> teste@financas.com</p>
            <p><strong>Senha:</strong> teste123456</p>
          </div>
          <Button 
            onClick={createTestUser} 
            disabled={creating}
            className="w-full"
          >
            {creating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Criando usuário...
              </>
            ) : (
              'Criar Usuário de Teste'
            )}
          </Button>
          <p className="text-xs text-muted-foreground">
            Este usuário será criado com dados de exemplo e algumas categorias pré-definidas.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
