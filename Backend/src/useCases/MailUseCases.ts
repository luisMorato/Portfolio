import { format } from 'date-fns'
import { Resend } from 'resend'

import { env } from '../Schemas/env'

import { mailProps, mailUseCasesProps } from '../@types/mail'

import { BadRequest } from '../_errors/BadRequest'

const resend = new Resend(env.RESEND_API_SECRET_KEY)

export class MailUseCases implements mailUseCasesProps {
  createMail = async ({ name, email, message }: mailProps) => {
    const contactDate = format(new Date(Date.now()), 'dd/MM/yyyy')
    const contactHour = format(new Date(Date.now()), 'H:mm')

    // <img src="https://img.freepik.com/vetores-gratis/laptop-com-icone-de-codigo-isometrico-de-programa-desenvolvimento-de-software-e-aplicacoes-de-programacao-neon-escuro_39422-971.jpg?t=st=1727796296~exp=1727799896~hmac=76a42d21fd6515080b38ec28a84fd8ee1240dad0f94794e84dce53b30fdbae76&w=1060" style='width:100%; max-width:10rem;'/>

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'luisfernandomorato_170701@outlook.com',
      subject: 'Contact Received',
      html: `
      <div>
        <header>
          <h1 style="font-size:1.25rem;">Olá, <strong>Luis</strong>!</h1>
          <span>Você recebeu uma nova mensagem de <strong>${name}</strong>. Veja os detalhes abaixo:</span>
        </header>
        <main style='margin-top:0.25rem'>
          <p><span style='font-weight:bold;'>Nome:</span> ${name}</p>
          <p><span style='font-weight:bold;'>E-mail:</span> ${email}</p>
          <div>
            <p style='font-weight:bold;'>Mensagem:</p>
            <p style='max-width:50%; margin-left:1.25rem;'>${message}</p>
          </div>
        </main>
        <footer style='margin-top:0.25rem'>
          <p>
            <span style='font-weight:bold;'>Data do contato:</span> 
            ${contactDate}
          </p>
          <p>
            <span style='font-weight:bold;'>Hora do contato:</span> 
            ${contactHour}
          </p>
        </footer>
      </div>`,
    })

    if (error) {
      throw new BadRequest('Error Sending the Email!')
    }

    const id = data?.id

    return { id }
  }
}
