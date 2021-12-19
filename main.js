const schedule = [{//Цикл 371 година
	imgURL: "Campaing Passes x25",
	timeDuration: 43200000//12 години
}, {
	imgURL: "Quadruple Regeneration-3days",
	timeDuration: 86400000//1 день
}, {
	imgURL: "Challenge Token",
	timeDuration: 10800000//3 години в мілісекундах
}, {
	imgURL: "Campaing Passes x5",
	timeDuration: 108000000//1 день і 6 годин
}, {
	imgURL: "Double XP-3days",
	timeDuration: 36000000//10 годин
}, {
	imgURL: "Critical Stirikes-3days",
	timeDuration: 54000000//15 годин
}, {
	imgURL: "Campaing Passes x25",
	timeDuration: 129600000//1 день і 12 годин
}, {
	imgURL: "Jackpot Token",
	timeDuration: 68400000//19 годин
}, {
	imgURL: "Anti-Critical Shield-1day",
	timeDuration: 43200000//12 години
}, {
	imgURL: "Reactor Token",
	timeDuration: 10800000//3 години
}, {
	imgURL: "Triple XP-3days",
	timeDuration: 64800000//18 годин
}, {
	imgURL: "Double Regeneration-7days",
	timeDuration: 151200000//1 день і 18 годин
}, {
	imgURL: "Critical Stirikes-7days",
	timeDuration: 54000000//15 годин
}, {
	imgURL: "Anti-Critical Shield-3days",
	timeDuration: 43200000//12 години
}, {
	imgURL: "Campaing Passes x25",
	timeDuration: 86400000//1 день
}, {
	imgURL: "Jackpot Token",
	timeDuration: 129600000//1 день і 12 годин
}, {
	imgURL: "Double Regeneration-3days",
	timeDuration: 129600000//1 день і 12 годин
}, {
	imgURL: "Triple XP-7days",
	timeDuration: 86400000//1 день
}];
const startTime = 1633111113000 + 87000;


const timeMilisecond = [
	31557600000,//Рік
	2629800000,//Місяць
	86400000,//День
	3600000,//Година
	60000,//Хвилина
	1000//Cекунда
];

let selectEvents = [2, 7, 9, 15];

scheduleDuration = 0; // Вираховування тривалості повного циклу
for (let j = 0; j < schedule.length; j++) {
	scheduleDuration += schedule[j].timeDuration;
}

// ========================================== Неонова вивіска ==========================================
// Animation neon text added spead
const neonText = document.querySelector(".subtitle");
for (let i = 1; i < neonText.children.length; i++) {
	neonText.children[i].style.setProperty('--spead-animation-s', `${getRandomInt(6)}s`);
	neonText.children[i].style.setProperty('--delay-animation-s', `${getRandomInt(9)}s`);
}
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
//=================================================================================================



// ========================================== Footer animation spead ==========================================
const footer = document.querySelector('footer');
footer.style.setProperty('--speed-animation-s', `${getRandomInt(50) + 1}s`);
let timeZone = new Date();
footer.innerHTML = `${timeZone}`.substring(25);
//=================================================================================================



// ========================================== Покри року ==========================================
//Add main colors in website
let season = new Date().getMonth() + 1;
// let season = 10;
season = Math.floor(season / 3);
season = (season == 4) ? 0 : season;
const seasonColorsValue = [{
	SName: "Winter",
	'--season-Bg': "#506d8d",
	'--season-color1': "#506d8d",
	'--season-color2': "#2571c6",
	'--season-color-select': `${colorHexA("#506d8d", 50)}`,
	'--season-screen': "100deg"

}, {
	SName: "Spring",
	'--season-Bg': "#48385f",
	'--season-color1': "#48385f",
	'--season-color2': "#895297",
	'--season-color-select': `${colorHexA("#48385f", 50)}`,
	'--season-screen': "-60deg"
}, {
	SName: "Summer",
	'--season-Bg': "transparent",
	'--season-color1': "#ff9b25",
	'--season-color2': "#ff9b25",
	'--season-color-select': `${colorHexA("#ff9b25", 50)}`,
	'--season-screen': "50deg"
}, {
	SName: "Fall",
	'--season-Bg': "#641811",
	'--season-color1': "#641811",
	'--season-color2': "#d11f1f",
	'--season-color-select': `${colorHexA("#641811", 50)}`,
	'--season-screen': "170deg"
}];

