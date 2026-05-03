import React, { HTMLAttributes } from 'react';

export type TicketStatuses = 'not-started' | 'on-track' | 'in-progress' | 'completed';

export interface ITicketStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  status: TicketStatuses;
  onStatusChange?: (status: TicketStatuses) => void;
}
