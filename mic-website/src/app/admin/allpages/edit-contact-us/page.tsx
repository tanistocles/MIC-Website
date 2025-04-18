import { EditForm } from '@/app/admin/allpages/edit-contact-us/edit-form';
import { fetchContacts } from '../../../lib/db-utils';
import styles from './style.module.css';

export default async function AdminContact() {
  const contacts = await fetchContacts();

  return (
    <main className={styles.container}>
      <h1 className='sr-only'>Todos</h1>
      <label className={styles.labelEdit} htmlFor='todo'>
        Edit Contact Details
      </label>
      <ul className={styles.ulItems}>
        {contacts.map((contact) => (
          <li className={styles.liItem} key={contact.id}>
            {contact.name} = {contact.description}
            <EditForm id={contact.id} />
          </li>
        ))}
      </ul>
    </main>
  );
}
