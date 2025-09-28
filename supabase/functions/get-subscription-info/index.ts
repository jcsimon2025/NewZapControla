import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('[GET-SUBSCRIPTION-INFO] Function started');
    const { subscriptionId } = await req.json();
    console.log('[GET-SUBSCRIPTION-INFO] Received subscriptionId:', subscriptionId);
    
    const apiKey = Deno.env.get('ZAPCONTROLA_API_KEY');
    if (!apiKey) {
      console.error('[GET-SUBSCRIPTION-INFO] ZAPCONTROLA_API_KEY not found in environment');
      return new Response(
        JSON.stringify({ error: 'API configuration error' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }
    console.log('[GET-SUBSCRIPTION-INFO] API key found');

    // For now, return mock data since the external API might be unavailable
    console.log('[GET-SUBSCRIPTION-INFO] Returning mock data for testing');
    const mockData = {
      id: subscriptionId || 'mock-id',
      dataAssinatura: '2025-08-01T00:00:00Z',
      valor: 29.90,
      ciclo: 'monthly',
      status: 'active',
      proimoPagamento: '2025-09-01T00:00:00Z',
      creditCard: {
        creditCardNumber: '**** **** **** 1234',
        creditCardBrand: 'Visa',
        creditCardToken: 'mock-token'
      }
    };
    
    console.log('[GET-SUBSCRIPTION-INFO] Returning mock data:', mockData);
    return new Response(
      JSON.stringify(mockData),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

    // Keep the real API call commented for now
    /*
    const credentials = btoa(`zapcontrolav20:${apiKey}`);
    const body = new URLSearchParams();
    
    if (subscriptionId) {
      body.append('subscription', subscriptionId);
    }
    
    console.log('[GET-SUBSCRIPTION-INFO] Making request to external API');
    const response = await fetch('https://webhook.zapcontrola.com.br/webhook/assinatura/info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${credentials}`
      },
      body: body.toString()
    });

    console.log('[GET-SUBSCRIPTION-INFO] External API response status:', response.status);
    if (!response.ok) {
      const errorText = await response.text();
      console.error('[GET-SUBSCRIPTION-INFO] Subscription API error:', response.status, response.statusText, errorText);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to fetch subscription info', 
          details: `API returned ${response.status}: ${response.statusText}`,
          responseBody: errorText 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const data = await response.json();
    console.log('[GET-SUBSCRIPTION-INFO] Successfully fetched data:', data);
    
    return new Response(
      JSON.stringify(data),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
    */
  } catch (error) {
    console.error('Error in get-subscription-info function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});