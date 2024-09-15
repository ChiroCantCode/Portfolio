function handleKeyPress(event) {
    if (event.key === "Enter") {
        var userInput = document.getElementById("userInput").value;
        var content = document.getElementById("content");
        
        if (userInput === "ZmxhZzEyMzQ1") {
            content.innerHTML = "<p>You are nearly there!, use /hint to get some help.</p>";
        } else if (userInput === decodeBase64("ZmxhZzEyMzQ1")) {
            content.innerHTML = "<p>GG! You just found my password ! !!</p>";
        } else if (userInput.toLowerCase() === "credits") {
            content.innerHTML = "<p>This website was entierely made by Chiro_code.</p>";
        } else if (userInput.toLowerCase() === "me") {
            content.innerHTML = "<p>I am a young coder who want to learn a lot of pragramming language like: c++, java, php. I already know: javascript, python, css, html.</p>";
        } else if (userInput.toLowerCase() === "help") {
            content.innerHTML = "<p>For more information, you can type: me, credits, secret</p>";
        } else if (userInput.toLowerCase() === "secret") {
            content.innerHTML = "<p>Try to find the hidden password inside of my website! (hint : the answer might be hidden behind some kind of encryption?</p>";
        } else if (userInput.toLowerCase() === "/hint") {
            content.innerHTML = "<p>Base64</p>";
        } else {
            content.innerHTML = "<p>this is not a valid command ):.</p>";
        }

        document.getElementById("userInput").value = '';
    }
}

function decodeBase64(encodedString) {
    return decodeURIComponent(escape(window.atob(encodedString)));
}
