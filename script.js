const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const textBox = document.querySelector(".textBox");
const heroBtn = document.querySelector(".heroBtn");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu");
    textBox.style.display = navLinks.classList.contains("mobile-menu") ? "none" : "block";
    heroBtn.style.display = navLinks.classList.contains("mobile-menu") ? "none" : "inline-block";
})


const mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function changelinks() {
    const image = document.getElementById('memeImage');
    const link = document.getElementById('memeLink');

    const memesImages = [
        "https://i.pinimg.com/564x/19/3c/06/193c062bfd343c6f0441b9364c3d06c4.jpg", "https://i.pinimg.com/564x/bb/3a/e0/bb3ae01b9b5277e07c8942fce1f134b0.jpg", "https://i.pinimg.com/564x/b2/8e/74/b28e74c5e5a24cb401993f0ac069decb.jpg", "https://i.pinimg.com/564x/b4/ed/ef/b4edef4140713746902805ec8f655a57.jpg", "https://i.pinimg.com/564x/5b/42/2e/5b422e49715dc863e45640cc6419689c.jpg", "https://i.pinimg.com/564x/e3/12/c1/e312c134d93089e386a977a26bc3cede.jpg", "https://i.pinimg.com/564x/5f/73/54/5f73540adec61a6df68b82ae1612f7cd.jpg", "https://i.pinimg.com/564x/15/cb/24/15cb2475dc3f27bd62e346a5f4d8f0a7.jpg", "https://i.pinimg.com/564x/63/ba/5e/63ba5e60af2a1757c7c2de8d176720a6.jpg", "https://i.pinimg.com/564x/d1/8f/cc/d18fcc8af5ac77dc59ed15a34c96f1af.jpg", "https://i.pinimg.com/564x/5a/04/f9/5a04f9c72f34c7868bce6fb8562ce607.jpg", "https://i.pinimg.com/564x/28/d5/92/28d5925915ee8f42eacbff52ac4fbfc2.jpg", "https://i.pinimg.com/564x/20/b6/65/20b66585d6c0ad6849dcac4647e1d418.jpg",]
    
    const memesVideos = ["https://www.instagram.com/reel/Cy4aTdXve6I/?igshid=MzY1NDJmNzMyNQ==", "https://www.youtube.com/watch?v=DJfg39WkMvE", "https://www.youtube.com/watch?v=IQqwrQJwf5o", "https://www.youtube.com/watch?v=04WOyAkVHg8", "https://www.youtube.com/watch?v=jIQ6UV2onyI", "https://www.youtube.com/watch?v=FtutLA63Cp8", "https://www.youtube.com/watch?v=n8xwt9HT2gw", "https://www.youtube.com/watch?v=SE--GVawV-8", "https://www.youtube.com/watch?v=3Fzi4lBzqIg", "https://www.youtube.com/watch?v=n6AXb2DNE4M"]

    var randomNum = Math.floor(Math.random() * memesVideos.length)
    var randomMeme = memesImages[randomNum]
    var randomVideo = memesVideos[randomNum]

    image.src = randomMeme
    link.href = randomVideo

    return false;
}