let rootCSS = document.documentElement.style;
for (var key in seasonColorsValue[season]) {
	rootCSS.setProperty(`${key}`, `${seasonColorsValue[season][key]}`);
}
//=================================================================================================



// ==========================================  ==========================================
const facebookLink = document.querySelector(".facebook");
facebookLink.addEventListener("click", () => {
	window.location.href = facebookLink.children[0].href;
})
//=================================================================================================



// ========================================== Ево центр і локалсторедж ==========================================

if (styleDate(new Date()) !== localStorage.getItem('lastDayVisits')) {
	numberVisitsAdd();
	localStorage.setItem('lastDayVisits', styleDate(new Date()));
	if (Number(localStorage.getItem('numberVisits')) > 999) {
		localStorage.setItem('numberVisits', 1);
	}
}
function styleDate(d) {
	return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`
}
function numberVisitsAdd() {
	localStorage.setItem('numberVisits', Number(localStorage.getItem('numberVisits')) + 1);
}

const levelAnimationSpeed = 50;//In miliseconds
rootCSS.setProperty(`--level-speed`, `${levelAnimationSpeed / 1000}s`);
let lvl = Number(localStorage.getItem('numberVisits'));

const lvlEvoCenter = document.querySelector('.levels .content');
const questionsButton = document.querySelectorAll("button.info , button.exit");
const infoPanel = document.querySelector("aside.info");
const b = document.querySelector("body");
const level = document.querySelector(".levl");
let lvlAnimationTimer;
for (let i = 0; i < questionsButton.length; i++) {
	questionsButton[i].addEventListener("click", () => {
		infoPanel.classList.toggle('active');
		b.classList.toggle('noScroll');
		lvlEvoCenter.classList.add('active');
		lvlEvoCenter.style.setProperty('--lvl', `${lvl}px`);
		lvlEvoCenter.style.setProperty('--lvl-s', `${lvl}`);

		// levelStylization(level.textContent);
		if (level.textContent != levelStylization(lvl)) {
			// console.log(level.textContent, levelStylization(lvl));
			lvlAnimationTimer = setInterval(lvlNumberAnimation, levelAnimationSpeed);// Запускає функцію таймер
		}
	})
}

function lvlNumberAnimation() {
	if (level.textContent < levelStylization(lvl)) level.textContent = levelStylization(Number(level.textContent) + 1);
	if (level.textContent >= levelStylization(lvl)) clearInterval(lvlAnimationTimer);
}

function levelStylization(n) {
	n = Number(n);
	return (n < 10) ? `00${n}` : (n < 100) ? `0${n}` : n
}
//=================================================================================================


// ========================================== Shodow border generator ==========================================
//Generate border-text 5px width (text-shadow) 
const headerTimer = document.querySelector(".main");
let borderWidth = 5;
let bord = '';
for (let i = -borderWidth; i < borderWidth + 1; i++) {
	for (let j = -borderWidth; j < borderWidth + 1; j++) {
		bord += `${i}px ${j}px #000000,`;
	}
}
// /\ or \/
// for (let i = 0; i < borderWidth * 25; i++) {
// 	bord += `#000 0px 0px ${borderWidth}px,`;
// }
bord = bord.slice(0, -1);
for (let i = 0; i < headerTimer.children.length; i++) {
	headerTimer.children[i].style.textShadow = bord;
}
//=================================================================================================



