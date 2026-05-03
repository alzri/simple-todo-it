import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { TicketStatuses, ITicketStatusProps } from './TicketStatus.types';
import styles from './TicketStatus.module.scss';

export const TicketStatus = ({ status, onStatusChange }: ITicketStatusProps) => {
  const [ticketStatus, setTicketStatus] = useState(status);

  useEffect(() => {
    setTicketStatus(status);
  }, [status]);

  const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as TicketStatuses;

    setTicketStatus(value);
    onStatusChange?.(value);
  };

  return (
    <div>
      <select
        className={clsx(styles.ticketStatus, {
          [styles['not-started']]: ticketStatus === 'not-started',
          [styles['on-track']]: ticketStatus === 'on-track',
          [styles['in-progress']]: ticketStatus === 'in-progress',
          [styles.complited]: ticketStatus === 'completed',
        })}
        value={ticketStatus}
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
