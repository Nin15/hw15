const container = document.querySelector(".container");
const title = document.createElement("h1");
title.innerHTML = "Greetings";
container.appendChild(title);
const p = document.createElement("p");
p.innerHTML = "Welcome";
container.appendChild(p);

const img = document.createElement("img");
img.src = "https://www.comfortzone.com/-/media/Project/OneWeb/ComfortZone/Images/Blog/at-what-age-will-my-cat-stop-growing.jpg"
img.style.width = "100px";
container.appendChild(img);



const btn = document.createElement("button");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
btn.innerHTML = "Hi";
btn1.innerHTML = "hi";
btn2.innerHTML = "hoi";
container.appendChild(btn);
container.appendChild(btn1);
container.appendChild(btn2);
btn.style.backgroundColor = "blue";
btn.style.border = "none";
btn.style.color = "white";
btn.style.margin = "auto";

btn1.style.backgroundColor = "blue";
btn1.style.border = "none";
btn1.style.color = "white";
btn1.style.margin = "auto";

btn2.style.backgroundColor = "blue";
btn2.style.border = "none";
btn2.style.color = "white";
btn2.style.margin = "auto";

const img1 = document.createElement("img");
img1.src = "https://images.ctfassets.net/mlpi10u03bra/2wm4YoqBgMuwBNH7L6SKW1/d078deeaa9ddd0c63df90c186d79750b/First_Kitten_Banner.jpg"
img1.style.width = "100px";
container.appendChild(img1);
