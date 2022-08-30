function sendMails(params) {
    var tempParams = {
        first_name: document.getElementById("fname").value,
        last_name: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        phonenumber: document.getElementById("phone").value,
        message: document.getElementById("message").value,

    };
    emailjs.send('service_djxgh0d', 'template_wjb707a', tempParams).then(function (res) {
        console.log("sucess", res.status);


    })
    document.getElementById("fname").value = "";
}