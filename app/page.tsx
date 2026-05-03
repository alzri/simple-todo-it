'use client';

import styles from './page.module.css';
import { TicketColumn } from './components/ticket-column/TicketColumn';
import { AddTicketButton } from './components/add-ticket-button/AddTicketButton';
import { useTickets } from './hooks/useTickets';

export default function Home() {
  const { tickets, addTicket, changeStatus, editTicket } = useTickets();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles['title-wrapper']}>
            <h2>Tasks</h2>
            <p>Keep track of your tasks all in one place</p>
          </div>

          <AddTicketButton onAdd={addTicket} />
        </div>

        <div className={styles['columns-wrapper']}>
          <TicketColumn
            tickets={tickets}
            status="not-started"
            changeStatus={changeStatus}
            editTicket={editTicket}
          />

          <TicketColumn
            tickets={tickets}
            status="on-track"
            changeStatus={changeStatus}
            editTicket={editTicket}
          />

          <TicketColumn
            tickets={tickets}
            status="in-progress"
            changeStatus={changeStatus}
            editTicket={editTicket}
          />

          <TicketColumn
            tickets={tickets}
            status="completed"
            changeStatus={changeStatus}
            editTicket={editTicket}
          />
        </div>
      </main>
    </div>
  );
}
