let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    // Pindahkan item pertama ke akhir
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    // Pindahkan item terakhir ke depan
    document.querySelector('.slide').prepend(items[items.length - 1]);
});
