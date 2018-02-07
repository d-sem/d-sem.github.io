// вывод отладочных сообщений

function echo(msg) {
    document.getElementById("demo").innerHTML = msg;
}

// вывод чата

function chat(msg) {
    document.getElementById("chat").innerHTML = msg;
}

// форматирование времени

function formatTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return strTime;
}

// проверка актуальности сессии

function checkLogin()
{
    console.log('check login...')
    if (validate) {
        console.log('validate ok');
        message.list();
        button.off('auth');
        button.off('reg');
        button.on('out');
        button.on('get-users');
        button.on('get-messages');
        form.on('post-message');
        message.list()
    } else {
        console.log('validate not ok');
        button.on('auth');
        button.on('reg');
        button.off('get-users');
        button.off('get-messages');
        button.off('out');
        form.off('post-message');
        chat('');
    }
}

function init()
{
    auth.validate();
    user.list();

    setInterval(auth.validate, 10000);
}

function addEventListeners()
{
    // появление форм по кнопкам

    document.getElementById('auth').addEventListener('click', function(e) {
        form.on('form-auth');
        form.off('form-reg');
    });

    document.getElementById('reg').addEventListener('click', function(e) {
        form.off('form-auth');
        form.on('form-reg');
    });


    // регистрация

    document.getElementById('form-reg').addEventListener('submit', function (e){
        e.preventDefault();
        var data = document.getElementById('form-reg');
        var form = {
            name:  data.elements.name.value,
            email: data.elements.email.value,
            pass1: data.elements.pass1.value,
            pass2: data.elements.pass2.value
        };

        //todo: валидация

        user.create(form.name,form.email,form.pass1, form.pass2);
    });

    // авторизация

    document.getElementById('form-auth').addEventListener('click', function (e){
        e.preventDefault();
        var data = document.getElementById('form-auth');
        var form = {
            email: data.elements.email.value,
            pass: data.elements.pass.value
        };

        //todo: валидация

        auth.login(form.email,form.pass);
    });


    // выход

    document.getElementById('out').addEventListener('click', function(){
        auth.out();
    });

    // отправка сообщения

    document.getElementById('post-message').addEventListener('submit', function (e){
        e.preventDefault();
        var data = document.getElementById('post-message');
        var text = data.elements.text.value;

        //todo: валидация

        message.create(text);
    });
}


