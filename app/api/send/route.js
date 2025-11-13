import { EmailTemplate, EmailTemplate2 } from '../../../components/email-template.jsx';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const json = await req.json();
    const { name, email, message } = json;

    try {
        // Temporary: disable email sending for production build
        /*
        const data = await resend.batch.send([
            {
                from: `${name} <onboarding@resend.dev>`,
                to: ['rohanpatil4002@gmail.com'],
                reply_to: [email],
                subject: `New message from ${name}`,
                react: EmailTemplate({ messageData: message, name, email }),
            },
            {
                from: `Rohan Patil <rohanpatil4002@gmail.com>`,
                to: [email],
                subject: `Reply from Rohan Patil`,
                react: EmailTemplate2({ name }),
            }
        ]);
        return Response.json(data);
        */

        // Return placeholder response instead
        return Response.json({
            success: true,
            message: "Email sending is currently disabled.",
            data: { name, email, message }
        });

    } catch (error) {
        return Response.json({ error: error.message });
    }
}
