// Navbar เปลี่ยนสีเมื่อเลื่อนหน้า
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(5,11,22,0.95)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,217,255,.25)";
    } else {
        navbar.style.background = "rgba(8,17,31,.75)";
        navbar.style.boxShadow = "none";
    }
});

// เอฟเฟกต์พิมพ์ข้อความ
const text =
"Computer Teacher • AI • Robotics • Programming";

let i = 0;

const target = document.querySelector(".hero-text h2");

if(target){

    target.innerHTML = "";

    function typing(){

        if(i < text.length){

            target.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing,60);

        }

    }

    typing();

}

// Animation เมื่อเลื่อนหน้าจอ
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

});

document.querySelectorAll("section").forEach(sec=>{

    sec.style.opacity="0";

    sec.style.transform="translateY(60px)";

    sec.style.transition="1s";

    observer.observe(sec);

});

// ปุ่มกลับด้านบน
const topBtn = document.createElement("button");

topBtn.innerHTML="▲";

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#00d9ff";
topBtn.style.color="#000";
topBtn.style.fontSize="20px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 0 15px #00d9ff";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
