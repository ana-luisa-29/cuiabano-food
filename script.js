$(document).ready(function(){
    $('mobile_btn').on('click', function(){
        $('"mobile_menu').toggleclass('active');
        $('mobile_menu').find('i').toggleclass('fa-x')
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scrool', function(){
        const header = $('header');
        const scroolPosition = $(window).scrolltop() - header.outerheight();
        let activeSectionIndex = 0;

        if(scroolPosition <=0){
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba (0, 0, 0.1)');
        }
        sections.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop = section.outerheight();

            if(scroolPosition >= sectionTop && scroolPosition < sectionBottom) {
                activeSectionIndex = í;
                return false;
            }
    });
    navItems.removeClass('active');
    $(navItems[activeSectionIndex]).addClass('active');
});
    // animação
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })

        ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })

        ScrollReveal().reveal('#testimonial_dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })
        ScrollReveal().reveal('#feedbacks', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    })
});