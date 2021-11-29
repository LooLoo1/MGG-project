/*const schedule = [{  //Цикл 371 година
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
}, {
	imgURL: "Campaing Passes x25",
	timeDuration: 43200000//12 години
}, {
	imgURL: "Quadruple Regeneration-3days",
	timeDuration: 86400000//1 день
}];
const startTime = 1633240713000 + 87000;*/




// {
// 	imgName:"Campaing Passes x25",
// 	imgURL: "Campaing_Passes_x25",
// 	timeDuration: 43200000//12 години
// },




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
	// 604800016.56,//Тиждень
	86400000,//День
	3600000,//Година
	60000,//Хвилина
	1000//Cекунда
];

let selectEvents;
// selectEvents = [0, 5, 7, 13];
selectEvents = [2, 7, 9, 15];

scheduleDuration = 0; // Вираховування тривалості повного циклу
for (let j = 0; j < schedule.length; j++) {
	scheduleDuration += schedule[j].timeDuration;
}

// const startTime = 1633240713000 + 87000;  //Поки точно     //Похибка +7333.333 з кожним наступним айтемом.
// let time = new Date();
// let nowTime = Date.parse(time);


// let nm = 0;
myTimer();
// var nowTimer = setInterval(myTimer, 1000);// Запускає функцію таймер
function myTimer() {
	// if (nm >= 5) stopTimer();
	// console.log(nm);
	// nm++

	// time = new Date();
	// nowTime = Date.parse(time);
	nowTime = Date.now() //Замість двох строк вище?

	console.clear();
	let timerEventNow = scheduleNow(nowTime, startTime);
	if (selectEvents) calculationBeginningEvents(timerEventNow);

}

function stopTimer() {
	clearInterval(nowTimer);
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
			// passed++;
			// console.log(j);
		}
		let timer = dateСalculation(p[2] + addTime);
		console.log(`The event will start in: ${schedule[j].imgURL}\nTimer: ${timer[2]} days ${timer[3]} hours ${timer[4]} minutes ${timer[5]} second`);//Скільки лишилося до евенту

		timer = p[2] + addTime + nowTime;
		console.log(`Event start: ${new Date(timer)}`);//Початок евенту

		j++;
		if (j == schedule.length) j = 0;
		addTime += schedule[j].timeDuration;
		timer = p[2] + addTime + nowTime
		console.log(`Event end: ${new Date(timer)}`);//Кінець евенту


		console.log('====================');

	}
}


function scheduleNow(now, start) {
	let passed = 0;
	let elapsedTime = now - start;
	if (elapsedTime >= scheduleDuration) {
		formule = Math.trunc(elapsedTime / scheduleDuration);
		passed = formule * schedule.length;
		elapsedTime -= scheduleDuration * formule;
	}
	let i = elapsedTime;
	let eventNow = 0;
	while (i >= schedule[eventNow].timeDuration) {
		i -= schedule[eventNow].timeDuration;
		eventNow++;
		passed++;
		if (eventNow >= schedule.length) eventNow = 0;
	}

	let timer = dateСalculation(schedule[eventNow].timeDuration - i);
	console.log(`Event: ${schedule[eventNow].imgURL}\nTimer: ${timer[2]} days ${timer[3]} hours ${timer[4]} minutes ${timer[5]} second`);
	console.log(`${eventNow + 1} of ${schedule.length} events`);
	return [timer, eventNow, schedule[eventNow].timeDuration - i];
}

function dateСalculation(num) {//Переводитть мілісекунди в дату
	let days = [];
	for (let i = 0; i < timeMilisecond.length; i++) {
		// let n = Math.trunc(num / timeMilisecond[i]);
		days[i] = Math.trunc(num / timeMilisecond[i]);
		num -= days[i] * timeMilisecond[i];
	}
	let stringDate = '';
	let timeABR;
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
	// console.log(stringDate);//Повністю робоче
	return days;
}



//ToDo
/*
1. Розділити все на міні функці
2. Зробити пасхалку через комбінацію клавіш що відкриватиме не одну наступну дату а на цілий рік. 365.25 * 24 / 371 = 23.6280323450134771(+-24 дати)
Або таймер і якщо ти зайшов на сайт 24 числа а на годиннику стукнуло 00:00 і наступне число то на карточках поокажуться знаки оклику при кліці на які появиться розпорядок на рік
3. Оптимізуй картинки і гроби гнучкіший код
*/



