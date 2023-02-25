const formEl = document.querySelector("#js-form");
const nameEl = document.querySelector("#js-name");
const emailEl = document.querySelector("#js-email");
const adressEl = document.querySelector("#js-adress");

formEl.addEventListener ("submit", (event) => {
    event.preventDefault();

    const name = nameEl.value;
    const email = emailEl.value;
    const adress = adressEl.value;
    const message = messageEl.value;

    if (name === "") {
        alert("please enter a name");
        return;
    }

    if (email === "") {
        alert("please enter an email-adress");
        return;
    }

    if (adress === "") {
        alert("please enter an adress");
        return;
    }

    if (subject === "") {
        alert("please enter a message");
        return;
    }

    alert("form submitted")
 
});

nameEl.addEventListener("blur", (event) => {
    const name = event.target.value.trim();

    const minLengthRegex = /^[a-zA-Z]{2,}/;

    if (minLengthRegex.test(name)) {
     event.target.classList.add("is-success");
     event.target.classList.remove("is-wrong");
    }
    else {
    event.target.classList.add("is-wrong");
    event.target.classlist.remove("is-success");
    }
});