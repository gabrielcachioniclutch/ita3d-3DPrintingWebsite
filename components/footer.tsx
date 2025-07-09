import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-8">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Image src="/ita3d-logo.png" alt="ITA3D Logo" width={120} height={40} className="h-auto" />
          <span className="sr-only">ITA3D</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 text-sm md:gap-6">
          <Link href="/" className="text-muted-foreground hover:text-primary">
            Início
          </Link>
          <Link href="#servicos" className="text-muted-foreground hover:text-primary">
            Serviços
          </Link>
          <Link href="#contato" className="text-muted-foreground hover:text-primary">
            Contato
          </Link>
          <Link href="/orcamento" className="text-muted-foreground hover:text-primary">
            Orçamento
          </Link>
        </nav>
        <p className="text-sm text-muted-foreground">© 2024 ITA3D. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
