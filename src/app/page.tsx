'use client';

import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import styles from './page.module.css';

export default function Home() {
  const userRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { push } = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = userRef.current?.value;
    const password = passwordRef.current?.value;

    if (user === 'admin' && password === 'admin') {
      push('/home');
    } else {
      alert('Invalid user or password');
    }
  };

  return (
    <main className={styles.main} onSubmit={handleSubmit}>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="user">
          User
        </label>
        <input
          type="text"
          className={styles.input}
          id="user"
          ref={userRef}
          required
        />
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          type="password"
          className={styles.input}
          id="password"
          ref={passwordRef}
          required
        />
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </main>
  );
}
