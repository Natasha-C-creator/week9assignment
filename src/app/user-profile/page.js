import { currentUser } from "@clerk/nextjs/server";
import AddProfile from "src/app/user-profile/add-profile/page.js";

export default async function AddProfilePage() {
  const user = await currentUser();

  if (!user) {
    return <p>You must be signed in to use this feature.</p>;
  }

  const endUser = {
    id: user.id,
    bio: user.bio,
    city: user.city,
    user_id: user.user_Id,
  };

  return <AddProfile user={endUser} />;
}
