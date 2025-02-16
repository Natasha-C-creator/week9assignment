import { db } from "src/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NewUserProfile() {
  async function handleSubmit(formValues) {
    "use server";

    const firstName = formValues.get("first_name");
    const age = formValues.get("age");
    const city = formValues.get("city");

    db.query(`INSERT INTO users (first_name, age, city) VALUES ($1, $2, $3)`, [
      firstName,
      age,
      city,
    ]);

    revalidatePath("/user-profile");
    redirect("/user-profile");
  }

  return (
    <>
      <h1>Add some details about you!</h1>
      <form action={handleSubmit}>
        <label htmlFor="first_name">First Name: </label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          className="text-emerald-600"
        />
        <label htmlFor="age">Age: </label>
        <input type="text" name="age" id="age" className="text-emerald-600" />
        <label htmlFor="city">City: </label>
        <input type="text" name="city" id="city" className="text-emerald-600" />
        <button
          type="submit"
          className="border-amber-600 border-4 m-4 hover:bg-sky-700"
        >
          Update your Bio
        </button>
      </form>
    </>
  );
}

//TRIED THIS LABEL FROM RADIX USING THE CODE BELOW, BUT IT JUST WASN'T HAPPY! HAD AN ISSUE WITH THE HANDLESUBMIT:

// import { db } from "src/utils/dbConnection";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
// import * as React from "react";
// import { Label } from "radix-ui";

// export default function NewUserProfile() {
//   async function handleSubmit(formValues) {
//     "use server";

//     const firstName = formValues.get("first_name");
//     const age = formValues.get("age");
//     const city = formValues.get("city");

//     db.query(`INSERT INTO users (first_name, age, city) VALUES ($1, $2, $3)`, [
//       firstName,
//       age,
//       city,
//     ]);

//     revalidatePath("/user-profile");
//     redirect("/user-profile");
//   }
//   export default RadixLabel;
//   const RadixLabel = () => (
//   return (
//     <>
//       <h1>Add some details about you!</h1>
//       <form action={handleSubmit}>
//       <div className="flex flex-wrap items-center gap-[15px] px-5">
// 		<Label.Root
// 			className="text-[15px] font-medium leading-[35px] text-white"
// 			htmlFor="firstName"
// 		>
// 			First name
// 		</Label.Root>
// 		<input
// 			className="inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white focus:shadow-[0_0_0_2px_black]"
// 			type="text"
// 			id="firstName"
// 			defaultValue="Pedro Duarte"
// 		/>
//     		<Label.Root
// 			className="text-[15px] font-medium leading-[35px] text-white"
// 			htmlFor="firstName"
// 		>
// 			Age
// 		</Label.Root>
// 		<input
// 			className="inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white focus:shadow-[0_0_0_2px_black]"
// 			type="text"
// 			id="age"
// 			defaultValue="Pedro Duarte"
// 		/>
//     		<Label.Root
// 			className="text-[15px] font-medium leading-[35px] text-white"
// 			htmlFor="firstName"
// 		>
// 			City
// 		</Label.Root>
// 		<input
// 			className="inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white focus:shadow-[0_0_0_2px_black]"
// 			type="text"
// 			id="city"
// 			defaultValue="Pedro Duarte"
// 		/>
// 	</div>
//   </form>
//     </>
//   );
// }

//         {/* /* <label htmlFor="first_name">First Name: </label>
//         <input
//           type="text"
//           name="first_name"
//           id="first_name"
//           className="text-emerald-600"
//         />
//         <label htmlFor="age">Age: </label>
//         <input type="text" name="age" id="age" className="text-emerald-600" />
//         <label htmlFor="city">City: </label>
//         <input type="text" name="city" id="city" className="text-emerald-600" />
//         <button
//           type="submit"
//           className="border-amber-600 border-4 m-4 hover:bg-sky-700"
//         > */
//         //   Update your Bio
//         // </button>
