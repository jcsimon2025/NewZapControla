
import { supabase } from '@/integrations/supabase/client';

export async function validateWhatsAppNumber(phoneNumber: string): Promise<{ exists: boolean; whatsappId?: string }> {
  try {
    const { data, error } = await supabase.functions.invoke('validate-whatsapp', {
      body: { phoneNumber }
    });

    if (error) {
      console.error('Erro na validação do WhatsApp:', error);
      throw new Error('Não foi possível validar o número do WhatsApp');
    }

    return data;
  } catch (error) {
    console.error('Erro na validação do WhatsApp:', error);
    throw new Error('Não foi possível validar o número do WhatsApp');
  }
}
