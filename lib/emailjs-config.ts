// EmailJS Configuration
// Replace these values with your actual EmailJS service details

export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_g3mnew5", // Replace with your EmailJS service ID
  TEMPLATE_ID: "template_rr2fizq", // Replace with your EmailJS template ID
  PUBLIC_KEY: "WMQnoCjBYWZqGhL_v", // Replace with your EmailJS public key
};

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create a new email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}}
//    - {{from_email}}
//    - {{subject}}
//    - {{message}}
//    - {{to_email}} (set to: kspulido2005@gmial.com)
// 4. Copy the Service ID, Template ID, and Public Key to the config above
// 5. Make sure to verify your email in EmailJS dashboard

// The email address that will receive contact form submissions.
// Updated to send all emails to kspulido2005@gmial.com as requested.
export const RECIPIENT_EMAIL = "kspulido2005@gmial.com";
