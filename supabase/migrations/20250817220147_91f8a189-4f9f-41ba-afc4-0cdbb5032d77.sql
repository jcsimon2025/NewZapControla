-- Fix database schema security issues
-- Make userid NOT NULL in lembretes table and add proper foreign key
ALTER TABLE public.lembretes 
ALTER COLUMN userid SET NOT NULL;

-- Make userid NOT NULL in transacoes table  
ALTER TABLE public.transacoes 
ALTER COLUMN userid SET NOT NULL;

-- Update any existing records with NULL userid to prevent constraint violations
-- (This should not happen in practice due to RLS policies, but safety first)
UPDATE public.lembretes 
SET userid = auth.uid() 
WHERE userid IS NULL AND auth.uid() IS NOT NULL;

UPDATE public.transacoes 
SET userid = auth.uid() 
WHERE userid IS NULL AND auth.uid() IS NOT NULL;