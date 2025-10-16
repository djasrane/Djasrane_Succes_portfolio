// Effet machine à écrire (Typing)
if (document.querySelector('.typing')) {
  const typed = new Typed('.typing', {
    strings: [
      'Développeur web junior',
      'Développeur mobile junior',
      'Entrepreneur en e-business',
      'Designer UI/UX'
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });
}

// Bouton WhatsApp
document.getElementById("send-whatsapp").addEventListener("click", () => {
  // Récupérer les valeurs du formulaire
  const name = document.querySelector('input[placeholder="Nom"]').value.trim();
  const email = document.querySelector('input[placeholder="Email"]').value.trim();
  const subject = document.querySelector('input[placeholder="Sujet"]').value.trim();
  const message = document.querySelector('textarea[placeholder="Message"]').value.trim();

  // Vérification basique
  if (!name || !email || !subject || !message) {
    alert("Veuillez remplir tous les champs avant d'envoyer le message.");
    return;
  }

  // Construire le message pour WhatsApp
  const text = `Bonjour, je suis ${name}.\nEmail: ${email}\nSujet: ${subject}\nMessage: ${message}`;

  // Remplace le numéro par le tien avec indicatif du Tchad (+235)
  const whatsappNumber = "23560729112"; 

  // Encode l’URL pour WhatsApp
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  // Ouvrir WhatsApp dans un nouvel onglet
  window.open(whatsappURL, "_blank");
});
