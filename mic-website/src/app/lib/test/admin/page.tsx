import { EditForm } from "@/app/lib/test/admin/edit-form";
import { fetchContacts } from "../../db-utils";

export default async function AdminContact() {

    const contacts = await fetchContacts();

    return (
        <main>
          <h1 className="sr-only">Todos</h1>
          <label htmlFor="todo">Edit Contact Details</label>
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                {contact.name} = {contact.description}
                <EditForm id={contact.id} />
              </li>
            ))}
          </ul>
        </main>
      );
}