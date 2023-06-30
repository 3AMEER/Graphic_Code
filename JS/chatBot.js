/* 
------------------------------------------ 
        Start Open and close Pop and Other
------------------------------------------
*/

const popChat = document.querySelector('.pop-chat .container');
const closeIcon = document.querySelector('.container .closeIcon');
const popup = document.querySelector('.popup');

let btnMessage = document.querySelector('.button-icon .message')
let btnWhatsapp = document.querySelector('.button-icon .whatsapp')
let btnQuestion = document.querySelector('.button-icon .question')

popup.onclick = () => {
    popChat.style.cssText = `
        transform: scale(1);
        display: flex;
    `
}
closeIcon.onclick = () => {
    popChat.style.cssText = `
        transform: scale(.5);
        display: none;
    `
}

function SwitchBetweenTabs() {
    const chatBot = document.querySelector('.chatBot');
    const whatsapp = document.querySelector('.whatsapp');
    const quesitionsPopular = document.querySelector('.quesitionsPopular');

    btnMessage.onclick = () => {
        chatBot.style.display = 'block';
        whatsapp.style.display = 'none';
        quesitionsPopular.style.display = 'none';
    }
    
    btnWhatsapp.onclick = () => {
        whatsapp.style.display = 'flex';
        chatBot.style.display = 'none';
        quesitionsPopular.style.display = 'none';
    }

    btnQuestion.onclick = () => {
        whatsapp.style.display = 'none';
        chatBot.style.display = 'none';
        quesitionsPopular.style.display = 'block';
    }

}
SwitchBetweenTabs()



/* 
------------------------------------------ 
                Ask Bot
------------------------------------------
*/
function askBot() {

    let outcoming = document.querySelectorAll('.outcoming p')
    let bot = document.querySelector('.chatBot .bot')


    outcoming.forEach((ele) => {

        ele.addEventListener('click', () => {
            
            if (ele.innerHTML === 'كيف تعمل المنصه'){
                let incoming = document.createElement('div')
                incoming.className = 'incoming'
                incoming.innerHTML = `
                    <div class="message">
                        <p> والله معرف ياسطى </p>
                    </div>
                    <img src="./img/chat.png" alt="">
                `
                bot.appendChild(incoming)
                
            }
            else if (ele.innerHTML === 'كيف يمكننى التواصل مع الدعم و حل مشكلتى فى اسرع وقت') {
                let incoming = document.createElement('div')
                incoming.className = 'incoming'
                incoming.innerHTML = `
                    <div class="message">
                        <p>مش هقولك</p>
                    </div>
                    <img src="./img/chat.png" alt="">
                `
                bot.appendChild(incoming)   
                
            }
            
        });
    });
};
askBot()

