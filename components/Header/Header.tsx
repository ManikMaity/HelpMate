import { HelpingHand, PenBox } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeChangeButton } from "../Buttons/ThemeChangeButton"
import { SignedOut, SignedIn, SignInButton } from "@clerk/nextjs"
import CustomUserButton from "../UserButton/CustomUserButton"
import checkUser from "@/lib/checkUser"

async function Header() {

  await checkUser();

  return (
    <header className="bg-white dark:bg-slate-950 shadow-md border-b">
      <nav className="mx-auto py-2 px-4 flex items-center justify-between">
        <Link href={"/"} className="flex items-center">
          <div className="text-xl md:text-2xl flex gap-2 font-bold items-center">
          <HelpingHand size={36} className="text-blue-500"/>
          <p>HelpMate</p>
          </div>
        </Link>

        <div className="flex gap-4 items-center">
          <Link href="/events?create=true">
          <Button>
            <PenBox/>
           <p>Create Event</p>
            </Button>
          </Link>
          <SignedOut>
            <SignInButton forceRedirectUrl={"/dashboard"}>
            <Button variant="outline">
            Login
          </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <CustomUserButton/>
          </SignedIn>
          <ThemeChangeButton/>
        </div>
      </nav>
    </header>
  )
}

export default Header
