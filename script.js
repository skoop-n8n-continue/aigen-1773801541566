// Get correct ordinal suffix like "st", "nd", "rd", "th"
function getOrdinalSuffix(i) {
    const j = i % 10,
          k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

// Function to update the date and time strings
function updateClock() {
    const now = new Date();

    // 1. Format the Date String (e.g., "March 17th, 2026")
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    const dateString = `${month} ${getOrdinalSuffix(date)}, ${year}`;

    // 2. Format the Time String (e.g., "1:34:53 PM")
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // Handle the midnight hour '0' to be '12'

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    // 3. Update the DOM elements
    document.getElementById('date').textContent = dateString;
    document.getElementById('time').textContent = timeString;
}

// Ensure the clock displays immediately on load before interval triggers
updateClock();

// Start interval to update every second
setInterval(updateClock, 1000);
