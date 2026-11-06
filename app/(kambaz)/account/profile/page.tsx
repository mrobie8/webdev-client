"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

export default function Profile() {
  const [profile, setProfile] = useState<(User & { dob?: string }) | null>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router]);

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!profile) return null;
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h3>Profile</h3>

      <label htmlFor="wd-username" className="mt-2 block text-sm">
        Username
      </label>
      <input
        id="wd-username"
        className="block w-full rounded border border-neutral-300 px-3 py-1.5"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />

      <label htmlFor="wd-password" className="mt-2 block text-sm">
        Password
      </label>
      <input
        id="wd-password"
        type="password"
        className="block w-full rounded border border-neutral-300 px-3 py-1.5"
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
      />

      <label htmlFor="wd-firstname" className="mt-2 block text-sm">
        First name
      </label>
      <input
        id="wd-firstname"
        className="block w-full rounded border border-neutral-300 px-3 py-1.5"
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
      />

      <label htmlFor="wd-lastname" className="mt-2 block text-sm">
        Last name
      </label>
      <input
        id="wd-lastname"
        className="block w-full rounded border border-neutral-300 px-3 py-1.5"
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
      />

      <label htmlFor="wd-dob" className="mt-2 block text-sm">
        Date of birth
      </label>
      <input
        id="wd-dob"
        type="date"
        className="block w-full rounded border border-neutral-300 px-3 py-1.5"
        value={profile.dob ?? ""}
        onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
      />

      <label htmlFor="wd-email" className="mt-2 block text-sm">
        Email
      </label>
      <input
        id="wd-email"
        type="email"
        className="block w-full rounded border border-neutral-300 px-3 py-1.5"
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />

      <label htmlFor="wd-role" className="mt-2 block text-sm">
        Role
      </label>
      <select
        id="wd-role"
        className="block w-full rounded border border-neutral-300 px-3 py-1.5"
        value={profile.role}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="mt-4 w-full rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Sign out
      </button>
    </div>
  );
}
