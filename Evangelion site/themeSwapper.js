const themeButtons = document.querySelectorAll('button');

themeButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        const newTheme = this.getAttribute('class');
        document.body.classList.forEach(className => {
            if (className.endsWith('-theme')) {
                document.body.classList.remove(className);
            }
        });
        console.log("Settings theme as " + btn.innerText)
        document.getElementById("title").innerText = "Mode : " + btn.innerText
        document.body.classList.add(newTheme);
    });
});