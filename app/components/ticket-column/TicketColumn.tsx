import { TicketCard } from '../ticket-card/TicketCard';
import { ITicketCardProps } from '../ticket-card/TicketCard.types';
import { TicketStatuses } from '../ticket-status/TicketStatus.types';
import styles from './TicketColumn.module.scss';
import clsx from 'clsx';

interface ITicketColumnProps {
  tickets: ITicketCardProps[];
  status: TicketStatuses;
  changeStatus: (id: string, status: TicketStatuses) => void;
  editTicket: (id: string, title: string, desc: string) => void;
}

export const TicketColumn = ({ tickets, status, changeStatus, editTicket }: ITicketColumnProps) => {
  return (
    <div className={styles['column']}>
      <h2 className={clsx(styles['column-title'], styles[`${status}`])}>
        {status.replace(/-/g, ' ')}
      </h2>

      <div className={styles['ticket-list']}>
        {tickets
          .filter((ticket) => ticket.status === status)
          .map((ticket) => (
            <TicketCard
              key={ticket.id}
              id={ticket.id}
              title={ticket.title}
              desc={ticket.desc}
              status={ticket.status}
              onStatusChange={(newStatus) => changeStatus(ticket.id, newStatus)}
              onEdit={editTicket}
            />
          ))}
      </div>
    </div>
  );
};
