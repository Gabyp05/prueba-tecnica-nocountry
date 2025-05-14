import { useState } from "react"
import { CircleIcon, MenuIcon, XIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-4 z-40 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 md:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-64 transform border-r bg-white transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-center gap-2 border-b px-4">
          <CircleIcon className="h-6 w-6" />
          <span className="text-xl font-bold">TechX</span>
        </div>

        <nav className="mt-8 px-4">
          <Link 
            href="#" 
            className="block rounded-md border border-gray-300 bg-zinc-200 p-2 text-center font-medium"
            onClick={() => setIsOpen(false)}
          >
            Equipos
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Sidebar