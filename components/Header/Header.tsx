import { HelpingHand, PenBox } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

function Header() {
  return (
    <header className="bg-white dark:bg-slate-900 shadow-md border-b">
      <nav className="mx-auto py-2 px-4 flex items-center justify-between">
        <Link href={"/"} className="flex items-center">
          <div className="text-2xl flex gap-2 font-bold items-center">
          <HelpingHand size={36} className="text-blue-500"/>
          <p>Helpmate</p>
          </div>
        </Link>

        <div className="flex gap-4 items-center">
          <Link href="/events?create=true">
          <Button>
            <PenBox/>
            Create Event</Button>
          </Link>
          <Button variant="outline">
            Login
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header
