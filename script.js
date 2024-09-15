function handleKeyPress(event) {
    if (event.key === "Enter") {
        var userInput = document.getElementById("userInput").value;
        var content = document.getElementById("content");
        
        if (userInput === "ZmxhZzEyMzQ1") {
            content.innerHTML = "<p>Tu y es presque. Je vais te donner un indice : Base64</p>";
        } else if (userInput === decodeBase64("ZmxhZzEyMzQ1")) {
            content.innerHTML = "<p>Bravo tu as réussi à trouver mon mot de passe !!</p>";
        } else if (userInput.toLowerCase() === "crédit") {
            content.innerHTML = "<p>Ce site a entièrement été créé par Chiro_code.</p>";
        } else if (userInput.toLowerCase() === "moi") {
            content.innerHTML = "<p>Je suis un jeune développeur de 15 ans déterminé.</p>";
        } else if (userInput.toLowerCase() === "help") {
            content.innerHTML = "<p>Pour plus d'informations, tapez 'crédit', 'moi', ou 'secret'.</p>";
        } else if (userInput.toLowerCase() === "secret") {
            content.innerHTML = "<p>Essaie de trouver le mot de passe caché dans ce site web ! (indice : appuie sur F12,)</p>";
        } else if (userInput.toLowerCase() === "/indice") {
            content.innerHTML = "<p>Utilise base64 pour décoder le mot de passe (tu peux aussi demander à ChatGPT).</p>";
        } else {
            content.innerHTML = "<p>Votre commande n'est pas valide.</p>";
        }

        document.getElementById("userInput").value = '';
    }
}

function decodeBase64(encodedString) {
    return decodeURIComponent(escape(window.atob(encodedString)));
}
