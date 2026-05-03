import { useState } from 'react';
import styles from './AddTicketButton.module.scss';

interface Props {
  onAdd: (title: string, desc: string) => void;
}

export const AddTicketButton = ({ onAdd }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = async () => {
    if (!title.trim()) return;

    await onAdd(title, desc);

    setTitle('');
    setDesc('');
    setIsOpen(false);
  };

  return (
    <div>
      <button className={styles.button} onClick={() => setIsOpen(true)}>
        + Add ticket
      </button>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h3>New ticket</h3>

            <input
              placeholder="Title"
              className={styles.title}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Description"
              className={styles.desc}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />

            <div className={styles.actions}>
              <button className={styles.create} onClick={handleSubmit}>
                Create
              </button>
              <button className={styles.cancel} onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
