"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface VideoSlide {
  src: string
  alt: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

const slides: VideoSlide[] = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imprimindo-VfFgmEOIYakSIhPTH0wBSgyAsoIb0f.mp4",
    alt: "Impressora 3D em ação",
    title: "Sua Visão 3D, Realizada.",
    description:
      "Transformamos suas ideias em realidade com serviços de impressão 3D de alta qualidade, projetos especializados e consultoria técnica.",
    buttonText: "Solicitar Orçamento",
    buttonLink: "/orcamento",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Alien-z6kquvqw9zZ5qJJ525kKQbC6BG78X0.mp4",
    alt: "Impressão 3D de um Alien",
    title: "Tecnologia de Ponta ao Seu Alcance.",
    description:
      "Utilizamos as mais recentes tecnologias de impressão 3D para garantir precisão e qualidade em cada peça.",
    buttonText: "Nossos Serviços",
    buttonLink: "#servicos",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-07-09%20at%2013.20.28-0Xet5gMWzaycvLCIIZCNll1qrbxAB6.mp4",
    alt: "Impressão 3D de um suporte para óculos VR",
    title: "Inovação e Qualidade em Cada Detalhe.",
    description:
      "Desde protótipos a produtos finais, nossa expertise garante resultados que superam suas expectativas.",
    buttonText: "Ver Galeria",
    buttonLink: "#galeria",
  },
]

export function VideoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 8000) // Auto-play a cada 8 segundos
    return () => clearInterval(interval)
  }, [goToNextSlide])

  const currentVideo = slides[currentSlide]

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {" "}
      {/* Altura ajustada para h-screen */}
      {slides.map((slide, index) => (
        <video
          key={index}
          src={slide.src}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          Seu navegador não suporta o elemento de vídeo.
        </video>
      ))}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4 z-10">
        <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none drop-shadow-lg">
          {currentVideo.title}
        </h1>
        <p className="max-w-[600px] text-white/90 md:text-xl mt-4 drop-shadow-md">{currentVideo.description}</p>
        <div className="flex flex-col gap-2 min-[400px]:flex-row mt-8">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href={currentVideo.buttonLink}>{currentVideo.buttonText}</Link>
          </Button>
        </div>
      </div>
      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full bg-white transition-all ${
              index === currentSlide ? "w-6 bg-primary" : "opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
