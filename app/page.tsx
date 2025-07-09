import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, PhoneIcon as Whatsapp, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Sua Visão 3D, Realizada.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Transformamos suas ideias em realidade com serviços de impressão 3D de alta qualidade, projetos
                    especializados e consultoria técnica.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/orcamento">Solicitar Orçamento</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <Link href="#servicos">Nossos Serviços</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/2025-03-243.webp"
                width="550"
                height="400"
                alt="Impressora 3D em ação"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section id="servicos" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                  Nossos Serviços
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">O que fazemos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos uma gama completa de soluções para atender às suas necessidades de impressão 3D.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="bg-card/80 backdrop-blur-md text-card-foreground border-border">
                <CardHeader>
                  <CardTitle>Impressão 3D</CardTitle>
                  <CardDescription>
                    Transformamos seus designs digitais em objetos físicos com precisão e qualidade.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Utilizamos tecnologia de ponta para produzir peças detalhadas e funcionais, desde protótipos rápidos
                    até produtos finais. Trabalhamos com plásticos PLA, PETG e ABS. Cores disponíveis a consultar.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/80 backdrop-blur-md text-card-foreground border-border">
                <CardHeader>
                  <CardTitle>Medição e Réplica 3D de Peças</CardTitle>
                  <CardDescription>Digitalizamos e replicamos peças existentes com alta fidelidade.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Através de escaneamento 3D, criamos modelos digitais precisos para reprodução ou modificação de
                    peças.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/80 backdrop-blur-md text-card-foreground border-border">
                <CardHeader>
                  <CardTitle>Criação de Peças para Impressão</CardTitle>
                  <CardDescription>
                    Desenvolvemos modelos 3D para impressão, ideais para peças pequenas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Para replicar peças pequenas, é necessário que a peça original seja fornecida para medição e
                    modelagem precisa.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/80 backdrop-blur-md text-card-foreground border-border">
                <CardHeader>
                  <CardTitle>Consultoria em Montagem de Equipamento</CardTitle>
                  <CardDescription>
                    Oferecemos suporte especializado na montagem e otimização de seus equipamentos de impressão 3D.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ajuda profissional para decidir sua primeira impressora, montar, calibrar e otimizar suas
                    impressoras 3D, garantindo o melhor desempenho.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="galeria" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                  Nossa Galeria
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
                  Veja Nossos Trabalhos
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Confira algumas de nossas impressões 3D e o processo de trabalho.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Card className="flex flex-col items-center p-2 bg-card/80 backdrop-blur-md text-card-foreground border-border">
                <Image
                  src="/2025-03-24.webp"
                  width={300}
                  height={300}
                  alt="Sonic 3D impresso"
                  className="rounded-md object-cover w-full h-auto"
                />
              </Card>
              <Card className="flex flex-col items-center p-2 bg-card/80 backdrop-blur-md text-card-foreground border-border">
                <video controls loop muted className="rounded-md object-cover w-full h-auto">
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imprimindo-VfFgmEOIYakSIhPTH0wBSgyAsoIb0f.mp4" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </Card>
              <Card className="flex flex-col items-center p-2 bg-card/80 backdrop-blur-md text-card-foreground border-border">
                <Image
                  src="/2025-03-242.webp"
                  width={300}
                  height={300}
                  alt="Impressora 3D Creality"
                  className="rounded-md object-cover w-full h-auto"
                />
              </Card>
              <Card className="flex flex-col items-center p-2 bg-card/80 backdrop-blur-md text-card-foreground border-border">
                <Image
                  src="/2025-03-244.webp"
                  width={300}
                  height={300}
                  alt="Detalhe da impressão"
                  className="rounded-md object-cover w-full h-auto"
                />
              </Card>
              <Card className="flex flex-col items-center p-2 bg-card/80 backdrop-blur-md text-card-foreground border-border">
                <video controls loop muted className="rounded-md object-cover w-full h-auto">
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Alien-z6kquvqw9zZ5qJJ525kKQbC6BG78X0.mp4" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </Card>
              {/* Novos itens da galeria */}
              <Card className="flex flex-col items-center p-2 bg-card/80 backdrop-blur-md text-card-foreground border-border">
                <video controls loop muted className="rounded-md object-cover w-full h-auto">
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-07-09%20at%2013.20.28-0Xet5gMWzaycvLCIIZCNll1qrbxAB6.mp4" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </Card>
              <Card className="flex flex-col items-center p-2 bg-card/80 backdrop-blur-md text-card-foreground border-border">
                <Image
                  src="/WhatsApp Image 2025-07-09 at 13.21.37.jpeg"
                  width={300}
                  height={300}
                  alt="Óculos VR em suporte impresso em 3D"
                  className="rounded-md object-cover w-full h-auto"
                />
              </Card>
            </div>
          </div>
        </section>

        <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                  Entre em Contato
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">Fale Conosco</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos prontos para transformar suas ideias em realidade.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-6 py-12 sm:max-w-none sm:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col items-center p-6 text-center bg-card/80 backdrop-blur-md text-card-foreground border-border">
                <Mail className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="mb-2">Email</CardTitle>
                <CardDescription>Envie-nos um e-mail e responderemos o mais breve possível.</CardDescription>
                <Button variant="link" asChild className="mt-4 text-primary hover:text-accent">
                  <a href="mailto:gabriel.cachioni@gmail.com">gabriel.cachioni@gmail.com</a>
                </Button>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center bg-card/80 backdrop-blur-md text-card-foreground border-border">
                <Whatsapp className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="mb-2">WhatsApp</CardTitle>
                <CardDescription>Fale conosco diretamente pelo WhatsApp para um atendimento rápido.</CardDescription>
                <Button variant="link" asChild className="mt-4 text-primary hover:text-accent">
                  <a
                    href="https://wa.me/5511982134616?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20fazer%20um%20or%C3%A7amento."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +55 11 98213-4616
                  </a>
                </Button>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center bg-card/80 backdrop-blur-md text-card-foreground border-border">
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="mb-2">Localização</CardTitle>
                <CardDescription>Encontre-nos no Google Maps.</CardDescription>
                <Button variant="link" asChild className="mt-4 text-primary hover:text-accent">
                  <a href="https://maps.app.goo.gl/yCosnwziYferMYDRA" target="_blank" rel="noopener noreferrer">
                    Ver no Mapa
                  </a>
                </Button>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Button asChild size="lg">
                <Link href="/orcamento">Solicitar Orçamento Agora</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
