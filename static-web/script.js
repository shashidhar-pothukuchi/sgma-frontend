// script.js
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    
    // Handle search input events
    searchInput.addEventListener('input', function () {
        const searchValue = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
            if (cardTitle.includes(searchValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

function filterFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('dropdownMenuButton');
    filter = input.value.toUpperCase();
    ul = document.getElementById('myUL');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}

function setinputfield(value){
    document.getElementById('dropdownMenuButton').value = value;
}
