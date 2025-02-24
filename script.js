function calculateAge() {
    let birthYear = parseInt(document.getElementById("year").value);
    let birthMonth = parseInt(document.getElementById("month").value);
    let birthDay = parseInt(document.getElementById("day").value);

    // Get current date
    let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1; // Months are zero-based
    let currentDay = today.getDate();

    // Calculate age
    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    let days = currentDay - birthDay;

    // Adjust for negative values
    if (days < 0) {
        months -= 1;
        let prevMonthDays = new Date(currentYear, currentMonth - 1, 0).getDate();
        days += prevMonthDays;
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    // Display results separately
    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
}