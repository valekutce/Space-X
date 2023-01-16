
    let header = document.querySelector('header'),
    fixedBlock = document.querySelector('.fixed-block'),
    headerWrap = document.querySelector('.header_wrap'),
    burg = document.querySelector('.burg'),
    clockMenu = document.querySelector('.clock-menu');
    backdrop = document.querySelector('.backdrop'),
    mobileLinks = document.querySelectorAll('.header_nav ul.nav-items li.menu-item a');

    window.addEventListener('load', ()=> {
        setTimeout(()=> {
            backdrop.classList.remove('backdrop_active'); 
            backdrop.classList.remove('backdrop_start');
        }, 6800);
    });

    mobileLinks.forEach(mobileLink => {
        mobileLink.addEventListener('click', () => {
            headerWrap.classList.remove('header_wrap_active');
            backdrop.classList.remove('backdrop_active');
            burg.style.display = 'block';
        });
    });

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
        burg.style.display = 'none';
    });

    clockMenu.addEventListener('click', () => {
        headerWrap.classList.remove('header_wrap_active');
        backdrop.classList.remove('backdrop_active');
        burg.style.display = 'block';
    });


    // backdrop.addEventListener('click', () => {
    //     backdrop.classList.remove('backdrop_active');
    //     headerWrap.classList.remove('header_wrap_active');
    //     burg.style.display = 'block';
    // });
    
