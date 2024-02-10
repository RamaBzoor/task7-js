const tasbeehItems = document.querySelectorAll('.tasbeeh');

tasbeehItems.forEach((item, index) => {
    let count = 0;
    const countDisplay = item.querySelector('.count');

    item.querySelector('.plus').addEventListener('click', () => {
        count++;
        countDisplay.textContent = count;
    });
});
