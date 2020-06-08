

const slider = document.querySelector('.switch__slider');
slider.addEventListener ('click', () => {
    if (slider.value === '1') {
        document.documentElement.style.setProperty('--background-color', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--text-color', 'rgb(250, 233, 233');
        document.documentElement.style.setProperty(' --slider-color', 'rgb(0, 0, 0)');
    } else if (slider.value === '0') {
        document.documentElement.style.setProperty('--background-color', 'rgb(250, 233, 233');
        document.documentElement.style.setProperty('--text-color', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty(' --slider-color', 'rgb(250, 233, 233)');
    }
})

