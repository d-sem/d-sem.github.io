/*
 * Модуль взаимодействия с кнопкам
 */

var button = {
    on: function (id){
        document.getElementById(id).style.display = 'inline-block';
    },
    off: function (id){
        document.getElementById(id).style.display = 'none';
    }
};