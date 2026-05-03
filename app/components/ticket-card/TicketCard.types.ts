import React from 'react';
import { TicketStatuses } from '../ticket-status/TicketStatus.types';

export interface ITicketCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  desc: string;
  children?: React.ReactNode;
  status: TicketStatuses;
}
