import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import Config from './Config';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.listen(Config.app.port, () => {
    console.log(`Server is running on port ${Config.app.port}.`);
});

app.post('/contact', async (req, res) => {
    const { name, email, company = '', phone = '' } = req.body;

    if (!name) {
        return res.status(400).send('Name is required');
    }

    if (!email) {
        return res.status(400).send('Email is required');
    }

    const transporter = nodemailer.createTransport({
        host: Config.smtp.host,
        port: Config.smtp.port,
        auth: {
            user: Config.smtp.user,
            pass: Config.smtp.pass
        }
    });

    const mailOptions = {
        from: email,
        to: Config.email.recipient,
        subject: `New contact from ${name}`,
        text: `
        From: ${name}
        Email: ${email}
        Company: ${company}
        Phone: ${phone}
      `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error sending email');
    }
});