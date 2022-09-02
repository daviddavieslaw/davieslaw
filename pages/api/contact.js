// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_EMAIL_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    First Name: ${body.name}\r\n
    Phone: ${body.phone}\r\n
    Email: ${body.email}\r\n
    Select: ${body.select} \r\n
    Message: ${body.message}
  `;

  const data = {
    to: ['andrew.laddstudio@gmail.com'],
    from: 'david@daviddavieslaw.com',
    subject: 'Contact Form',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  };

  await mail.send(data);
  res.status(200).json({ status: 'OK' })
}
