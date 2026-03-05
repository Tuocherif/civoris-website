/* Navbar shadow on scroll */
window.addEventListener("scroll", function(){
  document.getElementById("navbar")
  .classList.toggle("scrolled", window.scrollY > 50);
});

/* Scroll reveal animation */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{
  threshold:0.15,
  rootMargin: "0px 0px -50px 0px"
});

document.querySelectorAll(".fade-in").forEach(el=>{
  observer.observe(el);
});

