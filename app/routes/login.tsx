import type { ActionFunctionArgs } from "react-router";
import { redirect } from "react-router";
import {hashPassword,createToken,} from "../utils/auth.server";
import { db } from "../utils/db.server";

export async function action({request,}: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Server-only operations
  const hashedPassword = await hashPassword(password);
  const user = await db.user.create({
    data: { email, password: hashedPassword },
  });

  const token = createToken(user.id);

  return redirect("/dashboard", {
    headers: {
      "Set-Cookie": `token=${token}; HttpOnly; Secure; SameSite=Strict`,
    },
  });
}

export default function Login() {
  return (
    <form method="post">
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <button type="submit">Login</button>
    </form>
  );
}