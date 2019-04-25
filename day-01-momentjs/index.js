// Current time/date
function updateNowElements() {
    const dateNowElement = document.querySelector("#now-date");
    const momentNowElement = document.querySelector("#now-moment");

    dateNowElement.innerHTML = new Date()
    momentNowElement.innerHTML = moment();
}

setInterval(
    updateNowElements,
    1000,
)

// Get UNIX timestamp from object
function updateUnixElements() {
    const dateUnixElement = document.querySelector("#unix-date");
    const momentUnixElement = document.querySelector("#unix-moment");
    const momentUnixValueOfElement = document.querySelector("#unix-moment-value-of");

    dateUnixElement.innerHTML = Date.now();
    momentUnixElement.innerHTML = moment().unix();
    momentUnixValueOfElement.innerHTML = new moment().valueOf();
}

setInterval(
    updateUnixElements,
    1000,
)

// Parsing a timestamp
const timestamp = '737424000';
const dateParseTimestampElement = document.querySelector("#parse-timestamp-date");
const momentParseTimestampElement = document.querySelector("#parse-timestamp-moment");

dateParseTimestampElement.innerHTML = new Date(parseInt(timestamp) * 1000);
momentParseTimestampElement.innerHTML = moment.unix(timestamp);



// Date
// https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript