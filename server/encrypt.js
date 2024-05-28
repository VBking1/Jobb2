// Importerer crypto-modulen for å kunne kryptere data
const crypto = require('crypto');

// Definerer algoritmen vi skal bruke for kryptering, i dette tilfellet 'aes-256-cbc'
const algorithm = 'aes-256-cbc'; 

// Genererer en nøkkel for kryptering ved hjelp av scrypt-algoritmen
// 'encryptionKey' er passordet og 'salt' er saltet som brukes i scrypt
const key = crypto.scryptSync('encryptionKey', 'salt', 32);

// Oppretter en initialiseringsvektor (IV) på 16 bytes, fylt med nuller
const iv = Buffer.alloc(16, 0);

// Funksjon for å kryptere tekst
function encrypt(text) {
    // Oppretter en cipher ved hjelp av algoritmen, nøkkelen og IV
    const cipher = crypto.createCipheriv(algorithm, key, iv);

    // Krypterer teksten og konverterer den til hex-format
    let crypted = cipher.update(text, 'utf8', 'hex');

    // Henter resten av den krypterte dataen
    crypted += cipher.final('hex');

    // Returnerer den krypterte teksten
    return crypted;
}

// Henter passordet fra miljøvariablene
const password = process.env.Passord;

// Krypterer passordet
const encryptedPassword = encrypt(password);

// Logger det krypterte passordet til konsollen
console.log('Kryptert passord:', encryptedPassword);