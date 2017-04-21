;(function(){
	'use strict';

	var name = 'Админ';
	var password = 'Черный властелин';
	var userName = prompt('Кто проишёл?');

	if (userName == name) {
		var userPassword = prompt('Пароль?');
	}
	
	if (userPassword == password) {
		alert('Добро пожаловать!');
	} else if (userName == null) {
		alert('Вход отменен');
	} else if (userName !== name) {
		alert('Я вас не знаю');
	} else if (userPassword == null) {
		alert('Вход отменен');
	} else if (userPassword !== password) {
		alert('Пароль неверен');
	}

})();
