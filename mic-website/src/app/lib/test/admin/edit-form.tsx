"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { editTodo } from "./actions";

const initialState = {
  message: "",
};

function EditButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Edit
    </button>
  );
}

export function EditForm({ id}: { id: number}) {
  // useActionState is available with React 19 (Next.js App Router)
  const [state, formAction] = useActionState(editTodo, initialState);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <input type="text" name="description" required/>
      <EditButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
