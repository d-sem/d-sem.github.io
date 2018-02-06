var URL = 'https://cryptic-taiga-39170.herokuapp.com';
var messages = [];
var users = [];
var length = -5;
var validate = false;

auth.validate();

setInterval(auth.validate, 10000);
setInterval(checkLogin, 10000);

document.getElementById('auth').addEventListener('click', function(e) {
    form.on('form-auth');
    form.off('form-reg');
});

document.getElementById('reg').addEventListener('click', function(e) {
    form.off('form-auth');
    form.on('form-reg');
});

document.getElementById('form-reg').addEventListener('submit', function (e){
    e.preventDefault();
    var data = document.getElementById('form-reg');
    var form = {
        name:  data.elements.name.value,
        email: data.elements.email.value,
        pass1: data.elements.pass1.value,
        pass2: data.elements.pass2.value
    };

    user.create(form.name,form.email,form.pass1, form.pass2);
});
document.getElementById('form-auth').addEventListener('click', function (e){
    e.preventDefault();
    var data = document.getElementById('form-auth');
    // console.log(name);
    var form = {
        email: data.elements.email.value,
        pass: data.elements.pass.value
    };

    auth.login(form.email,form.pass);
});

document.getElementById('get-users').addEventListener('click', function(){
    user.list();
});

document.getElementById('out').addEventListener('click', function(){
    auth.out();
});

document.getElementById('get-messages').addEventListener('click', function (){
    message.list();
});


document.getElementById('post-message').addEventListener('submit', function (e){
    e.preventDefault();
    var data = document.getElementById('post-message');
    var text = data.elements.text.value;
    message.create(text);
});