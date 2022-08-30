function sendMail(params) {
    var tempParams = {
        message: document.getElementById("sus_email").value,

    };
    emailjs.send('service_djxgh0d', 'template_76co85s', tempParams).then(function (res) {
        console.log("sucess", res.status);

    })
    // document.getElementById("sus_email").value = "";
    document.getElementById("sus_email").value = "";
}