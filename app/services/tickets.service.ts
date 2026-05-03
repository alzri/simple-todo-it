import { supabase } from '../lib/supabase';
import { TicketStatuses } from '../components/ticket-status/TicketStatus.types';

// GET
export const getTickets = async () => {
  const { data, error } = await supabase
    .from('tickets')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('GET ERROR:', error);
    return [];
  }

  return data;
};

// CREATE
export const createTicket = async (title: string, desc: string) => {
  const res = await supabase
    .from('tickets')
    .insert([
      {
        title,
        desc,
        status: 'not-started',
      },
    ])
    .select()
    .single();

  console.log('SUPABASE RESPONSE:', res);

  return res.data;
};

// UPDATE
export const updateTicketStatus = async (id: string, status: TicketStatuses) => {
  const { data, error } = await supabase
    .from('tickets')
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('UPDATE ERROR:', error);
    return null;
  }

  return data;
};

export const updateTicket = async (id: string, title: string, desc: string) => {
  const { data, error } = await supabase
    .from('tickets')
    .update({
      title,
      desc,
    })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('UPDATE ERROR:', error);
    return null;
  }

  return data;
};