// ==========================================  ==========================================
//Generate list items
const screensConteiner = document.querySelector("main .timers");
const checkedConteiner = document.querySelector("main .list .conteiner");
let inputEvents = '';
for (let i = 0; i < schedule.length; i++) {//active
	checkedConteiner.innerHTML += `<div class="list-item" style="--img:url(../IMG/items/${schedule[i].imgURL.split(' ').join('_').padEnd(schedule[i].imgURL.length + 4, ".png")}); --animation-deley: ${i + 1}s;"><input type="checkbox" name="" id="${schedule[i].imgURL}${[i]}"><label for="${schedule[i].imgURL}${[i]}"></label><span class="duration">${timeStyle(schedule[i].timeDuration)}</span></div>`;
}
const checkedList = checkedConteiner.children;
for (let i = 0; i < checkedList.length; i++) {
	checkedList[i].classList.add("active");
}
checkedList[7].classList.add("now");//=============================================================================================================

const listInput = document.querySelectorAll(".list-item input");
for (let i = 0; i < listInput.length; i++) {
	listInput[i].addEventListener("change", listChange);
}

if (!localStorage.getItem("ActiveEvents")) {
	autoChecked(selectEvents);
} else {
	autoChecked(localStorage.getItem("ActiveEvents").toString().split(","));
}

const pop = [popup = document.querySelector(".schedule"),
popupClose = document.querySelector(".schedule .close")];
for (let i = 0; i < pop.length; i++) {
	pop[i].addEventListener('click', () => {
		popup.classList.remove("visible");
		b.classList.remove('noScroll');
	});
}

let eventItems;
listChange();

let easterEgg = 0;

function listChange() {//=============================================================================================================
	selectEvents = [];
	screensConteiner.innerHTML = '';
	for (let i = 0; i < checkedList.length; i++) {
		if (listInput[i].checked) {
			selectEvents.push(i);
			screensConteiner.innerHTML += `<div class="event" tabindex="0" style="--img:url(../IMG/items/${schedule[i].imgURL.split(' ').join('_').padEnd(schedule[i].imgURL.length + 4, ".png")});" data-start="Встав сюди початок щоб при кліці робити вспливашку з розписанням"><div class="screen"><h2 class="event-name">${schedule[i].imgURL}</h2><p class="event-duration">Duration: ${timeStyle(schedule[i].timeDuration)}</p><div class="icon"></div>		<p class="timer">14h 41m 13s</p>	</div>	<p class="time">START: <span>Fri Oct 22 2021 18:00:00</span><br>END: <span>Sat Oct 23 2021 06:00:00</span></p></div>`;
		}
	} localStorage.setItem("ActiveEvents", selectEvents);

	eventItems = document.querySelectorAll(".event");
	for (let i = 0; i < eventItems.length; i++) {
		eventItems[i].addEventListener("click", function () {
			b.classList.add('noScroll');
			let timeStart = this.dataset.start;
			popup.style.setProperty('--img', `${this.style.cssText.split('\\').join('').slice(6, -1)}`);
			popup.children[0].children[1].innerHTML = '';
			for (let j = 0; j < 10; j++) {
				popup.children[0].children[1].innerHTML += `<li>${delGMT(new Date(Number(timeStart) + scheduleDuration * j))}</li>`;
			}
			popup.classList.add("visible");

			easterEgg = [this.style.cssText.split('\\').join('').slice(23, -6).split('_').join(' '), timeStart];
		});
	}
}

function autoChecked(arr) {
	for (let i = 0; i < arr.length; i++) {
		listInput[arr[i]].checked = true;
	}
	localStorage.setItem("ActiveEvents", arr);
	selectEvents = arr;
};


//При додаванні блоків генеруватимеш назву картинок яку підставлятимеш. Там де індекс 0 поставиш (i);
// console.log(schedule[0].imgURL.split(' ').join('_').padEnd(schedule[0].imgURL.length + 4, ".png"));

function timeStyle(num) {//Переводитть мілісекунди в дату
	let days = [];
	for (let i = 0; i < timeMilisecond.length; i++) {
		days[i] = Math.trunc(num / timeMilisecond[i]);
		num -= days[i] * timeMilisecond[i];
	}
	let stringDate = '',
		timeABR;
	for (let j = 0; j < days.length; j++) {
		if (days[j] != 0) {
			if (j == 0) timeABR = 'y';
			if (j == 1) timeABR = 'm';
			if (j == 2) timeABR = 'd';
			if (j == 3) timeABR = 'h';
			if (j == 4) timeABR = 'm';
			if (j == 5) timeABR = 's';
			stringDate += days[j] + timeABR + ' ';
		}
	}
	return stringDate;
}// console.log(timeStyle(3155760450000354));


