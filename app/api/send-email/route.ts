import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  // Alterado para request.formData() para lidar com upload de arquivos
  const formData = await request.formData()

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const whatsapp = formData.get("whatsapp") as string
  const message = formData.get("message") as string
  const file = formData.get("file") as File | null // Obtém o arquivo

  // Validação básica das variáveis de ambiente
  if (!process.env.RESEND_API_KEY || !process.env.EMAIL_TO_ADDRESS) {
    console.error("Erro: Variáveis de ambiente RESEND_API_KEY ou EMAIL_TO_ADDRESS não configuradas.")
    return NextResponse.json(
      { message: "Configuração de e-mail incompleta. Por favor, contate o administrador." },
      { status: 500 },
    )
  }

  const attachments = []
  if (file) {
    try {
      const fileBuffer = Buffer.from(await file.arrayBuffer())
      attachments.push({
        filename: file.name,
        content: fileBuffer,
      })
    } catch (error) {
      console.error("Erro ao processar o arquivo anexado:", error)
      return NextResponse.json({ message: "Erro ao processar o arquivo anexado." }, { status: 500 })
    }
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "ITA3D Orçamentos <onboarding@resend.dev>", // Substitua 'onboarding@resend.dev' pelo seu domínio verificado no Resend
      to: process.env.EMAIL_TO_ADDRESS, // O e-mail para onde você quer receber os orçamentos
      subject: `Novo Orçamento de ${name} (ITA3D)`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Mensagem:</strong> ${message || "Nenhuma mensagem adicional."}</p>
        <p><strong>Arquivo Anexado:</strong> ${file ? file.name : "Nenhum arquivo anexado"}</p>
        <p>Por favor, entre em contato com o cliente em até 24 horas.</p>
      `,
      attachments: attachments, // Adiciona os anexos aqui
    })

    if (error) {
      console.error("Erro ao enviar e-mail via Resend:", error)
      return NextResponse.json({ message: error.message || "Falha ao enviar o orçamento." }, { status: 500 })
    }

    console.log("E-mail enviado com sucesso via Resend:", data)
    return NextResponse.json({ message: "Orçamento recebido com sucesso!" }, { status: 200 })
  } catch (error) {
    console.error("Erro inesperado ao enviar e-mail:", error)
    return NextResponse.json({ message: "Ocorreu um erro inesperado ao processar o orçamento." }, { status: 500 })
  }
}
