// // pages/api/send-email.js

// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { to, subject, text } = req.body;

//     // Create a transporter object using SMTP transport
//     const transporter = nodemailer.createTransport({
//       host: 'mail.luxoroffice.com', // Replace with your SMTP server
//       port: 587, // Replace with the port your SMTP server uses (e.g., 465 for SSL)
//       secure: false, // Set to true if using SSL
//       auth: {
//         user: 'marketing@luxoroffice.com', // Replace with your email
//         pass: 'Mk0909', // Replace with your email password
//       },
//     });

//     try {
//       // Send mail with defined transport object
//       await transporter.sendMail({
//         from: 'solankiniteshs77@gmail.com', // Replace with your email
//         to: 'solankinitesh2300@gmail.com', // Receiver's email
//         subject: subject,
//         text: text,
//       });

//       res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to send email' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
