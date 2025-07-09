import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src="/ita3d-logo.png" alt="ITA3D Logo" width={120} height={40} className="h-auto" />
          <span className="sr-only">ITA3D</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-foreground transition-colors hover:text-primary">
            Início
          </Link>
          <Link href="#servicos" className="text-muted-foreground transition-colors hover:text-primary">
            Serviços
          </Link>
          <Link href="#contato" className="text-muted-foreground transition-colors hover:text-primary">
            Contato
          </Link>
          <Button asChild>
            <Link href="/orcamento">Solicitar Orçamento</Link>
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden bg-transparent">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background/80 backdrop-blur-md">
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Image src="/ita3d-logo.png" alt="ITA3D Logo" width={120} height={40} className="h-auto" />
                <span className="sr-only">ITA3D</span>
              </Link>
              <Link href="/" className="text-foreground hover:text-primary">
                Início
              </Link>
              <Link href="#servicos" className="text-muted-foreground hover:text-primary">
                Serviços
              </Link>
              <Link href="#contato" className="text-muted-foreground hover:text-primary">
                Contato
              </Link>
              <Button asChild>
                <Link href="/orcamento">Solicitar Orçamento</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
