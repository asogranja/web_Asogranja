// EmailJS Configuration
// Replace these values with your actual EmailJS service details

export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_your_service_id", // Replace with your EmailJS service ID
  TEMPLATE_ID: "template_your_template_id", // Replace with your EmailJS template ID
  PUBLIC_KEY: "your_public_key", // Replace with your EmailJS public key
};

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create a new email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}}
//    - {{from_email}}
//    - {{subject}}
//    - {{message}}
//    - {{to_email}} (set to: asogranjasogamoso@gmail.com)
// 4. Copy the Service ID, Template ID, and Public Key to the config above
// 5. Make sure to verify your email in EmailJS dashboard

export const RECIPIENT_EMAIL = "asogranjasogamoso@gmail.com";
