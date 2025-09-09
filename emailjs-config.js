// Configuration EmailJS
// Remplacez ces valeurs par vos propres identifiants EmailJS

const EMAILJS_CONFIG = {
    // Votre clé publique EmailJS (obtenez-la sur https://emailjs.com)
    PUBLIC_KEY: "YOUR_PUBLIC_KEY",
    
    // ID de votre service email (Gmail, Outlook, etc.)
    SERVICE_ID: "YOUR_SERVICE_ID",
    
    // ID de votre template d'email
    TEMPLATE_ID: "YOUR_TEMPLATE_ID"
};

// Instructions pour configurer EmailJS :
// 1. Allez sur https://emailjs.com et créez un compte
// 2. Connectez votre service email (Gmail, Outlook, etc.)
// 3. Créez un template d'email avec les variables suivantes :
//    - {{from_name}} : Nom de l'expéditeur
//    - {{from_email}} : Email de l'expéditeur
//    - {{subject}} : Sujet du message
//    - {{message}} : Contenu du message
//    - {{to_email}} : Votre email de réception
// 4. Copiez vos identifiants dans les constantes ci-dessus
// 5. Remplacez les valeurs dans script.js

// Exemple de template EmailJS :
/*
Nouveau message depuis votre portfolio

De: {{from_name}} ({{from_email}})
Sujet: {{subject}}

Message:
{{message}}

---
Ce message a été envoyé depuis votre portfolio web.
*/
