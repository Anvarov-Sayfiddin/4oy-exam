

let elForm = document.querySelector(".form");
let elName = document.querySelector(".input-name");
let Lname = document.querySelector(".input-last__name");
let elEmail = document.querySelector(".input-email");
let elPassword = document.querySelector(".input-password");
let elRepeatP = document.querySelector(".last-password");
let elSpan = document.querySelector('.form-span');
let elSpan2 = document.querySelector('.spann');
let elSpan3 = document.querySelector(".span2");
let elSpan4 = document.querySelector(".span4");
let elSpan5 = document.querySelector(".span5");


let elFormCarousel = document.querySelector(".form2");
let elcontactName = document.querySelector(".contact-Name__input1");
let elContactEmail = document.querySelector(".contact-emaill");
let elContactNumber = document.querySelector(".contact__number");
let elContactCompany = document.querySelector(".contact__company");
let elNameSpan1 = document.querySelector(".contact__span1");
let elNameSpan2 = document.querySelector(".contact__span2");
let elNameSpan3 = document.querySelector(".contact__span3");
let elNameSpan4 = document.querySelector(".contact__span4");
let elLastButton = document.querySelector(".last-button");
let divv = document.querySelector(".divvv");

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    let firstNameValue = elName.value.trim();
    let lastNameValue = Lname.value.trim();
    let emailValue = elEmail.value.trim();
    let passwordValue = elPassword.value.trim();
    let repeatValue = elRepeatP.value.trim();
    
    if(firstNameValue.length < 2) {
        // firstNameValue.classList.add("text-danger");
        elSpan.classList.remove('d-none');
        elSpan.classList.add('d-block');
        return;
    }
    
    if(lastNameValue.length < 2) {
        // lastNameValue.classList.add("text-danger");
        elSpan2.classList.remove('d-none');
        elSpan2.classList.add('d-block');
        return;
    }
    
    if (!emailValue.endsWith('@gmail.com')) {
        elSpan3.classList.remove('d-none');
        elSpan3.classList.add('d-block');
        return;
    }
    
    if(passwordValue.length != 8 || !isNaN(passwordValue)) {
        elSpan4.classList.remove('d-none');
        elSpan4.classList.add('d-block');
        return;
    }
    
    if(repeatValue != passwordValue) {
        elSpan5.classList.remove('d-none');
        elSpan5.classList.add('d-block');
        return;
    }
    
    elForm.classList.add('d-none')
    

})










elFormCarousel.addEventListener("submit", function(evt2) {
    evt2.preventDefault();
    // let Name = elcontactName.value.trim();
    let NameValue = elcontactName.value.trim();
    let Emaill = elContactEmail.value.trim();
    let numbEr = elContactNumber.value.trim();
    let company = elContactCompany.value.trim();


    

    console.log(NameValue.length);
    
    if(NameValue.length < 2 ) {
        elNameSpan1.classList.remove('d-none');
        elNameSpan1.classList.remove('d-block');
        elcontactName.classList.add("text-danger");
        return;
    }
    
    if(!Emaill.endsWith('@gmail.com')) {
        elNameSpan2.classList.remove("d-none");
        elNameSpan2.classList.add("d-block");
        elContactEmail.classList.add("text-danger");
        return;
    }
    
    if(numbEr.length != 12) {
        elNameSpan3.classList.add("d-block");
        elNameSpan3.classList.remove("d-none");

    }
    
    if (company.length < 3 || company.length > 20) {
        elNameSpan4.classList.remove("d-none");
        elNameSpan4.classList.add("d-block");
    }


    
    
    
})






