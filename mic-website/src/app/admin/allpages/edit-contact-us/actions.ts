"use server";

import { revalidatePath } from "next/cache";
import sqlite3 from "sqlite3";
import { z } from "zod";
import { execute } from "@/app/lib/sql.js";

export async function editTodo(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const schema = z.object({
    id: z.string().min(1),
    description: z.string().min(1),
  });
  const data = schema.parse({
    id: formData.get("id"),
    description: formData.get("description"),
  });

  try {

    const db = new sqlite3.Database("micweb.db");
    const sql = `UPDATE contacts SET description=? WHERE id = ?`;
    try {
      await execute(db, sql, [`${data.description}`,`${data.id}`]);
    } catch (err) {
      console.log(err);
    } finally {
      db.close();
    }

    revalidatePath("/");
    return { message: `Edited todo ${data.description}` };
  } catch (e) {
    return { message: "Failed to edit todo" };
  }
}
