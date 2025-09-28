
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

export interface Category {
  id: string;
  nome: string;
  tags: string | null;
  created_at: string;
  updated_at: string;
  userid: string;
}

export function useCategories() {
  const { user } = useAuth();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = async () => {
    if (!user?.id) return;
    
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('categorias')
        .select('*')
        .eq('userid', user.id)
        .order('nome');

      if (error) throw error;

      setCategories(data || []);
    } catch (error: any) {
      console.error('Erro ao carregar categorias:', error);
      toast.error('Erro ao carregar categorias: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchCategories();
    }
  }, [user]);

  const createCategory = async (newCategory: { nome: string; tags?: string }) => {
    if (!user?.id) {
      toast.error('Usuário não autenticado');
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('categorias')
        .insert([{
          nome: newCategory.nome,
          tags: newCategory.tags || null,
          userid: user.id
        }])
        .select()
        .single();

      if (error) throw error;

      setCategories(prev => [...prev, data]);
      toast.success('Categoria criada com sucesso!');
    } catch (error: any) {
      console.error('Erro ao criar categoria:', error);
      toast.error('Erro ao criar categoria: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const updateCategory = async ({ id, updates }: { id: string; updates: { nome: string; tags?: string } }) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('categorias')
        .update({
          nome: updates.nome,
          tags: updates.tags || null,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .eq('userid', user!.id)
        .select()
        .single();

      if (error) throw error;

      setCategories(prev => prev.map(cat => cat.id === id ? data : cat));
      toast.success('Categoria atualizada com sucesso!');
    } catch (error: any) {
      console.error('Erro ao atualizar categoria:', error);
      toast.error('Erro ao atualizar categoria: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCategory = async (id: string) => {
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('categorias')
        .delete()
        .eq('id', id)
        .eq('userid', user!.id);

      if (error) throw error;

      setCategories(prev => prev.filter(cat => cat.id !== id));
      toast.success('Categoria excluída com sucesso!');
    } catch (error: any) {
      console.error('Erro ao excluir categoria:', error);
      toast.error('Erro ao excluir categoria: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    categories,
    isLoading,
    error: null,
    createCategory,
    updateCategory,
    deleteCategory,
    isCreating: false,
    isUpdating: false,
    isDeleting: false,
  };
}
