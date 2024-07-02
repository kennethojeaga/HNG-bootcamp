document.addEventListener("DOMContentLoaded", function() {
    // Update current time in UTC
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().slice(-12, -4);
        document.getElementById('currentTimeUTC').textContent = utcTime;
    }

    // Update current day of the week
    function updateDay() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const now = new Date();
        const currentDay = days[now.getUTCDay()];
        document.getElementById('currentDay').textContent = currentDay;
    }

    // Initial update
    updateTime();
    updateDay();

    // Update time every second
    setInterval(updateTime, 1000);
});