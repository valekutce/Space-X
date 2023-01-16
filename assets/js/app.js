
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
            if (document.documentElement.clientWidth <= 768) {
                headerWrap.classList.remove('header_wrap_active');
                backdrop.classList.remove('backdrop_active');
                burg.style.display = 'block';
            }
        });
    });

    window.addEventListener('scroll', function() {
        if (this.scrollY > 1) {
            let headerHeight = header.offsetHeight;
            console.log(headerHeight);
            header.classList.add('header_active');
            fixedBlock.style.height = headerHeight + "px";
        } else {
            header.classList.remove('header_active');
            fixedBlock.style.height = "0px";
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
    
