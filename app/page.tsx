import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, PhoneIcon as Whatsapp, MapPin, Instagram } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VideoCarousel } from "@/components/video-carousel"
import { Gallery } from "@/components/gallery"
import { Reveal } from "@/components/reveal"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <VideoCarousel />
        <section id="servicos" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <Reveal>
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
            </Reveal>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Reveal delay={0}>
                <Card className="h-full bg-card/80 backdrop-blur-md text-card-foreground border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <CardHeader>
                    <CardTitle>Impressão 3D</CardTitle>
                    <CardDescription>
                      Transformamos seus designs digitais em objetos físicos com precisão e qualidade.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Utilizamos tecnologia de ponta para produzir peças detalhadas e funcionais, desde protótipos
                      rápidos até produtos finais. Trabalhamos com plásticos PLA, PETG e ABS. Cores disponíveis a
                      consultar.
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
              <Reveal delay={100}>
                <Card className="h-full bg-card/80 backdrop-blur-md text-card-foreground border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <CardHeader>
                    <CardTitle>Medição e Réplica 3D de Peças</CardTitle>
                    <CardDescription>
                      Digitalizamos e replicamos peças existentes com alta fidelidade.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Através de escaneamento 3D, criamos modelos digitais precisos para reprodução ou modificação de
                      peças.
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
              <Reveal delay={200}>
                <Card className="h-full bg-card/80 backdrop-blur-md text-card-foreground border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
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
              </Reveal>
              <Reveal delay={300}>
                <Card className="h-full bg-card/80 backdrop-blur-md text-card-foreground border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
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
              </Reveal>
            </div>
          </div>
        </section>

        {/* Seção Fale Conosco movida para cá */}
        <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <Reveal>
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
            </Reveal>
            <div className="mx-auto grid max-w-sm items-start gap-6 py-12 sm:max-w-none sm:grid-cols-4 lg:gap-12">
              <Reveal delay={0}>
                <Card className="flex h-full flex-col items-center p-6 text-center bg-card/80 backdrop-blur-md text-card-foreground border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <Mail className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="mb-2">Email</CardTitle>
                  <CardDescription>Envie-nos um e-mail e responderemos o mais breve possível.</CardDescription>
                  <Button variant="link" asChild className="mt-4 text-primary hover:text-accent">
                    <a href="mailto:gabriel.cachioni@gmail.com">gabriel.cachioni@gmail.com</a>
                  </Button>
                </Card>
              </Reveal>
              <Reveal delay={100}>
                <Card className="flex h-full flex-col items-center p-6 text-center bg-card/80 backdrop-blur-md text-card-foreground border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <Whatsapp className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="mb-2">WhatsApp</CardTitle>
                  <CardDescription>
                    Fale conosco diretamente pelo WhatsApp para um atendimento rápido.
                  </CardDescription>
                  <Button variant="link" asChild className="mt-4 text-primary hover:text-accent">
                    <a
                      href="https://wa.me/5513997093248?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20fazer%20um%20or%C3%A7amento."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +55 (13) 99709-3248
                    </a>
                  </Button>
                </Card>
              </Reveal>
              <Reveal delay={200}>
                <Card className="flex h-full flex-col items-center p-6 text-center bg-card/80 backdrop-blur-md text-card-foreground border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <MapPin className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="mb-2">Localização</CardTitle>
                  <CardDescription>Encontre-nos no Google Maps.</CardDescription>
                  <Button variant="link" asChild className="mt-4 text-primary hover:text-accent">
                    <a href="https://maps.app.goo.gl/yCosnwziYferMYDRA" target="_blank" rel="noopener noreferrer">
                      Ver no Mapa
                    </a>
                  </Button>
                </Card>
              </Reveal>
              <Reveal delay={300}>
                <Card className="flex h-full flex-col items-center p-6 text-center bg-card/80 backdrop-blur-md text-card-foreground border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <Instagram className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="mb-2">Instagram</CardTitle>
                  <CardDescription>Siga-nos no Instagram para ver mais projetos e novidades.</CardDescription>
                  <Button variant="link" asChild className="mt-4 text-primary hover:text-accent">
                    <a href="https://www.instagram.com/ita3d.print/?hl=en" target="_blank" rel="noopener noreferrer">
                      @ita3d.print
                    </a>
                  </Button>
                </Card>
              </Reveal>
            </div>
            <Reveal>
              <div className="text-center mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-gradient-start to-gradient-end text-primary-foreground hover:from-gradient-start/90 hover:to-gradient-end/90"
                >
                  <a
                    href="https://wa.me/5513997093248?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20fazer%20um%20or%C3%A7amento."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Orçamento no WhatsApp
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Seção Galeria agora vem depois de Fale Conosco */}
        <section id="galeria" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <Reveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
                    Veja Nossos Trabalhos
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Confira algumas de nossas impressões 3D e o processo de trabalho. Clique para ampliar.
                  </p>
                </div>
              </div>
            </Reveal>
            <div className="py-12">
              <Gallery />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  )
}
