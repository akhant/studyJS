function getTodayCalendar(){
	let today = new Date();
	let todayYear = today.getFullYear();
	let todayMonth = today.getMonth() + 1;
	let todayDay = today.getDate();
	createCalendar("calendar", todayYear, todayMonth);
	y.value = todayYear;
	m.value = todayMonth;
	document.querySelectorAll(".bg")[todayDay].click();
};

function createCalendar(id, year, month) {
	var elem = document.getElementById(id);
	var mon = month - 1; 
	var d = new Date(year, mon);


	var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

	// заполнить первый ряд от понедельника и до дня, с которого начинается месяц
	for (var i = 0; i < getDay(d); i++) {
		table += '<td ></td>';
	}

	// ячейки календаря с датами
	while (d.getMonth() == mon) {
		table += '<td class="bg">' + d.getDate() + '</td>';

		if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
		  table += '</tr><tr>';
		}

		d.setDate(d.getDate() + 1);
	}

	// добить таблицу пустыми ячейками, если нужно
	if (getDay(d) != 0) {
		for (var i = getDay(d); i < 7; i++) {
		  table += '<td></td>';
		}
	}

	// закрыть таблицу
	table += '</tr></table>';

	// только одно присваивание innerHTML
	elem.innerHTML = table;

	let calwrap = document.querySelector(".calendar-wrapper");
      //строка для отображения даты
    if (document.getElementById("text") == null) {
		var div = document.createElement('div');
		div.setAttribute("id", "text");
	 	calwrap.insertAdjacentElement("beforeEnd", div);
 	}
 	

 	//создаем цикл для установки обработчика клика для каждой ячейки
    for (let i = 0; i <= 30; i++){
   		//доступ к ячейке
	   	let bg = document.querySelectorAll(".bg")[i];
	   	//цвет фона по умолчанию
	   	if (bg == undefined) continue;
		bg.style.backgroundColor = "rgb(255, 255, 255)";

	   	bg.onclick= function(){
			if (month.toString().length == 1) month = "0"+month;
		   	//записать дату в строку
	   		var div = document.getElementById("text");
		   	div.innerHTML = bg.innerHTML+"." + month+"." + year;
	   		//если фон не белый, то при клике сделать белым иначе задать рандомный фон
		   	if (bg.style.backgroundColor !== "rgb(255, 255, 255)") {bg.style.backgroundColor = "#ffffff"; 
		   		div.innerHTML = "";
		   	} else {
		   	 		bg.style.backgroundColor = "rgb("+Math.round(Math.random()*255)+", " + Math.round(Math.random()*255)+ ", " + Math.round(Math.random()*255) + ")" ;
		   	}
		};

   	}; //end for
     
}; //end createCalendar



function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
  var day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
};




var y = document.getElementById('year'); //селект год
var m = document.getElementById('month'); //селект месяц

//заполняем селект года с 1900 по 2100
for (let i=200; i>=0 ; i--) {
	let sum = 1900+i;
	let n = "<option value=\"" + sum + "\">" + sum + "</option>";
	y.innerHTML += n;
	
}

//правая кнопка листание
let rb = document.querySelector(".right-but");

rb.onclick = function(){

	if (m.value == 12) {
		m.value = 1;
		if (y.value == 2100 ) {
			y.value = parseInt(y.value)-200;
		} else {
			y.value = parseInt(y.value) +1;
		}
		
		
		createCalendar("calendar", y.value, m.value);
	} else {
		m.value = parseInt(m.value)+1;
		createCalendar("calendar", y.value, m.value);
	}
	var div = document.getElementById("text");
	div.innerHTML = "";
};

//левая кнопка листание
let lb = document.querySelector(".left-but");
lb.onclick = function(){

	if (m.value == 1) {
		m.value = 12;
		if (y.value == 1900 ) {
			y.value = parseInt(y.value)+200;
		} else {
			y.value = parseInt(y.value) -1;
		};
		createCalendar("calendar", y.value, m.value);
	} else {
		m.value = parseInt(m.value)-1;
		createCalendar("calendar", y.value, m.value);
	}
	var div = document.getElementById("text");
	div.innerHTML = "";
};

//обработчик изменения селекта год
y.onchange = function(){
	createCalendar("calendar", y.value, m.value);
	lb.style.display = "block";
	rb.style.display = "block";
};

//обработчик изменения селекта месяц
m.onchange = function(){
	createCalendar("calendar", y.value, m.value);
	lb.style.display = "block";
	rb.style.display = "block";
};

//кнопка показать 
/*document.querySelector("#but").onclick = function(){
	createCalendar("calendar", y.value, m.value);
	lb.style.display = "block";
	rb.style.display = "block";
};*/


getTodayCalendar();
 	

 	  
   	 


     


 
