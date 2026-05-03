import React from 'react';
import clsx from 'clsx';
import { TicketStatuses, ITicketStatusProps } from './TicketStatus.types';
import styles from './TicketStatus.module.scss';

export const TicketStatus = ({ status, onStatusChange }: ITicketStatusProps) => {
  const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onStatusChange?.(e.target.value as TicketStatuses);
  };

  return (
    <div>
      <select
        className={clsx(styles.ticketStatus, {
          [styles['not-started']]: status === 'not-started',
          [styles['on-track']]: status === 'on-track',
          [styles['in-progress']]: status === 'in-progress',
          [styles.completed]: status === 'completed',
        })}
        value={status}
        onChange={handleStatus}
      >
        <option value="not-started">Not started</option>
        <option value="on-track">On track</option>
        <option value="in-progress">In progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};
