
window.setInterval(()=>{
    window.document.title="Venu's Portfolio"

},1000);
window.addEventListener('scroll',()=>{
    let nav=document.querySelector(".navbar");
    nav.classList.toggle('sticky',window.scrollY > 0)
})


