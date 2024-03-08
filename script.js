document.addEventListener("DOMContentLoaded", function(event) {
    const confettiContainer = document.getElementById("confetti");
    const numConfetti = 200; // Número de confetes

    for (let i = 0; i < numConfetti; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "%"; // Posição horizontal aleatória
        confetti.style.animationDelay = Math.random() * 5 + "s"; // Atraso aleatório na animação
        confettiContainer.appendChild(confetti);
    }
});
