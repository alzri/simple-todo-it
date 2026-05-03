'use client';

import { useEffect, useState } from 'react';
import {
  getTickets,
  createTicket,
  updateTicketStatus,
  updateTicket,
} from '../services/tickets.service';
import { TicketStatuses } from '../components/ticket-status/TicketStatus.types';
import { ITicketCardProps } from '../components/ticket-card/TicketCard.types';

export const useTickets = () => {
  const [tickets, setTickets] = useState<ITicketCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  // LOAD
  useEffect(() => {
    loadTickets();
  }, []);

  const loadTickets = async () => {
    setLoading(true);
    const data = await getTickets();
    setTickets(data || []);
    setLoading(false);
  };

  // CREATE
  const addTicket = async (title: string, desc: string) => {
    const created = await createTicket(title, desc);

    if (!created) {
      console.error('Ticket NOT created in DB');
      return;
    }

    setTickets((prev) => [created, ...prev]);
  };

  // UPDATE STATUS
  const changeStatus = async (id: string, status: TicketStatuses) => {
    // optimistic update
    setTickets((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));

    const updated = await updateTicketStatus(id, status);

    if (!updated) {
      console.error('Update failed');
      loadTickets(); // rollback
    }
  };

  // EDIT
  const editTicket = async (id: string, title: string, desc: string) => {
    const updated = await updateTicket(id, title, desc);

    if (!updated) return;

    setTickets((prev) => prev.map((t) => (t.id === id ? updated : t)));
  };

  return {
    tickets,
    loading,
    addTicket,
    changeStatus,
    editTicket,
    reload: loadTickets,
  };
};
