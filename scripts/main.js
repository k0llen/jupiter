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

    
    //burger
    const burgerBtn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const body = document.querySelector('.body');
    burgerBtn.addEventListener('click', ()=>{
        header.classList.toggle('burger--active');
        body.classList.toggle('lock');
    })
    const navButtons = document.querySelectorAll('.header__nav-link');
    navButtons.forEach(item =>{
        item.addEventListener('click', () =>{
            if (header.classList.contains('burger--active')){
                header.classList.remove('burger--active');
                body.classList.remove('lock');
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
    //technical section accordeon
    const accordeonItems = document.querySelectorAll('.technical-card');
    
    accordeonItems.forEach((item) => {
        const trigger = item.querySelector('.accordeon-trigger');
        const content = item.querySelector('.accordeon-hidden');

        trigger.addEventListener('click', () => {
            if(item.classList.contains('opened')) {
                item.classList.remove('opened');
                content.style.maxHeight = '0';
            } else {
                accordeonItems.forEach((wrapper) =>{
                    const contentChild = wrapper.querySelector('.accordeon-hidden');
                    wrapper.classList.remove('opened');
                    contentChild.style.maxHeight = '0';
                })
                item.classList.toggle('opened');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        })
    })
}