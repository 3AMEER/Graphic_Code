/* 
------------------------------------------ 
        Start Button Nav Header 
------------------------------------------
*/
let navication = document.querySelector('.navication');

let hamburger = document.querySelector('.hamburger');
let hamburgerInputCheck = document.querySelector('.hamburger input');

function navBar(){
    hamburgerInputCheck.addEventListener('change', () => {
        if (hamburgerInputCheck.checked) {
            hamburger.style.cssText = `
                position: fixed;
                left: 15px;
            `
            navication.classList.add('widthFull')
            document.body.style.overflow = "hidden"
        }
    })
    hamburgerInputCheck.addEventListener('change', () => {
        if (!hamburgerInputCheck.checked) {
            hamburger.style.position = 'relative'
            navication.classList.remove('widthFull')
            document.body.style.overflow = "auto"
        }
    })

}
navBar()



/* 
------------------------------------------ 
        Start Filter Cards  
------------------------------------------
*/
let switcherLis = document.querySelectorAll(".switcher li");
// let imgs = Array.from(document.images);
let cards = document.querySelectorAll('.Filter .card')

switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageCard);
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

// Manage Imgs
function manageCard() {
    cards.forEach((card) => {
      card.style.display = "none";
      card.style.transition = '.3s'
      card.style.opacity = "1";

  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
      el.style.display = "block";
      el.style.transition = '.3s'
  });
}




/* 
------------------------------------------ 
        Start Effects For boxes
------------------------------------------
*/
const boxes = document.querySelectorAll(".effect");
const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) =>{
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) box.classList.add("show");
        else box.classList.remove("show")
    });
};
window.addEventListener("scroll", checkBoxes);
checkBoxes()





/* 
------------------------------------------ 
        Start Questions ansower
------------------------------------------
*/
let accordionHeader = document.querySelectorAll(".accordion-header");

accordionHeader.forEach(function(querstion) {
    querstion.addEventListener("click", () => {

        const active = document.querySelector(".accordion-header.active")

        if (active && active !== querstion){
            active.classList.toggle("active")
            active.nextElementSibling.style.maxHeight = 0
        }

        querstion.classList.toggle("active")
        const answer = querstion.nextElementSibling
        if (querstion.classList.contains("active")){
            answer.style.maxHeight = answer.scrollHeight + "px"
        }
        else{
            answer.style.maxHeight = 0
        }
    })
})

window.onclick = (e) =>{
    if(!e.target.matches('.accordion-header') && !e.target.matches('.answer')){
        accordionHeader.forEach(question => {
            question.classList.remove('active')

            const answer = question.nextElementSibling
            answer.style.maxHeight = 0
        })
    }
}



/* 
------------------------------------------ 
        Start laoder
------------------------------------------
*/
let lod = document.querySelector('.laoder')

function laoderPage(){
    document.body.style.overflow = "hidden"
    setTimeout(() => {
        lod.style.display = 'none'
        document.body.style.overflow = "auto"
    }, 2000);
}
laoderPage()




/* 
------------------------------------------ 
            Start Mous Traker
------------------------------------------
*/
const cursor = document.querySelector(".mousTraker");

document.body.addEventListener("mousemove", function (event) {
    setTimeout(function () {
      cursor.style.top = `${event.clientY}px`;
      cursor.style.left = `${event.clientX}px`;
    }, 100);
});
