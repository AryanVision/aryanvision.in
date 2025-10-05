import nodemailer from "nodemailer"
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end()
  const { name, email, message } = req.body || {}
  const SMTP_USER = process.env.SMTP_USER
  const SMTP_PASS = process.env.SMTP_PASS
  const TO_EMAIL = process.env.TO_EMAIL
  if (!name || !email || !message) return res.status(400).json({ error: "Missing fields" })
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    })
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: TO_EMAIL,
      subject: `Message from ${name}`,
      text: message
    })
    res.status(200).json({ ok: true })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}