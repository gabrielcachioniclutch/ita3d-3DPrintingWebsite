"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

type MediaType = "image" | "video"
type Category = "Esculturas" | "Funcionais" | "Réplicas" | "Processo" | "Equipamento"

interface GalleryItem {
  type: MediaType
  src: string
  caption: string
  category: Category
}

const items: GalleryItem[] = [
  { type: "image", src: "/galeria-estatua-miles-morales.jpeg", caption: "Estátua do Homem-Aranha (Miles Morales) impressa e pintada à mão", category: "Esculturas" },
  { type: "image", src: "/2025-03-24.webp", caption: "Escultura Sonic 10CM", category: "Esculturas" },
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Alien-z6kquvqw9zZ5qJJ525kKQbC6BG78X0.mp4",
    caption: "Escultura Alien 30CM",
    category: "Esculturas",
  },
  { type: "image", src: "/galeria-suporte-celular.jpeg", caption: "Suporte de celular personalizado", category: "Funcionais" },
  { type: "image", src: "/galeria-organizador-hexagonal.jpeg", caption: "Sistema modular de organização de parede em painel hexagonal", category: "Funcionais" },
  { type: "image", src: "/2025-03-244.webp", caption: "Vaso de planta", category: "Funcionais" },
  { type: "image", src: "/WhatsApp Image 2025-07-09 at 13.21.37.jpeg", caption: "Suporte para Headset VR Meta Quest 3", category: "Funcionais" },
  { type: "image", src: "/2025-06-22_4ac94d9dae1a5.webp", caption: "Controles Nintendo Switch 2", category: "Funcionais" },
  { type: "image", src: "/WhatsApp Image 2025-07-17 at 11.11.50.jpeg", caption: "Organizador de jogos e cartuchos Nintendo Switch", category: "Funcionais" },
  {
    type: "image",
    src: "/WhatsApp Image 2025-07-21 at 12.16.53.jpeg",
    caption: "Réplica de uma lente de farol de carro em filamento transparente (esquerda impressa vs direita original)",
    category: "Réplicas",
  },
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imprimindo-VfFgmEOIYakSIhPTH0wBSgyAsoIb0f.mp4",
    caption: "Imprimindo teste",
    category: "Processo",
  },
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-07-09%20at%2013.20.28-0Xet5gMWzaycvLCIIZCNll1qrbxAB6.mp4",
    caption: "Impressão em processo de um porta-chaves",
    category: "Processo",
  },
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_AQMwOLY5Lmg6XSSCtesb1yJ0HY0lwJ6MWQqxMF9UXYgYzBD6EJnqOkbKtulnWQSNc-ZG_KH3D9rwvWsapR2mAFqUsUTur2YOIdAz_Zs-hcBtXDVZapXqsZVXRmSQ0isOQL88G4.mp4",
    caption: "Impressão 3D em andamento",
    category: "Processo",
  },
  {
    type: "image",
    src: "/2025-03-242.webp",
    caption: "A primeira impressora, onde tudo começou. Hoje temos diferentes impressoras para tipos diferentes de serviços.",
    category: "Equipamento",
  },
  { type: "image", src: "/galeria-bambulab-p2s.jpeg", caption: "Nosso parque de impressão: Bambu Lab P2S com AMS e acessórios próprios", category: "Equipamento" },
]

const filters: ("Todos" | Category)[] = ["Todos", "Esculturas", "Funcionais", "Réplicas", "Processo", "Equipamento"]

export function Gallery() {
  const [active, setActive] = useState<(typeof filters)[number]>("Todos")
  const [selected, setSelected] = useState<GalleryItem | null>(null)

  const filtered = useMemo(
    () => (active === "Todos" ? items : items.filter((i) => i.category === active)),
    [active],
  )

  return (
    <>
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
              active === f
                ? "border-transparent bg-gradient-to-r from-gradient-start to-gradient-end text-primary-foreground shadow-md shadow-primary/30"
                : "border-border bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-4">
        {filtered.map((item, index) => (
          <Reveal key={item.src} delay={(index % 4) * 80} className="break-inside-avoid">
            <button
              onClick={() => setSelected(item)}
              className="group relative block w-full overflow-hidden rounded-xl border border-border bg-card/80 text-left shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              {item.type === "image" ? (
                <Image
                  src={item.src || "/placeholder.svg"}
                  width={500}
                  height={500}
                  alt={item.caption}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <video
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
              <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-background/95 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-medium text-foreground">{item.caption}</p>
              </div>
              <span className="absolute right-3 top-3 rounded-full bg-background/70 px-2 py-1 text-xs text-muted-foreground backdrop-blur-sm">
                {item.category}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-3xl border-border bg-card/95 p-2 backdrop-blur-md">
          {selected && (
            <>
              <DialogTitle className="sr-only">{selected.caption}</DialogTitle>
              {selected.type === "image" ? (
                <Image
                  src={selected.src || "/placeholder.svg"}
                  width={1200}
                  height={1200}
                  alt={selected.caption}
                  className="max-h-[75vh] w-full rounded-lg object-contain"
                />
              ) : (
                <video controls autoPlay loop className="max-h-[75vh] w-full rounded-lg">
                  <source src={selected.src} type="video/mp4" />
                </video>
              )}
              <p className="px-2 py-3 text-center text-sm text-muted-foreground">{selected.caption}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
