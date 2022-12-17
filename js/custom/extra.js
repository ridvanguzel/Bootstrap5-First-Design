/* Header Started Here */

window.addEventListener("DOMContentLoaded", event => {
    var navbarMobile=function(){
        const nCollapsible=document.body.querySelector("#mainNavbar");
        const myHeaderHeight = document.querySelector("#myHeader").offsetHeight; //Eğer bu şekilde istemiyorsak buradaki myheaderheight değişkenini kaldırcaz ve if içindeki < myheaderheight ı === 0 a eşitlicez. Ayrıca headera' verdiğimiz id i kaldırcaz//
        if(!nCollapsible){
            return; 
        } 
        if(window.scrollY < myHeaderHeight){
            nCollapsible.classList.remove("navbar-mobile");
        }else{
            nCollapsible.classList.add("navbar-mobile");
        }
    };
    navbarMobile();
    document.addEventListener("scroll", navbarMobile);
    const myNavbar=document.body.querySelector("#mainNavbar");
    if(myNavbar){
        new bootstrap.scrollSpy(document.body, {
            target:"#mainNavbar",
            offset:74,
        });
    }
});

var BtnCanvas = document.querySelectorAll(".btn-close-canvas");
for (let i = 0; i < BtnCanvas.length; i++){
    BtnCanvas[i].addEventListener("click", function(){
        document.querySelector('[data-bs-dismiss="offcanvas"]').click();
    });
}

/* Header finished Here */
/*Form Started Here */
(function () {
    'use strict'

    var myName = document.querySelector("#name");
    var myEmail = document.querySelector("#email");
    var myPhone = document.querySelector("#phone");
    var myMessage = document.querySelector("#message");
    var myBtn = document.querySelector("#btnSendContact");

    if(myMessage.value.length == 0){
        myBtn.disabled = true;
    }

    const spacePattern = /^\S*$/;
    const NumericPattern = /^([^0-9]*)$/;
    const EmailPattern = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
    const OnlyNumberPattern = /^[0-9 ]*$/;

    myName.addEventListener("blur", controlName);
    myEmail.addEventListener("blur", controlEmail);
    myPhone.addEventListener("blur", controlPhone);
    myMessage.addEventListener("blur", controlMessage);

    function controlName(){
            var myError = document.querySelector("#ErrName");
            if (myName.value.length == 0){
                myName.classList.remove("is-valid");
                myName.classList.add("is-invalid");
                myError.textContent = "İsim alanı boş bırakılamaz.";
                return false;
            }else if(myName.value.length <= 3){
                myName.classList.remove("is-valid");
                myName.classList.add("is-invalid");
                myError.textContent  = "İsim alanı 4 karakterden az olamaz"
                return false;
            }else if(myName.value.length  >= 40){
                myName.classList.remove("is-valid");
                myName.classList.add("is-invalid");
                myError.textContent = "İsim alanı 40 karakterden fazla olamaz"
                return false;
            }else if(!NumericPattern.test(myName.value)){
                myName.classList.remove("is-valid");
                myName.classList.add("is-invalid");
                myError.textContent = "İsim alanında rakam Kullanılamaz";
                return false;
            }
            else{
                myName.classList.remove("is-invalid");
                myName.classList.add("is-valid");
                return true;
            }
    }
    function controlEmail() {
        var myError = document.querySelector("#ErrEmail");
        if (myEmail.value.length == 0) {
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            myError.textContent = "Eposta alanı boş bırakılamaz";
            return false;
        } else if (!spacePattern.test(myEmail.value)) {
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            myError.textContent = "Eposta adresinizde boşluk bıraktınız";
            return false;
        } else if(myEmail.value.length <= 3){
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            myError.textContent  = "Email alanı 4 karakterden az olamaz";
            return false;
        }else if(myEmail.value.length  >= 40){
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            myError.textContent = "Email alanı 40 karakterden fazla olamaz";
            return false;
        }else if (!EmailPattern.test(myEmail.value)) {
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            myError.textContent = "Eposta formatınız yanlış. Tekrardan kontrol edin!";
            return false;
        } else {
            myEmail.classList.remove("is-invalid");
            myEmail.classList.add("is-valid");
            return true;
        }
    }
    function controlPhone(){
        var myError = document.querySelector("#ErrPhone");
        if (myPhone.value.length == 0){
            myPhone.classList.remove("is-valid");
            myPhone.classList.add("is-invalid");
            myError.textContent = "Telefon alanı boş bırakılamaz.";;
            return false;
        }else if(myPhone.value.length <= 3){
            myPhone.classList.remove("is-valid");
            myPhone.classList.add("is-invalid");
            myError.textContent = "Telefon alanı 3 rakamdan az olamaz";
            return false;
        }else if(myPhone.value.length > 15){
            myPhone.classList.remove("is-valid");
            myPhone.classList.add("is-invalid");
            myError.textContent = "Telefon alanı 3 rakamdan az olamaz";
            return false;
        } else if (!OnlyNumberPattern.test(myPhone.value)) {
            myPhone.classList.remove("is-valid");
            myPhone.classList.add("is-invalid");
            myError.textContent = "Telefon numaranız sadece rakamlardan oluşmalıdır";
            return false;
        }
        else{
            myPhone.classList.remove("is-invalid");
            myPhone.classList.add("is-valid");
            return true;
        }   
    }
    function controlMessage(){
        var myError = document.querySelector("#ErrMessage");
        if (myMessage.value.length == 0) {
            myMessage.classList.remove("is-valid");
            myMessage.classList.add("is-invalid");
            myError.textContent = "Mesaj alanı boş bırakılamaz";
            return false;
        } else if (myMessage.value.length < 10) {
            myMessage.classList.remove("is-valid");
            myMessage.classList.add("is-invalid");
            myError.textContent = "Mesajınız 10 karakterden az olamaz";
            return false;
        } else {
            myMessage.classList.remove("is-invalid");
            myMessage.classList.add("is-valid");
            return true;
        }
    }

    myMessage.addEventListener("keyup", function(){
        document.getElementById("current-character").textContent = myMessage.value.length;
        if(myMessage.value.length >= 10){
            myBtn.disabled = false;
        }else{
            myBtn.disabled = true;
        }
    });

    var myForms = document.querySelector(".needs-validation");
    myForms.addEventListener
    ("submit", function(e){
        if(!myForms.checkValidity() || !controlName() || !controlEmail() || !controlPhone() || !controlMessage())
        {
            e.preventDefault();
            e.stopPropagation();
        }
    }, false);

})();
/*Form Finished Here */

