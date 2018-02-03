var URL = 'https://cryptic-taiga-39170.herokuapp.com';
var messages = [];
var users = [];

token.echo();

document.getElementById('form-reg').addEventListener('submit', function (e){
    e.preventDefault();
    var data = document.getElementById('form-reg');
    // console.log(name);
    var form = {
        name:  data.elements.name.value,
        email: data.elements.email.value,
        pass1: data.elements.pass1.value,
        pass2: data.elements.pass2.value
    };

    var msg = '';
    for (var key in form) {
        if (isEmpty(form[key])){
            console.log(key);
            msg += key + " empty\n";
        }
    }

    if (msg.length) {
        echo(msg);
    } else {
        user.create(form.name,form.email,form.pass1, form.pass2);
    }

});
document.getElementById('form-auth').addEventListener('click', function (e){
    e.preventDefault();
    var data = document.getElementById('form-auth');
    // console.log(name);
    var form = {
        email: data.elements.email.value,
        pass: data.elements.pass.value
    };

    var msg = '';
    for (var key in form) {
        if (isEmpty(form[key])){
            console.log(key);
            msg += key + " empty\n";
        }
    }

    if (msg.length) {
        echo(msg);
    } else {
        auth.login(form.email,form.pass);
    }
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


document.getElementById('post-message').addEventListener('click', function (e){
    e.preventDefault();
    var data = document.getElementById('post-message');
    // console.log(name);
    var text = data.elements.text.value;
    var msg = '';

    if (isEmpty(text)){
        msg += text + " empty\n";
    }


    if (msg.length) {
        echo(msg);
    } else {
        message.create(text);
    }
});