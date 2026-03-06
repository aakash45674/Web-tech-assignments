const text="Akash Behera";
let index=0;
const typingElement=document.getElementById("typing");

function typeEffect(){
if(index<text.length){
typingElement.innerHTML+=text.charAt(index);
index++;
setTimeout(typeEffect,120);
}
}

typeEffect();

const skills=document.querySelectorAll(".bar");

const animateSkills=()=>{
skills.forEach(bar=>{
const percent=bar.getAttribute("data-percent");
const fill=bar.querySelector(".fill");
const value=bar.parentElement.querySelector(".skill-value");

let count=0;

const interval=setInterval(()=>{
if(count>=percent){
clearInterval(interval);
}else{
count++;
value.textContent=count+"%";
fill.style.width=count+"%";
}
},20);

});
};

const skillsSection=document.getElementById("skills");

const observer=new IntersectionObserver(entries=>{
if(entries[0].isIntersecting){
animateSkills();
observer.disconnect();
}
},{threshold:0.4});

observer.observe(skillsSection);