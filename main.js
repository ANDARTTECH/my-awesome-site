document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.getElementById('theme-toggle');
    toggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark');
    });
});
