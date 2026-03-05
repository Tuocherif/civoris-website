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

/* KPI counter animation */
const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const increment = target / 120;

      const update = ()=>{
        if(count < target){
          count += increment;
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(update);
        } else {
          counter.innerText = target;
        }
      };

      update();
      counterObserver.unobserve(counter);
    }
  });
},{threshold:0.6});

counters.forEach(counter=>{
  counterObserver.observe(counter);
});

