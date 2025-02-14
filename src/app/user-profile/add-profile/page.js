"use client";

import { useState } from "react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddProfile({ user }) {
  const [bio, setBio] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/user-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bio, city, userId: user.id }),
      });

      if (!response.ok) {
        throw new Error("Failed to save profile data");
      }

      const data = await response.json();
      console.log("Profile data saved:", data);

      revalidatePath("/posts");
      redirect("/posts");
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  return (
    <>
      <p>User Profile</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Bio">Bio</label>
          <input
            id="Bio"
            type="text"
            name="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="City">City</label>
          <input
            id="City"
            type="text"
            name="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </>
  );
}