// console.log(colorHexA('#ff9b25', 100));
function colorHexA(colorHex, alpha_0_100) {
	var hex = Math.round(alpha_0_100 * 255 / 100).toString(16);
	return colorHex + hex;
}


const tipsItems = document.querySelector('.tips');
for (let i = 0; i < tipsItems.children.length; i++) {
	tipsItems.children[i].style.setProperty('--speed-animation-s', `${getRandomInt(10) + 5}s`);

}





// let timerEventNow = scheduleNow(nowTime, startTime);
// 	if (selectEvents) calculationBeginningEvents(timerEventNow);

// function calculationBeginningEvents(p) {
// 	for (let i = 0; i < selectEvents.length; i++) {
// 		let addTime = 0;
// 		let j = p[1];
// 		j++;
// 		if (j == schedule.length) j = 0;
// 		while (j != selectEvents[i]) {
// 			addTime += schedule[j].timeDuration;
// 			j++;
// 			if (j == schedule.length) j = 0;
// 			// passed++;
// 			// console.log(j);
// 		}
// 		let timer = dateСalculation(p[2] + addTime);
// 		console.log(`The event will start in: ${schedule[j].imgURL}\nTimer: ${timer[2]} days ${timer[3]} hours ${timer[4]} minutes ${timer[5]} second`);//Скільки лишилося до евенту

// 		timer = p[2] + addTime + nowTime;
// 		console.log(`Event start: ${new Date(timer)}`);//Початок евенту

// 		j++;
// 		if (j == schedule.length) j = 0;
// 		addTime += schedule[j].timeDuration;
// 		timer = p[2] + addTime + nowTime
// 		console.log(`Event end: ${new Date(timer)}`);//Кінець евенту


// 		console.log('====================');

// 	}
// }


// function scheduleNow(now, start) {
// 	let passed = 0;
// 	let elapsedTime = now - start;
// 	if (elapsedTime >= scheduleDuration) {
// 		formule = Math.trunc(elapsedTime / scheduleDuration);
// 		passed = formule * schedule.length;
// 		elapsedTime -= scheduleDuration * formule;
// 	}
// 	let i = elapsedTime;
// 	let eventNow = 0;
// 	while (i >= schedule[eventNow].timeDuration) {
// 		i -= schedule[eventNow].timeDuration;
// 		eventNow++;
// 		passed++;
// 		if (eventNow >= schedule.length) eventNow = 0;
// 	}

// 	let timer = dateСalculation(schedule[eventNow].timeDuration - i);
// 	console.log(`Event: ${schedule[eventNow].imgURL}\nTimer: ${timer[2]} days ${timer[3]} hours ${timer[4]} minutes ${timer[5]} second`);
// 	console.log(`${eventNow + 1} of ${schedule.length} events`);
// 	return [timer, eventNow, schedule[eventNow].timeDuration - i];
// }

// function dateСalculation(num) {//Переводитть мілісекунди в дату
// 	let days = [];
// 	for (let i = 0; i < timeMilisecond.length; i++) {
// 		// let n = Math.trunc(num / timeMilisecond[i]);
// 		days[i] = Math.trunc(num / timeMilisecond[i]);
// 		num -= days[i] * timeMilisecond[i];
// 	}
// 	return days;
// }




// console.log("Wed Dec 08 2021 19:34:28 GMT+0200 (за східноєвропейським стандартним часом)".substring(25)); // Чисто часовий пояс для футера
// console.log("Wed Dec 08 2021 19:34:28 GMT+0200 (за східноєвропейським стандартним часом)".slice(0, 25)); // Зроби функцію щоб забрати часовий пояс
function delGMT(str) {
	return str.toString().slice(0, 25)
}





const titleName = document.querySelector("header .title");
const titleEvent = document.querySelector("header .event-number");
const titleTimer = document.querySelectorAll("header .main p");

