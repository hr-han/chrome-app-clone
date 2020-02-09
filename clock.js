const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const hours = getLpadStr(date.getHours());
    const minutes = getLpadStr(date.getMinutes());
    const seconds = getLpadStr(date.getSeconds());
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function getLpadStr(str) {
    return `${str < 10 ? `0${str}` : str }`
}

function init() {
    getTime();
    setInterval(getTime, 1000)
}
init();

// You're gonna need this
// const NINE_HOURS_MILLISECONDS = 32400000;

// const clockContainer = document.querySelector(".js-clock"),
//     clockText = clockContainer.querySelector("h1");

// function getTime() {
//     // Don't delete this.
//     const xmasDay = new Date("2020-12-24:00:00:00+0900");
//     const toDay = new Date();
//     const daysLeft = new Date(
//         xmasDay.getTime() - (toDay.getTime() + NINE_HOURS_MILLISECONDS)
//     );
//     clockText.innerText = daysLeft.setClockFmt();
// }

// function lpad(str) {
//     return `${str < 10 ? `0${str}` : str}`;
// }

// function init() {
//     Date.prototype.setClockFmt = function () {
//         const days = Math.floor(this.getTime() / (24 * 60 * 60 * 1000));
//         const hh = lpad(this.getHours());
//         const mm = lpad(this.getMinutes());
//         const ss = lpad(this.getSeconds());

//         return `${days}d ${hh}h ${mm}m ${ss}s`;
//     };
//     getTime();
//     setInterval(getTime, 1000);
// }
// init();