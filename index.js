document.addEventListener("DOMContentLoaded", function(){
    // Typewriter
    const message = "I Love You Forever ❤️✨";
    const display = document.getElementById("love-message");
    let i = 0;
    const interval = setInterval(()=>{
        display.innerHTML += message[i];
        i++;
        if(i === message.length) clearInterval(interval);
    },150);

    // Floating sparkles / confetti hearts
    const colors = ["#ff99cc","#ff66b3","#ff3399","#ff80bf"];
    setInterval(()=>{
        const confetti = document.createElement("div");
        confetti.innerHTML = "💖";
        confetti.style.position = "absolute";
        confetti.style.left = Math.random()*window.innerWidth + "px";
        confetti.style.top = Math.random()*window.innerHeight + "px";
        confetti.style.fontSize = (Math.random()*25+15)+"px";
        confetti.style.color = colors[Math.floor(Math.random()*colors.length)];
        confetti.style.pointerEvents = "none";
        document.body.appendChild(confetti);
        setTimeout(()=>{ confetti.remove(); },2000);
    },200);

    // Random heart bursts
    setInterval(()=>{
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("burst-heart");
        heart.style.left = Math.random()*window.innerWidth + "px";
        heart.style.top = Math.random()*window.innerHeight + "px";
        heart.style.color = colors[Math.floor(Math.random()*colors.length)];
        document.body.appendChild(heart);
        setTimeout(()=>{ heart.remove(); },1500);
    },500);
});


