"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useToast } from "@/hooks/use-toast"

export default function OrcamentoPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [message, setMessage] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)
    formData.append("whatsapp", whatsapp)
    formData.append("message", message)
    if (file) {
      formData.append("file", file) // Anexando o arquivo real aqui
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData, // Enviando FormData diretamente, sem JSON.stringify
      })

      if (response.ok) {
        toast({
          title: "Orçamento enviado!",
          description: "Sua solicitação foi enviada com sucesso. Aguarde nosso contato em até 24 horas.",
        })
        setName("")
        setEmail("")
        setWhatsapp("")
        setMessage("")
        setFile(null)
      } else {
        const errorData = await response.json()
        toast({
          title: "Erro ao enviar orçamento",
          description: errorData.message || "Ocorreu um erro ao enviar sua solicitação. Tente novamente.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      toast({
        title: "Erro de conexão",
        description: "Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4 md:px-6 bg-background">
        <Card className="w-full max-w-md bg-card/80 backdrop-blur-md text-card-foreground border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Solicitar Orçamento</CardTitle>
            <CardDescription className="text-muted-foreground">
              Preencha o formulário abaixo e entraremos em contato em até 24 horas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nome Completo *</Label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-input border-border text-foreground focus-visible:ring-primary"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-input border-border text-foreground focus-visible:ring-primary"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="whatsapp">Número de WhatsApp *</Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  required
                  className="bg-input border-border text-foreground focus-visible:ring-primary"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Detalhes do Projeto (Opcional)</Label>
                <Textarea
                  id="message"
                  placeholder="Descreva seu projeto ou o que você precisa..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="bg-input border-border text-foreground focus-visible:ring-primary"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="file">Anexar Arquivo (STL ou Imagens)</Label>
                <Input
                  id="file"
                  type="file"
                  accept=".stl, .obj, .png, .jpg, .jpeg"
                  onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                  className="bg-input border-border text-foreground file:text-primary file:bg-secondary file:border-border"
                />
                {file && <p className="text-sm text-muted-foreground">Arquivo selecionado: {file.name}</p>}
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Enviando..." : "Solicitar Orçamento"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
