'use client';
import styles from './page.module.css';
import { TicketColumn } from './components/ticket-column/TicketColumn';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles['title-wrapper']}>
            <h2>Tasks</h2>
            <p>Keep track of your tasks all in one place</p>
          </div>
          <p className={styles.button}>Add new task</p>
        </div>
        <div className={styles['columns-wrapper']}>
          <TicketColumn tickets={[]} status={'not-started'} />
          <TicketColumn tickets={[]} status={'on-track'} />
          <TicketColumn tickets={[]} status={'in-progress'} />
          <TicketColumn tickets={[]} status={'completed'} />
        </div>
      </main>
    </div>
  );
}
