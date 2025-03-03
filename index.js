function updateYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').innerText = currentYear;
}

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('current-time').innerText = currentTime;
}

updateYear();
updateTime();

setInterval(updateTime, 1000);