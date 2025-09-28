-- Adicionar política INSERT faltante para a tabela profiles
-- Isso permite que usuários criem seu próprio perfil
CREATE POLICY "Users can create their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = id);

-- Melhorar as políticas existentes para garantir máxima segurança
-- Recriar política de SELECT para profiles com melhor controle
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = id);

-- Recriar política de UPDATE para profiles com melhor controle
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = id) 
WITH CHECK (auth.uid() = id);

-- Verificar e garantir que todas as tabelas tenham RLS habilitado
-- (Redundante, mas garante que esteja ativo)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categorias ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lembretes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transacoes ENABLE ROW LEVEL SECURITY;

-- Adicionar comentários para documentar as políticas
COMMENT ON POLICY "Users can view their own profile" ON public.profiles IS 
'Permite que usuários vejam apenas seu próprio perfil usando auth.uid()';

COMMENT ON POLICY "Users can update their own profile" ON public.profiles IS 
'Permite que usuários atualizem apenas seu próprio perfil usando auth.uid()';

COMMENT ON POLICY "Users can create their own profile" ON public.profiles IS 
'Permite que usuários criem seu próprio perfil durante o registro';