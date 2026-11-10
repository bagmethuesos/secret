// ---------- Переключатель темы ----------
const themeButton = document.getElementById("theme-button");

// Функция: ставит надпись на кнопку в зависимости от текущей темы
function updateButtonText() {
    if (document.body.classList.contains("light")) {
        themeButton.textContent = "злой я";
    } else {
        themeButton.textContent = "добрый я";
    }
}

// При открытии страницы: вспоминаем тему, которую выбрали раньше
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
}

// Кнопка есть на странице? Тогда настраиваем её
if (themeButton) {
    updateButtonText();

    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }

        updateButtonText();
    });
}

// ---------- Кнопка "Click here to see my works" ----------
const worksButton = document.getElementById("works-button");

if (worksButton) {
    worksButton.addEventListener("click", function () {
        console.log("Going to works!");
    });
}

const footerText = document.getElementById("footer-text");

if (footerText) {
    footerText.addEventListener("click", function () {
        console.log("Footer clicked");
    });
}