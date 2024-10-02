document.addEventListener('DOMContentLoaded', function() {
    const images = [
        {
            src: "https://images4.alphacoders.com/104/1045939.jpg",
            location: "Helsinki",
            flightDuration: "15 jam dari Jakarta"
        },
        {
            src: "https://c4.wallpaperflare.com/wallpaper/100/556/883/northern-lights-kakslauttanen-arctic-resort-saariselka-finland-wallpaper-preview.jpg",
            location: "Lapland",
            flightDuration: "15 jam dari Jakarta"
        },
        {
            src: "https://images8.alphacoders.com/122/1224251.jpg",
            location: "Porvoo",
            flightDuration: "15 jam dari Jakarta"
        },
        {
            src: "https://c4.wallpaperflare.com/wallpaper/70/823/660/nature-landscape-finland-aurorae-wallpaper-preview.jpg",
            location: "Koli National Park",
            flightDuration: "15 jam dari Jakarta"
        }
    ];

    let currentIndex = 0;

    const imageElement = document.getElementById('finlandImage');
    const indicators = document.querySelectorAll('.indicator');
    const flightInfo = document.querySelector('.flight-info');

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex].src;

        // Update flight information
        flightInfo.innerHTML = `<p><strong>Location:</strong> ${images[currentIndex].location}</p>
                                <p><strong>Flight Duration:</strong> ${images[currentIndex].flightDuration}</p>`;

        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });

        console.log(`Image changed to: ${images[currentIndex].src}`); 
    }

    setInterval(changeImage, 3000);
});
