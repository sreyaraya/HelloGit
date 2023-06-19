const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    console.log('hi')
    document.body.style.background = "#000000";
    btn.classList.add('show');
    btn.innerText = 'Hello Git!'
})
//
