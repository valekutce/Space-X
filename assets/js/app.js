
    let header = document.querySelector('header'),
    fixedBlock = document.querySelector('.fixed-block'),
    headerWrap = document.querySelector('.header_wrap'),
    burg = document.querySelector('.burg'),
    clockMenu = document.querySelector('.clock-menu');
    backdrop = document.querySelector('.backdrop');

    window.addEventListener('scroll', function() {
        if (this.scrollY > 1) {
            header.classList.add('header_active');
            fixedBlock.style.display = "block";
        } else {
            header.classList.remove('header_active');
            fixedBlock.style.display = "none";
        }
    });

    burg.addEventListener('click', () => {
        headerWrap.classList.add('header_wrap_active');
        backdrop.classList.add('backdrop_active');
    });

    clockMenu.addEventListener('click', () => {
        headerWrap.classList.remove('header_wrap_active');
        backdrop.classList.remove('backdrop_active');
    });
