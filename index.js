const modal = document.getElementById("modal")
const modalInner = document.getElementById("modal-inner")
const modalText = document.getElementById("modal-text")
const modalCloseBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")
const modalChoiceBtns = document.getElementById("modal-choice-btns")
const declineBtn = document.getElementById("decline-btn")

/*
// get modal to pop-up after 1.5s
// modal can be close by clicking the x btn
// choice btns flip back and forth if mouse hovers over decline btn
// prevent submission default
// collect the formdata
after submitting add loading svg and text
after 1.5s replace text again
after an additional 1.5s replace all in the modal excluding modal close btn
modal close btn reinable
use formdata to use their full name*/

setTimeout(function(){
    modal.style.display = "block"
},1500)

modalCloseBtn.addEventListener("click", function(){
    modal.style.display = "none"
})

declineBtn.addEventListener("mouseenter",function(){
   
    modalChoiceBtns.classList.toggle("reverse")
    

})

consentForm.addEventListener("submit", function(e){
    e.preventDefault() 
    
    const consentFormData = new FormData(consentForm)
    let userName = consentFormData.get("fullName")

     modalText.innerHTML = `
     <div class="modal-inner-loading">
        <img class=""src="images/loading.svg" alt="loading">
        <p id="consent-text">Uploading your data to the dark web...</p>
    </div>
        `
    setTimeout(function(){
        document.getElementById("consent-text").innerText = "Making the sale..."
    },1500)

    setTimeout(function(){
        modalInner.innerHTML = `
            <h2>Thanks <span class="modal-display-name">${userName}</span>, you sucker</h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/pirate.gif" alt="pirate tim curry laughing at you">
            </div>     
        `
    },3000)

})








