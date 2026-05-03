import React, { useState } from 'react';
import { ITicketCardProps } from './TicketCard.types';
import styles from './TicketCard.module.scss';
import { Text } from '../text/Text';
import { TicketStatus } from '../ticket-status/TicketStatus';

export const TicketCard = ({
  id,
  title,
  desc,
  status,
  onStatusChange,
  onEdit,
  className,
  ...rest
}: ITicketCardProps) => {
  const [editTitle, setEditTitle] = useState(title);
  const [editDesc, setEditDesc] = useState(desc);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDesc, setIsEditingDesc] = useState(false);

  return (
    <div className={styles['ticket-wrapper']} {...rest}>
      <TicketStatus status={status} onStatusChange={onStatusChange} />

      <div className={styles.content}>
        {isEditingTitle ? (
          <input
            value={editTitle}
            autoFocus
            onChange={(e) => setEditTitle(e.target.value)}
            onBlur={() => {
              setIsEditingTitle(false);
              onEdit?.(id, editTitle, editDesc);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setIsEditingTitle(false);
                onEdit?.(id, editTitle, editDesc);
              }
            }}
          />
        ) : (
          <Text
            className={styles.title}
            component="h2"
            size="h2"
            onClick={() => setIsEditingTitle(true)}
          >
            {editTitle}
          </Text>
        )}
        {isEditingDesc ? (
          <textarea
            value={editDesc}
            autoFocus
            onChange={(e) => setEditDesc(e.target.value)}
            onBlur={() => {
              setIsEditingDesc(false);
              onEdit?.(id, editTitle, editDesc);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setIsEditingDesc(false);
                onEdit?.(id, editTitle, editDesc);
              }
            }}
          />
        ) : (
          <Text
            className={styles.desc}
            component="p"
            size="paragraph-medium"
            onClick={() => setIsEditingDesc(true)}
          >
            {editDesc}
          </Text>
        )}
      </div>
    </div>
  );
};
