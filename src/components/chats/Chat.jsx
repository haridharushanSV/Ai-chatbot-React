import React from 'react';
import styles from './Chat.module.css';
export default function Chat({ message }) {
  return (
    <div className={styles.Chat}>
    {message.map(({ role, content }, index) => (
      <div key={index} className={styles.Message} data-role={role}>
        {content}
      </div>
    ))}
  </div>
  );
}
