import { redirect } from "react-router";
import type { Route } from "../+types/destroy-contact";

import { deleteContact } from "../../api/contacts";

export async function action({ params }: Route.ActionArgs) {
  await deleteContact(params.contactId);
  return redirect("/");
}