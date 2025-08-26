// Vérifie que la classe existe
if(document.querySelector('.typing')){
    const typed = new Typed('.typing', {
        strings: ['Développeur web junior','Développeur mobile junior','Entrepreneur en e-business', 'Designer UI/UX ',],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
}

document.getElementById("send-whatsapp").addEventListener("click", () => {
    // Récupérer les valeurs du formulaire
    const name = document.querySelector('input[placeholder="Nom"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const subject = document.querySelector('input[placeholder="Sujet"]').value;
    const message = document.querySelector('textarea[placeholder="Message"]').value;

    // Construire le message
    const text = `Bonjour, je suis ${name}.\nEmail: ${email}\nSujet: ${subject}\nMessage: ${message}`;

    // Encode l’URL pour WhatsApp
    const whatsappURL = `https://wa.me/23560729112?text=${encodeURIComponent(text)}`;

    // Ouvrir WhatsApp
    window.open(whatsappURL, "_blank");
});

