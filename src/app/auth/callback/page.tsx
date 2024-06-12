import { syncClerkUserToDb } from "@/actions/users";
import LoaderPage from "@/components/loader-page";
import { redirect } from "next/navigation";

const ClerkCallbackPage = async () => {
  const response = await syncClerkUserToDb();
  if (response.success) return redirect("/");
  else return redirect("/login");
};

export default ClerkCallbackPage;
