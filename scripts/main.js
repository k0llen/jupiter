window.onload = () => {
    //anchors
    const anchors = document.querySelectorAll('a[href*="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            if (anchor.getAttribute('href') !== '#!') {
                const blockID = anchor.getAttribute('href');
                document.querySelector('' + blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        })
    })

    //video
    const videoStart = document.querySelector('.fake-start-btn');
    const videoSection = document.querySelector('.look');
    const videoWrapper = document.querySelector('.look-video-video');

    videoStart.addEventListener('click', () => {
        if (!videoSection.classList.contains('ready')) {
            videoWrapper.insertAdjacentHTML('beforeend', '<iframe src="https://www.youtube.com/embed/ueAaUQ7lBDM?si=7JfAKivSezP83jQ9&amp;controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
            videoSection.classList.add('ready');

        }
    })
}