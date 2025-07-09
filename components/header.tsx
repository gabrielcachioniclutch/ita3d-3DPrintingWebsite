import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto my-4 h-16 flex items-center justify-between px-4 md:px-6 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg">
        {/* Left Section (Mobile Menu + Desktop Nav) */}
        <div className="flex items-center gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden bg-transparent text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background/80 backdrop-blur-md">
              {/* Mobile Nav Content */}
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                  <Image src="/ita3d-logo.png" alt="ITA3D Logo" width={120} height={40} className="h-auto" />
                  <span className="sr-only">ITA3D</span>
                </Link>
                <Link href="/" className="text-foreground hover:text-primary">
                  Início
                </Link>
                <Link href="#servicos" className="text-foreground hover:text-primary">
                  Serviços
                </Link>
                <Link href="#contato" className="text-foreground hover:text-primary">
                  Contato
                </Link>
                <Button asChild>
                  <Link href="/orcamento">Solicitar Orçamento</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <Link href="/" className="text-foreground transition-colors hover:text-primary">
              Início
            </Link>
            <Link href="#servicos" className="text-foreground transition-colors hover:text-primary">
              Serviços
            </Link>
            <Link href="#contato" className="text-foreground transition-colors hover:text-primary">
              Contato
            </Link>
          </nav>
        </div>

        {/* Center Section (Logo) - positioned absolutely to truly center it */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 font-semibold">
          <Image src="/ita3d-logo.png" alt="ITA3D Logo" width={120} height={40} className="h-auto" />
          <span className="sr-only">ITA3D</span>
        </Link>

        {/* Right Section (Buttons) */}
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/orcamento">Solicitar Orçamento</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
