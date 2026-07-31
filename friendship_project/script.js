// ===============================
// إعدادات
// ===============================

const scene = document.getElementById("scene");

const radius = 260;

const photos = [
"images/1.jpg",
"images/2.jpg",
"images/3.jpg",
"images/4.jpg",
"images/5.jpg",
"images/6.jpg",
"images/7.jpg"
];

const messages = [

"❤️ أجمل شلة",

"😂 الضحك معاكم",

"✨ أحلى ذكريات",

"💕 Best Friends",

"🤍 شكراً ليكم",

"🌸 Friends Forever",

"💖 أنتم عيلتي",

"⭐ Lucky To Have You",

"🎉 أجمل أيام",

"📸 أحلى صور",

"🌹 Memories",

"💙 Together",

"☀️ Every Smile",

"🌍 Forever",

"💫 Friendship",

"❤️ Amazing",

"🤍 Thank You",

"✨ Never End",

"🌼 Happiness",

"💖 My Favorite People"

];

const photoElements = [];
const textElements = [];


// إنشاء الصور

photos.forEach(src=>{

const img=document.createElement("img");

img.src=src;

img.className="orbit-photo";

scene.appendChild(img);

photoElements.push(img);

});


// إنشاء الرسائل

messages.forEach(msg=>{

const div=document.createElement("div");

div.className="orbit-text";

div.innerHTML=msg;

scene.appendChild(div);

textElements.push(div);

});
// =======================================
// الحركة الرئيسية
// =======================================

let rotation = 0;

function animateScene(){

    rotation += 0.005;

    // --------------------------
    // الصور
    // --------------------------

    photoElements.forEach((photo,index)=>{

        const angle =
        rotation +
        (Math.PI * 2 / photoElements.length) * index;

        const x = Math.cos(angle) * radius;

        const y = Math.sin(angle) * radius * 0.45;

        // العمق
        const depth = (Math.sin(angle) + 1) / 2;

        // التكبير والتصغير
        const scale = 0.65 + depth * 0.75;

        photo.style.left = (350 + x) + "px";
        photo.style.top = (350 + y) + "px";

        photo.style.transform =
        `translate(-50%,-50%) scale(${scale})`;

        photo.style.opacity = 0.35 + depth * 0.65;

        photo.style.zIndex = Math.floor(depth * 100);

    });



    // --------------------------
    // الرسائل
    // --------------------------

    textElements.forEach((text,index)=>{

        const angle =
        -rotation +
        (Math.PI * 2 / textElements.length) * index;

        const x = Math.cos(angle) * (radius + 120);

        const y = Math.sin(angle) * 190;

        const depth = (Math.sin(angle) + 1) / 2;

        const scale = 0.8 + depth * 0.4;

        text.style.left = (350 + x) + "px";

        text.style.top = (350 + y) + "px";

        text.style.transform =
        `translate(-50%,-50%) scale(${scale})`;

        text.style.opacity = depth;

        text.style.zIndex = Math.floor(depth * 100);

    });

    requestAnimationFrame(animateScene);

}

animateScene();
// =======================================
// إنشاء النجوم
// =======================================

const stars = document.getElementById("stars");

for(let i=0;i<180;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*2+"s";

    star.style.opacity = Math.random().toString();

    stars.appendChild(star);

}
// =======================================
// قلوب صغيرة تطير
// =======================================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="flying-heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-30px";

    heart.style.animationDuration=
    (5+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,500);