console.log("رزومه من آماده است!");
const themeToggle = document.getElementById("theme-toggle");

// بررسی وضعیت تم از localStorage (اگر قبلاً انتخاب شده)
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = 'حالت روشن';
}

// افزودن رویداد کلیک
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    // ذخیره انتخاب کاربر در localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = 'حالت روشن';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = 'حالت تاریک';
    }
});