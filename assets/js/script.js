const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('form');
    const font_color = document.querySelectorAll('.font-color');

    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        form.classList.add('dark');
        
        font_color.forEach(element => {
            element.classList.add('dark-font');
        });

    } else {
        mode.classList.add('fa-moon');
        mode.classList.remove('fa-sun');
        form.classList.remove('dark');

        font_color.forEach(element => {
            element.classList.remove('dark-font');
        });
    }
});