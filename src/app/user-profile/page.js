import Head from "next/head";
import Navbar from "@/components/Navbar";
import Header from "@/components/header";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function AddBioPage(userId) {
  async function handleSaveBio(formData) {
    "use server";
    console.log("Saving bio to the database...");
    const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

    const bio = formData.get("bio");
    const city = formData.get("city");

    await db.query(`INSERT INTO posts (bio, city) VALUES ($1, $2)`, [
      bio,
      city,
    ]);
    console.log("Bio saved!");

    revalidatePath("/posts");
    redirect("/posts");
  }
  return (
    <>
      <Navbar />
      <Header />
      <p>User Profile</p>
      <form action={`/user-profile/${userId}`} method="POST">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="comment"
            htmlFor="Bio"
          >
            Add Bio here
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="comment"
            type="text"
            placeholder="Bio"
          />
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="comment"
            htmlFor="City"
          >
            Add City here
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="comment"
            type="text"
            placeholder="City"
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
}
