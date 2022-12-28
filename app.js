let name = document.querySelector(".name").value;
let email = document.querySelector(".email").value;
let comment = document.querySelector(".comment").value;

//sending email
function emailMe(name,email,comment){
    Email.send({
        Host : "smtp.gmail.com",
        Username : 'vernordmusran27@gmail.com',
        Password : 'wxnbwtkglysjzxlb',
        To : 'vernordmusran27@gmail.com',
        From : '',
        Subject : `${name} sent a comment to you !`,
        Body : `Email : ${email}<br/>Comment : ${comment}`
    }).then(
        message => alert("Successfully send")
    );
}