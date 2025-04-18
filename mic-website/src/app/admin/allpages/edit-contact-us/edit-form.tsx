'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { editTodo } from './actions';
import styles from './style.module.css';

const initialState = {
  message: '',
};

function EditButton() {
  const { pending } = useFormStatus();

  return (
    <button className={styles.editButton} type='submit' aria-disabled={pending}>
      Edit
    </button>
  );
}

export function EditForm({ id }: { id: number }) {
  // useActionState is available with React 19 (Next.js App Router)
  const [state, formAction] = useActionState(editTodo, initialState);

  return (
    <div className={styles.formContainer}>
      <form className={styles.formEdit} action={formAction}>
        <input className={styles.inputStyle} type='hidden' name='id' value={id} />
        <input className={styles.inputStyle} type='text' name='description' required />
        <EditButton />
        <p aria-live='polite' className='sr-only' role='status'>
          {state?.message}
        </p>
      </form>
    </div>
  );
}
