
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Category } from '@/hooks/useCategories';

interface CategoryFormProps {
  category?: Category | null;
  onClose: () => void;
  onCreate: (newCategory: { nome: string; tags?: string }) => Promise<void> | void;
  onUpdate: (params: { id: string; updates: { nome: string; tags?: string } }) => Promise<void> | void;
  isProcessing?: boolean;
}

export function CategoryForm({
  category,
  onClose,
  onCreate,
  onUpdate,
  isProcessing = false,
}: CategoryFormProps) {
  const [nome, setNome] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (category) {
      setNome(category.nome);
      setTags(category.tags || '');
    } else {
      setNome('');
      setTags('');
    }
  }, [category]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nome.trim()) return;

    try {
      if (category) {
        await onUpdate({
          id: category.id,
          updates: { nome: nome.trim(), tags: tags.trim() },
        });
      } else {
        await onCreate({
          nome: nome.trim(),
          tags: tags.trim(),
        });
      }
      onClose();
    } catch (error) {
      console.error('Erro ao salvar categoria:', error);
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {category ? 'Editar Categoria' : 'Nova Categoria'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome da Categoria *</Label>
            <Input
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: Alimentação"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tags">Tags (opcional)</Label>
            <Textarea
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Ex: Restaurantes, Supermercados, Cafés"
              rows={3}
            />
            <p className="text-xs text-muted-foreground">
              Separe as tags com vírgulas para melhor organização
            </p>
          </div>
          
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={!nome.trim() || isProcessing}
            >
              {category ? 'Atualizar' : 'Criar'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
