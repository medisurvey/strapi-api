module.exports = ({ env }) => ({
    email: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.google.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        secure: true,
      },
      settings: {
        defaultFrom: 'support@eaimedisurvey.com',
        defaultReplyTo: 'support@aimedisurvey.com',
      },
    },
  });