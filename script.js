(function main() {
    var checkbox = document.querySelector('#checkbox'),
    labelcontent = document.querySelector('#label');

    checkbox.checked = false;
    checkbox.addEventListener('click', e => {
        if (e.target.checked) {
            document.body.classList.add('dark', 'dark-content');
            labelcontent.innerHTML = 'Dark mode';
        }
        else {
            document.body.classList.remove('dark', 'dark-content')
            labelcontent.innerHTML = 'Light mode';
        }
    })
})();