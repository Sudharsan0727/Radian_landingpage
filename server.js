import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Email Transporter Configuration (Using same settings as your PHP script)
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // SSL
    auth: {
        user: 'sudharsan0727@gmail.com',
        pass: 'awtuyrltoafwykim'
    }
});



app.post('/send-email', (req, res) => {
    const { fullName, email, mobile, project } = req.body;

    const mailOptions = {
        from: '"Radiance Eternity Website" <sudharsan0727@gmail.com>',
        to: 'sudharsan0727@gmail.com',
        subject: `New Lead Enquiry - ${fullName}`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                <h2 style="background: #9b7a44; color: #fff; padding: 10px; text-align: center; border-radius: 5px;">New Website Lead</h2>
                <p>You have received a new enquiry from the <strong>${project}</strong> landing page.</p>
                <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 5px solid #9b7a44;">
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${mobile}</p>
                    <p><strong>Project:</strong> ${project}</p>
                </div>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <p style="font-size: 12px; color: #777; text-align: center;">This email was sent automatically from your website contact form.</p>
            </div>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Email sending error:', error);
            return res.status(500).send({ success: false, error: error.message });
        }
        console.log('Email sent: ' + info.response);
        res.status(200).send({ success: true, message: 'Email sent successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

