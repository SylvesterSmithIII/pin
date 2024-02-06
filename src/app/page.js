'use client'

import SigninButton from "@/components/SigninButton";
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { data: session } = useSession(); // Using useSession hook from next-auth/react
  const router = useRouter();

  useEffect(() => {
    // If there's no user session, redirect to the login page
    if (session) {
      router.push('/home'); // Replace with the path of your login page
    }
  }, [session, router]);

  // Render your protected page content here
  return (
    <div>
      <h1>Home Page</h1>
      <SigninButton />
      {/* Add your content here */}
    </div>
  );
}