myTimer();
var nowTimer = setInterval(myTimer, 1000);// Запускає функцію таймер


function myTimer() {
	// time = new Date();
	// nowTime = Date.parse(time);
	nowTime = Date.now() //Замість двох строк вище?

	let timerEventNow = scheduleNow(nowTime, startTime);
	if (selectEvents) calculationBeginningEvents(timerEventNow);
}

function scheduleNow(now, start) {
	let passed = 0;
	let elapsedTime = now - start;//Дізнаємося різницю 
	if (elapsedTime >= scheduleDuration) {
		formule = Math.trunc(elapsedTime / scheduleDuration);
		passed = formule * schedule.length;
		elapsedTime -= scheduleDuration * formule;
	}// Мінімізуємо час в межі одного повного циклу
	let i = elapsedTime;
	let eventNow = 0;
	while (i >= schedule[eventNow].timeDuration) {
		i -= schedule[eventNow].timeDuration;
		eventNow++;
		passed++;
		if (eventNow >= schedule.length) eventNow = 0;
	}// Вираховуємо який евент з 18

	let timer = dateСalculation(schedule[eventNow].timeDuration - i);



	// let name;
	// if (name != schedule[eventNow].imgURL) {
	// 	name = schedule[eventNow].imgURL;
	// }

	let eventTitle;
	let mainTimer;
	if (eventTitle != eventNow + 1) {
		titleName.innerHTML = schedule[eventNow].imgURL;
		eventTitle = eventNow + 1;
		mainTimer = schedule[eventNow].timeDuration - i;
		titleEvent.innerHTML = `${eventNow + 1} of ${schedule.length} events`;
		titleTimer[1].innerHTML = `END: ${delGMT(new Date(Date.now() + mainTimer))}`;

		for (let i = 0; i < checkedList.length; i++) {
			checkedList[i].classList.remove("now");
		}
		checkedList[eventNow].classList.add("now");
	}

	titleTimer[0].innerHTML = timeStyle(mainTimer);


	return [timer, eventNow, schedule[eventNow].timeDuration - i];
}

function calculationBeginningEvents(p) {
	for (let i = 0; i < selectEvents.length; i++) {
		let addTime = 0;
		let j = p[1];
		j++;
		if (j == schedule.length) j = 0;
		while (j != selectEvents[i]) {
			addTime += schedule[j].timeDuration;
			j++;
			if (j == schedule.length) j = 0;
		}
		eventItems[i].children[0].children[3].innerHTML = timeStyle(p[2] + addTime);

		timer = p[2] + addTime + nowTime;
		let t = [];
		t[0] = timer;

		j++;
		if (j == schedule.length) j = 0;
		addTime += schedule[j].timeDuration;
		timer = p[2] + addTime + nowTime
		t[1] = timer;

		eventItems[i].children[1].innerHTML = `<p class="time">START: <span>${delGMT(new Date(t[0]))}</span><br>END: <span>${delGMT(new Date(t[1]))}</span></p>`;
		eventItems[i].dataset.start = t[0];
	}
}

function dateСalculation(num) {//Переводитть мілісекунди в дату
	let days = [];
	for (let i = 0; i < timeMilisecond.length; i++) {
		days[i] = Math.trunc(num / timeMilisecond[i]);
		num -= days[i] * timeMilisecond[i];
	}
	return days;
}



function runOnKeys(func, ...codes) {
	let pressed = new Set();
	document.addEventListener('keydown', function (event) {
		pressed.add(event.code);

		for (let code of codes) {
			if (!pressed.has(code)) {
				return;
			}
		}
		pressed.clear();
		func();
	});

	document.addEventListener('keyup', function (event) {
		pressed.delete(event.code);
	});

}

runOnKeys(
	() => {
		if (easterEgg != 0) {
			console.log(easterEgg[0]);
			for (let j = 0; j < 100; j++) {
				console.log(`${j + 1}. `, delGMT(new Date(Number(easterEgg[1]) + scheduleDuration * j)));
			}
		}
	},
	"KeyM",
	"KeyL"
);