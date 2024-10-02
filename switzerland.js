document.addEventListener('DOMContentLoaded', function() {
    const images = [
        {
            src: "https://media.istockphoto.com/id/467335200/id/foto/pemandangan-udara-di-lembah-zermatt-dan-puncak-matterhorn-saat-fajar.jpg?s=612x612&w=0&k=20&c=bVXa_a4B1QTY9IM6czt2Qj_KSRqIBSknNgFETC6AdtE=",
            location: "Swiss Alps",
            flightDuration: "12 jam dari Jakarta"
        },
        {
            src: "https://wallpapercave.com/wp/wp2777161.jpg",
            location: "Lake Geneva",
            flightDuration: "12 jam dari Jakarta"
        },
        {
            src: "https://w0.peakpx.com/wallpaper/147/494/HD-wallpaper-switzerland-ultra-swiss.jpg",
            location: "Grindelwald",
            flightDuration: "12 jam dari Jakarta"
        },
        {
            src: "https://w0.peakpx.com/wallpaper/329/1004/HD-wallpaper-switzerland-swiss-alps-mountain-lake-summer-mountains-europe-alps.jpg",
            location: "Lauterbrunnen",
            flightDuration: "12 jam dari Jakarta"
        }
    ];

    let currentIndex = 0;

    const imageElement = document.getElementById('swissImage');
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
