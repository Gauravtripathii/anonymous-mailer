import nodemailer from "nodemailer";

export const sendEmail = async ({email, subject, message}: any) => {
    try {
        
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: process.env.MAILER_USER,
              pass: process.env.MAILER_PASS
            }
          });

        const mailOptions = {
            from: 'gauravtripathii7979@gmail.com',
            to: email,
            subject: subject,
            html: message
        };

        const mailResponse = await transport.sendMail(mailOptions);

        return mailResponse;

    } catch (error: any) {
        throw new Error(error.message);
    }
}