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