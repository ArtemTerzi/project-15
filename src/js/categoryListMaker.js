// CALENDAR PART!!!
import CalendarDates from "calendar-dates";
const calendarDates = new CalendarDates();
const datesBlock = document.querySelector('.calendar-modal-days');
const monthBlock = document.querySelector('.calendar-month');
const yearBlock = document.querySelector('.calendar-year');
const visibleDate = document.querySelector('.calendar-date');
const calendarFrame = document.querySelector('.calendar-frame');
const calendarModal = document.querySelector('.calendar-modal');;

let searchYear = new Date().getFullYear();
let searchMonth = new Date().getMonth();
let searchDay = new Date().getDate();
let searchDate = new Date(searchYear, searchMonth);
let dateString = `${searchYear}${(searchMonth + 1).toString().padStart(2, '0')}${searchDay.toString().padStart(2, '0')}`

function getMonthName(monthNumber) {
    const monthNames = ["January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"];
    return monthNames[monthNumber];
};

function updateMarkupDates() {
    monthBlock.textContent = getMonthName(searchMonth);
    yearBlock.textContent = searchYear;
    visibleDate.textContent = `${searchDay.toString().padStart(2, '0')}/${(searchMonth + 1).toString().padStart(2, '0')}/${searchYear}`
        // visibleDate.value = `${searchDay.toString().padStart(2, '0')}/${(searchMonth + 1).toString().padStart(2, '0')}/${searchYear}`

}


function filterNextMonthDays(daysArray) {
  const lastWeek = daysArray.slice(-7);
  const isNextMonthDays = lastWeek.every(day => day.type === 'next');

  if (isNextMonthDays) {
    return daysArray.slice(0, -7);
    };

  return daysArray;
};

function calendarMarkup(data) {
    let markup = '';
    const cleanedDates = filterNextMonthDays(data);
    markup = cleanedDates
        .map(({ date, type }) => {
            let classList = 'calendar-modal-day-item';
            if (type === 'previous') {
                classList += ' calendar-modal-day-prev';
            } else if (type === 'next') {
                classList += ' calendar-modal-day-next';
            } else if (date === searchDay) {
                classList += ' calendar-modal-day-curr';
            };
            return `<li class="${classList}">${date}</li>`;
        })
        .join('');
    updateMarkupDates();
    datesBlock.innerHTML = markup;
}

async function getDates() {
    console.log(searchDate);
  const myDates = await calendarDates.getDates(searchDate);
    console.log(myDates);
    calendarMarkup(myDates);
};

function onCalendar(event) {
  const parent = event.currentTarget.parentNode;
  parent.classList.toggle('calendar-active');
  document.addEventListener('click', onClickOutside);
}

function onClickOutside(event) {
  if (!calendarFrame.contains(event.target) & !calendarModal.contains(event.target)) {
    const parent = calendarFrame.parentNode;
    parent.classList.remove('calendar-active');
    document.removeEventListener('click', onClickOutside);
  }
};

function findSpecDay(day) {
    const elements = document.querySelectorAll('.calendar-modal-day-item');
    for (let element of elements) {
        if (element.textContent === `${day}`) {
            return element;
        }
    }
    return null;
};

function updateDate(day, month, year) {
    searchDay = day;
    searchMonth = month;
    searchYear = year;
    searchDate = new Date(searchYear, searchMonth, searchDay);
    dateString = `${searchYear}${(searchMonth + 1).toString().padStart(2, '0')}${searchDay.toString().padStart(2, '0')}`;
};

