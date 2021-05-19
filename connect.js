function f1() {
    var mail = document.getElementById("email").value;
    var msg = document.getElementById("err_msg");

    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mail.match(regex)){
        msg.innerHTML = "success.";
    }
    else {
        msg.innerHTML = "Please enter a valid mail";
    }
}
