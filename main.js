const schedule = [{  //Цикл 371 година
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
}
];

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
selectEvents = [0, 5, 7, 13];

scheduleDuration = 0; // Вираховування тривалості повного циклу
for (let j = 0; j < schedule.length; j++) {
	scheduleDuration += schedule[j].timeDuration;
}

const startTime = 1633240713000 + 87000;  //Поки точно     //Похибка +7333.333 з кожним наступним айтемом.
// let time = new Date();
// let nowTime = Date.parse(time);


// let nm = 0;
myTimer();
var nowTimer = setInterval(myTimer, 1000);// Запускає функцію таймер
function myTimer() {
	// if (nm >= 5) stopTimer();
	// console.log(nm);
	// nm++

	time = new Date();
	nowTime = Date.parse(time);
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
	console.log(`${eventNow + 1} to ${schedule.length} events`);
	return [timer, eventNow, schedule[eventNow].timeDuration - i];
}

function dateСalculation(num) {//Переводитть мілісекунди в дату
	let days = [];
	for (let i = 0; i < timeMilisecond.length; i++) {
		// let n = Math.trunc(num / timeMilisecond[i]);
		days[i] = Math.trunc(num / timeMilisecond[i]);
		num -= days[i] * timeMilisecond[i];
	}
	return days;
}