function handleDateClick(element) {
    const isPrevMonth = element.classList.contains('calendar-modal-day-prev');
    const isNextMonth = element.classList.contains('calendar-modal-day-next');
    const selectedDay = Number(element.textContent);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    let monthOffset = 0;
    if (isPrevMonth) monthOffset = -1;
    if (isNextMonth) monthOffset = 1;

    let targetYear = searchYear;
    let targetMonth = searchMonth + monthOffset;
    let targetDay = selectedDay;

    if (targetMonth < 0) {
        targetYear--;
        targetMonth = 11;
    } else if (targetMonth > 11) {
        targetYear++;
        targetMonth = 0;
    }

    if (
        targetYear < currentYear ||
        (targetYear === currentYear && targetMonth < currentMonth) ||
        (targetYear === currentYear && targetMonth === currentMonth && targetDay <= currentDay)
    ) {
        updateDate(targetDay, targetMonth, targetYear);
    } else {
        updateDate(currentDay, currentMonth, currentYear);
    }

    let newElement = element;

    if (!element.classList.contains('calendar-modal-day-curr')) {
        const prevDay = document.querySelector('.calendar-modal-day-curr');
        prevDay.classList.remove('calendar-modal-day-curr');
        if (monthOffset === 0 && targetDay < currentDay) {
            element.classList.add('calendar-modal-day-curr');
        } else if (monthOffset === 0 || (monthOffset === 1 && searchMonth < targetMonth)) {
            newElement = findSpecDay(searchDay);
            newElement.classList.add('calendar-modal-day-curr');
        } else {
            getDates();
            console.log(searchDay);
            newElement = findSpecDay(searchDay);
            console.log(newElement);
            newElement.classList.add('calendar-modal-day-curr');
        };
        updateMarkupDates();
        calendarFrame.parentNode.classList.remove('calendar-active');
    }
};

function getDaysInMonth(month, year) {
  const date = new Date(year, month, 0);
  return date.getDate();
};

function addMonth() { 
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    if (searchMonth === currentMonth && searchYear === currentDate.getFullYear()) {
        return;
    } else {
        let targetYear = searchYear;
        let targetMonth = searchMonth + 1;
        if (targetMonth > 11) {
            targetYear++;
            targetMonth = 0;
        };
        let targetDay = getDaysInMonth(targetMonth, targetYear);
        if (targetDay > currentDay) {
            targetDay = currentDay;
        } else if (targetDay > searchDay) {
            targetDay = searchDay;
        }
        updateDate(targetDay, targetMonth, targetYear);
        getDates();
    }
};

function decMonth() { 
    let targetYear = searchYear;
    let targetMonth = searchMonth - 1;
    if (targetMonth < 0) {
        targetYear--;
        targetMonth = 11;
    };
    let targetDay = getDaysInMonth(targetMonth, targetYear);
    if (targetDay > searchDay) {
        targetDay = searchDay;
    }
    updateDate(targetDay, targetMonth, targetYear);
    getDates();
};

function addYear() { 
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    if (searchYear >= currentYear) {
        return;
    } else {
        let targetYear = searchYear + 1;
        let targetMonth = searchMonth;
        let targetDay = searchDay;
        if (targetYear === currentYear) { 
            if (targetMonth >= currentMonth) {
                targetMonth = currentMonth;
                targetDay = Math.min(targetDay, currentDate.getDate());
            }
        } else {
            targetDay = Math.min(targetDay, getDaysInMonth(targetMonth, targetYear));
        };
        updateDate(targetDay, targetMonth, targetYear);
        getDates();
    }
};

function decYear() { 
    let targetYear = searchYear - 1;
    let targetMonth = searchMonth;
    let targetDay = Math.min(searchDay, getDaysInMonth(targetMonth, targetYear));
    updateDate(targetDay, targetMonth, targetYear);
    getDates();
};

function onCalendarChange(event) {
    if (event.target.classList.contains('calendar-modal-day-item')) {
        handleDateClick(event.target);
    } else if (event.target.classList.contains('calendar-month-prev')) {
        decMonth();
    } else if (event.target.classList.contains('calendar-month-next')) {
        addMonth();
    } else if (event.target.classList.contains('calendar-year-prev')) {
        decYear();
    } else if (event.target.classList.contains('calendar-year-next')) {
        addYear();
    }
};

calendarFrame.addEventListener('click', onCalendar);
calendarModal.addEventListener('click', onCalendarChange);


getDates();
export default dateString;