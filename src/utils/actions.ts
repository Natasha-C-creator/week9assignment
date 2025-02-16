import { auth } from "@clerk/nextjs/server";
import { useState } from "react";

export default function AddPost() {
  const [postName, setPostName] = useState<string>("");

  async function addPost(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get("name");

    const { userId } = await auth();

    if (!userId) {
      throw new Error("You must be signed in to post");
    }

    console.log("Adding post with name:", name);
  }
}

//   return (
//     <form onSubmit={addPost}>
//       <input
//         value={postName}
//         onChange={(e) => setPostName(e.target.value)}
//         type="text"
//       />

//       <button type="submit">Add Post</button>
//     </form>
//   );
//
