// import { auth } from "@clerk/nextjs/server";

// export default function AddPost() {
//   async function addPost(postData: PostData) {
//     "use server";

//     const { userId } = await auth();

//     if (!userId) {
//       throw new Error("You must be signed in to post");
//     }

//     console.log("post item server action", postData);
//   }

//   return (
//     <form action={postItem}>
//       <input value={"test"} type="text" name="name" />
//       <button type="submit">Add Post</button>
//     </form>
//   );
// }
