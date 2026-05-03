import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, phone, company, service, message } = req.body;

  const { error } = await resend.emails.send({
    from: 'KeedCo Website <onboarding@resend.dev>',
    to: 'contact@keedcoltd.com',
    replyTo: email,
    subject: `New Enquiry from ${name} – KeedCo Website`,
    text: `Name:    ${name}\nEmail:   ${email}\nPhone:   ${phone}\nCompany: ${company || 'N/A'}\nService: ${service}\n\nMessage:\n${message}`,
  });

  if (error) return res.status(500).json({ error });
  return res.status(200).json({ success: true });
}
