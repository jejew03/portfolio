# Configuration du système d'envoi d'emails

## 📧 Guide de configuration EmailJS

Votre portfolio utilise maintenant EmailJS pour envoyer de vrais emails. Suivez ces étapes pour l'activer :

### 1. Créer un compte EmailJS

1. Allez sur [https://emailjs.com](https://emailjs.com)
2. Créez un compte gratuit
3. Confirmez votre email

### 2. Connecter votre service email

1. Dans le dashboard EmailJS, allez dans **Email Services**
2. Cliquez sur **Add Service**
3. Choisissez votre fournisseur (Gmail, Outlook, Yahoo, etc.)
4. Suivez les instructions pour connecter votre compte
5. Notez votre **Service ID** (ex: `service_xyz123`)

### 3. Créer un template d'email

1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Utilisez ce template :

```
Sujet: Nouveau message depuis votre portfolio - {{subject}}

Nouveau message depuis votre portfolio

De: {{from_name}} ({{from_email}})
Sujet: {{subject}}

Message:
{{message}}

---
Ce message a été envoyé depuis votre portfolio web.
Répondez directement à {{from_email}} pour contacter cette personne.
```

4. Notez votre **Template ID** (ex: `template_abc456`)

### 4. Obtenir votre clé publique

1. Allez dans **Account** > **General**
2. Copiez votre **Public Key** (ex: `user_def789`)

### 5. Configurer le code

Remplacez les valeurs dans `script.js` ligne 4 et lignes 211 :

```javascript
// Ligne 4 - Remplacez YOUR_PUBLIC_KEY
emailjs.init("user_def789"); // Votre vraie clé publique

// Ligne 211 - Remplacez YOUR_SERVICE_ID et YOUR_TEMPLATE_ID  
emailjs.send('service_xyz123', 'template_abc456', templateParams)
```

### 6. Tester le formulaire

1. Ouvrez votre portfolio dans un navigateur
2. Allez à la section Contact
3. Remplissez et envoyez le formulaire
4. Vérifiez que vous recevez l'email

## ✅ Vérification

Si tout est configuré correctement :
- ✅ Le bouton affiche "Envoi en cours..." pendant l'envoi
- ✅ Un message de succès s'affiche après l'envoi
- ✅ Vous recevez l'email dans votre boîte mail
- ✅ Le formulaire se remet à zéro après l'envoi

## 🚨 Résolution de problèmes

### Erreur "EmailJS is not defined"
- Vérifiez que le script EmailJS est bien chargé dans `index.html`

### Erreur "Invalid service ID"
- Vérifiez que vous avez bien remplacé `YOUR_SERVICE_ID` par votre vrai Service ID

### Erreur "Invalid template ID"
- Vérifiez que vous avez bien remplacé `YOUR_TEMPLATE_ID` par votre vrai Template ID

### Les emails n'arrivent pas
- Vérifiez vos spams
- Vérifiez que votre service email est bien connecté sur EmailJS
- Testez l'envoi depuis le dashboard EmailJS

## 📞 Support

Si vous avez des problèmes, consultez la documentation EmailJS : https://emailjs.com/docs/

## Limites du plan gratuit EmailJS

- 200 emails/mois
- Support communautaire
- Pour plus d'emails, passez au plan payant
