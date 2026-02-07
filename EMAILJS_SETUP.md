# EmailJS Setup Guide

Follow these steps to enable the contact form to send emails:

## 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account (allows 200 emails/month)

## 2. Add Email Service
- Go to "Email Services" in the dashboard
- Click "Add New Service"
- Choose your email provider (Gmail recommended)
- Connect your email account
- Note down your **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template
- Go to "Email Templates" in the dashboard
- Click "Create New Template"
- Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{user_email}}

Message:
{{message}}
```

- Save the template
- Note down your **Template ID** (e.g., `template_xyz789`)

## 4. Get Public Key
- Go to "Account" → "General"
- Find your **Public Key** (e.g., `user_ABC123XYZ`)

## 5. Update ContactSection.tsx
Open `src/components/ContactSection.tsx` and replace:

```typescript
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

With your actual credentials:

```typescript
const SERVICE_ID = 'service_abc123';
const TEMPLATE_ID = 'template_xyz789';
const PUBLIC_KEY = 'user_ABC123XYZ';
```

## 6. Test the Form
- Run your development server: `npm run dev`
- Fill out the contact form
- Submit and check your email inbox

## Important Notes
- Free plan: 200 emails/month
- Emails may go to spam initially - mark as "Not Spam"
- For production, consider upgrading or using a backend API

## Alternative: Use Environment Variables (Recommended)
Create a `.env` file:

```
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_ABC123XYZ
```

Then update ContactSection.tsx:

```typescript
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

Don't forget to add `.env` to `.gitignore`!