// // Розміри монітора
// let screenSize = document.createElement("WindowSize");
// document.body.append(screenSize);
// style(screenSize);

// window.addEventListener('resize', screenResize);
// window.onload = screenResize();

// function screenResize() {
// 	let als = [window.innerWidth, window.innerHeight]
// 	screenSize.innerHTML = `${als[0]}<br>${als[1]}`;
// }
// function style(el) {
// 	let css = el.style;
// 	css.fontSize = "4vh";
// 	css.padding = "0.5em 1em";
// 	css.position = "absolute";
// 	css.top = "0";
// 	css.left = "0";
// 	css.zIndex = "100000";
// 	css.pointerEvents = "none";
// 	css.borderBottomLeftRadius = "30%";
// 	css.textAlign = "center";
// 	css.background = "rgba(0, 0, 0, 0.5)";
// }


// let value = (styleDate(new Date()) !== localStorage.getItem('lastDayVisits')) ? { numberVisitsAdd();styleDate(new Date());} : localStorage.getItem('lastDayVisits')

// localStorage.setItem('lastDayVisits', (styleDate(new Date()) !== localStorage.getItem('lastDayVisits')) ? { numberVisitsAdd();styleDate(new Date());} : localStorage.getItem('lastDayVisits'));

console.log();

// styleDate(new Date());
function styleDate(d) {
	return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`
}


function numberVisitsAdd() {
	localStorage.setItem('numberVisits', Number(localStorage.getItem('numberVisits')) + 1);
}

let lvl = getRandomInt(999);
console.log(lvl);

const lvlEvoCenter = document.querySelector('.levels .content');
const questionsButton = document.querySelectorAll("button.info , button.exit");
const infoPanel = document.querySelector("aside.info");
const b = document.querySelector("body");
// console.log(questionsButton);
for (let i = 0; i < questionsButton.length; i++) {
	questionsButton[i].addEventListener("click", () => {
		infoPanel.classList.toggle('active');
		b.classList.toggle('noScroll');
		lvlEvoCenter.classList.add('active');
		lvlEvoCenter.style.setProperty('--lvl', `${lvl}px`);
		lvlEvoCenter.style.setProperty('--lvl-s', `${lvl}`);


	})
}




const neonText = document.querySelector(".subtitle");
for (let i = 1; i < neonText.children.length; i++) {
	neonText.children[i].style.setProperty('--spead-animation-s', `${getRandomInt(6)}s`);
	neonText.children[i].style.setProperty('--delay-animation-s', `${getRandomInt(9)}s`);
	// console.log(neonText.children[i].outerHTML);
}
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}



const headerTimer = document.querySelector(".main");
let borderWidth = 5;

let bord = '';
for (let i = -borderWidth; i < borderWidth + 1; i++) {
	for (let j = -borderWidth; j < borderWidth + 1; j++) {
		bord += `${i}px ${j}px #000000,`;
	}
}
bord = bord.slice(0, -1);
for (let i = 0; i < headerTimer.children.length; i++) {
	headerTimer.children[i].style.textShadow = bord;
}


const footer = document.querySelector('footer');
footer.style.setProperty('--speed-animation-s', `${getRandomInt(50) + 1}s`);


// let medPackSize = document.querySelectorAll('.med-pack .item');
// let elZIndex = 1;
// let elBottom = 15;
// let elsScaleSize = 2;
// for (let i = 0; i < medPackSize.length; i++) {
// 	elBottom -= Math.random() * 3;
// 	medPackSize[i].style.setProperty('--scale-size', `${elsScaleSize}`);
// 	medPackSize[i].style.setProperty('--z-index', `${elZIndex}`);
// 	medPackSize[i].style.setProperty('--bottom', `${elBottom}%`);
// 	medPackSize[i].style.setProperty('--left', `${getRandomInt(30) + 25}%`);
// 	medPackSize[i].style.setProperty('--rotate', `${12 / medPackSize.length * i}deg`);
// 	elsScaleSize -= Math.random() / 4;
// 	elZIndex++;

// 	// console.log(Math.random() + 1);
// }
