// ==UserScript==
// @name         Base64 Kod Çözücü
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Web sayfalarında Base64 kodlarını çözme yapma
// @author       You
// @match        https://*/*
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Base64 decode function with UTF-8 support
    function decodeBase64(encodedString) {
        try {
            return decodeURIComponent(escape(window.atob(encodedString)));
        } catch (e) {
            return "Geçersiz Base64 kodu!";
        }
    }

    // Create decode button
    function createButton() {
        const buttonContainer = document.createElement("div");
        buttonContainer.style.position = "fixed";
        buttonContainer.style.top = "10px";
        buttonContainer.style.right = "10px";
        buttonContainer.style.zIndex = "9999";
        buttonContainer.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        buttonContainer.style.padding = "10px";
        buttonContainer.style.borderRadius = "5px";
        buttonContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";

        const decodeButton = document.createElement("button");
        decodeButton.textContent = "Çöz";
        decodeButton.style.backgroundColor = "#f44336";
        decodeButton.style.color = "white";
        decodeButton.style.border = "none";
        decodeButton.style.padding = "10px";
        decodeButton.style.borderRadius = "5px";
        decodeButton.style.cursor = "pointer";
        decodeButton.addEventListener("click", function() {
            const selectedText = window.getSelection().toString();
            if (selectedText) {
                const decodedText = decodeBase64(selectedText);
                alert("Çözülmüş metin: " + decodedText);
            } else {
                alert("Çözmek için bir metin seçin.");
            }
        });

        buttonContainer.appendChild(decodeButton);
        document.body.appendChild(buttonContainer);
    }

    // Run when the page is loaded
    window.addEventListener("load", function() {
        createButton();
    });
})();
