import React from 'react';
import { ITicketCardProps } from './TicketCard.types';
import styles from './TicketCard.module.scss';
import { Text } from '../text/Text';
import { TicketStatus } from '../ticket-status/TicketStatus';

export const TicketCard = ({ title, desc, className, ...rest }: ITicketCardProps) => {
  return (
    <div className={styles['ticket-wrapper']} {...rest}>
      <TicketStatus status={'not-started'} />
      <div className={styles.content}>
        <Text className={styles.title} component="h2" size="h2" children={title} />
        <Text className={styles.desc} component="p" size="paragraph-medium" children={desc} />
      </div>
    </div>
  );
};
