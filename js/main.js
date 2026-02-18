// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Email Obfuscation Logic
const revealBtn = document.getElementById('reveal-email-btn');
const emailLink = document.getElementById('email-link');

// 1. Encode your email in Base64 used btoa() in console 'me@0xmaxence.xyz' -> 'bWVAMHhtYXhlbmNlLnh5eg=='
// Replace the string below with your actual encoded email.
const encodedUser = 'Y29udGFjdA=='; // 'contact'
const encodedDomain = 'MHhtYXhlbmNlLnh5eg=='; // '0xmaxence.xyz'

revealBtn.addEventListener('click', () => {
    // Decode logic
    const user = atob(encodedUser);
    const domain = atob(encodedDomain);
    const email = `${user}@${domain}`;

    // Update the link
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;

    // Show link, hide button
    emailLink.classList.remove('hidden');
    revealBtn.classList.add('hidden');

    // Optional: Add a nice fade-in effect via CSS class if desired
    emailLink.style.opacity = 0;
    emailLink.style.display = 'inline-block';
    setTimeout(() => {
        emailLink.style.transition = 'opacity 0.5s';
        emailLink.style.opacity = 1;
    }, 10);
});

// Legal Info Obfuscation
const legalTrigger = document.getElementById('legal-trigger');
const legalContent = document.getElementById('legal-content');

// Encoded Legal Info (Base64)
// Name: Maxence HEUX -> TWF4ZW5jZSBIRVVY
// Address: 92 B RUE de Solférino 59800 Lille FRANCE -> OTIgQiBSVUUgZGUgU29sZsOpcmlubyA1OTgwMCBMaWxsZSBGUkFOQ0U=
// SIRET: 883150823 -> ODgzMTUwODIz

const legalData = {
    name: 'TWF4ZW5jZSBIRVVY',
    address: 'OTIgQiBSVUUgZGUgU29sZsOpcmlubyA1OTgwMCBMaWxsZSBGUkFOQ0U=',
    siret: 'ODgzMTUwODIz'
};

legalTrigger.addEventListener('click', (e) => {
    e.preventDefault();

    if (!legalContent.classList.contains('hidden')) {
        legalContent.classList.add('hidden');
        return;
    }

    const name = decodeURIComponent(escape(atob(legalData.name))); // decodeURIComponent/escape handles UTF-8 chars in base64
    const address = decodeURIComponent(escape(atob(legalData.address)));
    const siret = atob(legalData.siret);

    legalContent.innerHTML = `
        <p><strong>Editeur :</strong> ${name}</p>
        <p><strong>Adresse :</strong> ${address}</p>
        <p><strong>SIRET :</strong> ${siret}</p>
    `;

    legalContent.classList.remove('hidden');
});
