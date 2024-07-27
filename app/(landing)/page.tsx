import Image from "next/image";
import {ArrowRightIcon, BookIcon, CodeIcon, TriangleIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {SignedIn, SignedOut, SignOutButton, UserButton} from "@clerk/nextjs";

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">Next.js</h1>
          <p className="mt-3 text-2xl">
            Get started by editing <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">app/page.tsx</code>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 sm:w-full">
            <SignedIn>
                <SignOutButton>
                    <Button>
                      <TriangleIcon className="mr-2" />
                      Logout
                    </Button>
                </SignOutButton>
                <UserButton />
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in">
                <Button className="px-8 py-4 text-lg font-semibold text-white bg-black rounded-lg">
                  <TriangleIcon className="mr-2" />
                  Login
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button variant="outline" className="px-8 py-4 text-lg font-semibold">
                  <TriangleIcon className="mr-2" />
                  Sign up
                </Button>
              </Link>
            </SignedOut>
          </div>
        </main>
        <footer className="flex items-center justify-center w-full h-24 border-t">

        </footer>
      </div>
  )
}
