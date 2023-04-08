/*- phone-input -*/
[].forEach.call(document.querySelectorAll('input[type="tel"]'), function (input) {
    let keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            newValue = matrix.replace(/[_\d]/g, function (a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
            });
        i = newValue.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            newValue = newValue.slice(0, i);
        }
        let reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function (a) {
                return "\\d{1," + a.length + "}";
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = newValue;
        if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
});

/*- tabs -*/
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

/*- tabs__slider -*/
var swiper = new Swiper('.tabs__slider .swiper', {
    autoHeight: true,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.letters__slider .swiper-button-next, .tabs__btn',
        prevEl: '.letters__slider .swiper-button-prev',
    },
});

/*- reviews-slider -*/
var swiper = new Swiper('.reviews-slider .swiper', {
    autoHeight: true,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.letters__slider .swiper-button-next, .tabs__btn',
        prevEl: '.letters__slider .swiper-button-prev',
    },
});

/*- accordion -*/
const accordionContent = document.querySelectorAll('.accordion__content');
const accordion = document.querySelectorAll('.accordion__top-panel');

accordion.forEach((element) => {
    element.addEventListener('click', () => {
        element.classList.toggle('active');
        let panel = element.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
});

/*- letters__slider -*/
var swiper = new Swiper('.letters__slider .swiper', {
    autoHeight: true,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.letters__slider .swiper-button-next, .letters__btn',
        prevEl: '.letters__slider .swiper-button-prev',
    },
});

/*- modal -*/
const myModal = new HystModal({
    closeOnEsc: true,
    backscroll: true,
    afterClose: function(modal){
        let videoframe = modal.openedWindow.querySelector('iframe');
        if(videoframe){
            videoframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        }
    },        
});

/*- Карта YANDEX-map -*/
if (document.getElementById('map')) {
    ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.688110704443865,52.358245962982046],
        //center: [55.68814706904127,52.355692499999904],
        zoom: 17,
        controls: [],
    }, {
        suppressMapOpenBlock: true
    }),
    destinations = {
        'Офис': [55.68814706904127,52.355692499999904]
    },
    myPlacemark = new ymaps.Placemark(destinations['Офис'], {
        hintContent: 'Казанский проспект, 215/1',
        balloonContent: 'г. Набережные Челны, Казанский проспект, 215/1, офис 201'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/bg/map.svg',
        // Размеры метки.
        iconImageSize: [60, 68],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-10, -80]
    })
    myMap.geoObjects
        .add(myPlacemark)
    myMap.behaviors.disable('scrollZoom');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        myMap.behaviors.disable('drag');
    }
  });
}

/*- Карта YANDEX-map -*/
if (document.getElementById('map-2')) {
    ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.688110704443865,52.358245962982046],
        //center: [55.68814706904127,52.355692499999904],
        zoom: 17,
        controls: [],
    }, {
        suppressMapOpenBlock: true
    }),
    destinations = {
        'Офис': [55.68814706904127,52.355692499999904]
    },
    myPlacemark = new ymaps.Placemark(destinations['Офис'], {
        hintContent: 'Казанский проспект, 215/1',
        balloonContent: 'г. Набережные Челны, Казанский проспект, 215/1, офис 201'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/bg/map.svg',
        // Размеры метки.
        iconImageSize: [60, 68],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-10, -80]
    })
    myMap.geoObjects
        .add(myPlacemark)
    myMap.behaviors.disable('scrollZoom');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        myMap.behaviors.disable('drag');
    }
  });
}   