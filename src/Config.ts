import 'dotenv/config';

const Config = {
    app: {
        port: process.env.PORT || 5000
    },
    email: {
        recipient: process.env.EMAIL_RECIPIENT,
    },
    smtp: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
}

export default Config;