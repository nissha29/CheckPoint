const { Resend } = require('resend')
const dotenv = require('dotenv')
const path = require('path')
const template = require('./body.mail.js')

dotenv.config({ path: path.join(__dirname, '../.env') });


const resend = new Resend(process.env.RESEND_API);

const sendWelcomeMail = async (userEmail, username) => {
    try {
        const mail = template(username)
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: userEmail,
            subject: mail.subject,
            html: mail.html
        });
        console.log('Welcome email sent successfully');
    } catch (error) {
        console.error('Error sending welcome email:', error);
    }
};

module.exports = sendWelcomeMail

