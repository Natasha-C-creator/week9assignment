import Head from "next/head";
import Navbar from "@/components/Navbar";
import Header from "@/components/header";
import pg from "pg";

export default function Posts() {
  return (
    <>
      <Navbar />
      <Header />
      <p>Posts</p>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="title"
          htmlFor="title"
        >
          Post Title
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="comment"
          type="text"
          placeholder="title"
        />
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="comment"
          htmlFor="City"
        >
          Content
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="comment"
          type="text"
          placeholder="content"
        />
      </div>
      <button type="submit">Save</button>
    </>
  );
}
