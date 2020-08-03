(function ($) {
//activateHeader();
    $(document).ready(function () {
        new WOW().init();
        disableLoad();
        //activateSnow();

        pasteUTM();
        activateBanner();

        $(window).resize(function () {
            activateHeader();

        });
        activateHeader();
        activatePopup();
        activateTeh(true);
        activateSlide();
        activateScrollTo();
        //  activateFormSubmit();
        activateSlider();

        // activate Phone Mask
        $("input[type=tel]").mask("+7 (999) 999-9999");
        $('.toggle-ext').on('click', '.krowlp', function () {
            $(this).toggleClass('op');
            $(this).siblings('.krowl').slideToggle("slow");

        });
        $('.proj_foto').fotorama().data('fotorama');
        $('p#logo').on('click', function (e) {
            e.preventDefault();
            document.location.href = 'http://norlaft.ru';
        });

        $('.hpin').on('click', function () {
            var dataPin = $(this).data('pin'),
                titleBox = $('#' + dataPin).find('.pc-title'),
                textBox = $('#' + dataPin).find('.pc-text'),
                imgBox = $('#' + dataPin).find('.pc-img');

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('#' + dataPin).fadeOut(670);
                $('.house-pins').find('.default-pin').delay(670).fadeIn(200);
            } else {
                $('.hpin').removeClass('active');
                $('.house-pins').find('.pin-content').hide();
                clearText(titleBox);
                clearText(textBox);
                clearText(imgBox);
                $(this).addClass('active');
                $('.house-pins').find('.default-pin').hide();
                $('#' + dataPin).show();
                animateText(titleBox, 0);
                animateText(textBox, 100);
                animateText(imgBox, 230);

            }
        });

        $('.tpin').on('click', function () {
            var dataPin = $(this).data('pin'),
                titleBox = $('#' + dataPin).find('.pc-title'),
                textBox = $('#' + dataPin).find('.pc-text'),
                imgBox = $('#' + dataPin).find('.pc-img');

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('#' + dataPin).fadeOut(670);
                $('.tech-pins').find('.tech-default').delay(670).fadeIn(200);
            } else {
                $('.tpin').removeClass('active');
                $('.tech-pins').find('.pin-content').hide();
                clearText(titleBox);
                clearText(textBox);
                clearText(imgBox);
                $(this).addClass('active');
                $('.tech-pins').find('.tech-default').hide();
                $('#' + dataPin).show();
                animateText(titleBox, 0);
                animateText(textBox, 100);
                animateText(imgBox, 230);

            }
        });

    });

    function animateText(elem, d) {
        $(elem).delay(d).animate({
            'opacity': 1,
            'margin-top': '0px'
        }, 470);
    }

    function clearText(elem) {
        $(elem).css({
            'opacity': 0,
            'margin-top': '60px'
        });
    }

    function disableLoad() {
        var d = document.getElementById('load');
        d.style.display = 'none';
    }

    function activateHeader() {
        var top = $('.header_top').height();
        $window = $(window).height();

        if (document.location.pathname == "/hram") {
            main = $window;
        } else {
            main = $window - top;
        }

        if (main <= 350) {
            main = 350
        } else {
            $('#fotorama').fotorama({height: main}).data('fotorama')
        }
        ;

        if (document.location.pathname == "/hram") {

            var ph = $('.pre_head').height() / 2;
            gh = ($window / 2) - ph;
            $('.pre_head').css('padding-top', gh)
        }

    }

    function activateFriday() {
        var style = '.friday h2,.friday h3{font-family:Arch;margin-top:0;font-weight:400;text-transform:uppercase}.friday .friday_f,.friday .friday_f small,.friday h2,.friday h3{text-transform:uppercase}.friday .friday_f,.friday .friday_f small,.friday .friday_s,.friday h2,.friday h3{color:#fff;text-align:center}.friday,.friday .friday_f,.friday .friday_s,.friday h2,.friday h3{text-align:center}.friday{display:block;width:350px;height:500px;background:#000;padding:20px}.friday h3{font-size:68px;border-top:5px solid #ffa12a;border-bottom:5px solid #ffa12a}.friday .friday_f{font-size:45px;line-height:38px}.friday .friday_f small{font-size:30px;line-height:30px}.friday h2{font-size:140px;line-height:140px}.friday .friday_s{font-size:24px;font-weight:700}';
        var d = document.getElementsByTagName('head')[0],
            s = document.createElement('style');
        s.innerHTML = style;
        d.appendChild(s);

        var date = new Date();
        switch (true) {
            case (date.getDay() == 4):
            case (date.getDay() == 5):
                if (!sessionStorage) return
                if (sessionStorage.hasOwnProperty('friday') == false) {
                    var tmp_fri = '<div class="friday" ><h3>Черная Пятница</h3><p class="friday_f">Распродажа <small>зимнего леса</small></p><h2>-5%</h2><a href="#modal" class="btn btn-primary btn-phone call btn-big" data-title="Заказать обратный звонок" data-tag="ЧернаяПятница обр звонок">Узнать подробнее</a></div>';
                    $.fancybox.open(tmp_fri, {
                        autoWidth: true,
                        scrolling: 'no',
                        fitToView: false,
                        padding: 0
                    });
                    sessionStorage.setItem('friday', 'true');
                }
                break;
        }


    }

    function activateSnow() {
        var text = document.createElement('div'),
            b = document.getElementsByTagName('body')[0];
        text.id = 'particles-js';
        text.style.position = 'fixed';
        text.style.width = '100%';
        text.style.height = '100%';
        text.style.top = '0';
        text.style.left = '0';
        text.style.zIndex = '1';
        b.append(text);
        particlesJS.load('particles-js', 'assets/particles.json', function () {

        });
    }


    function pasteUTM() {
        var url = document.location.search;
        if (url != '') {

            var temp = new Array(), temp2 = new Array(), result = new Array();

            temp = (url.substr(1)).split('&');

            for (var i = 0; i < temp.length; i++) {
                temp2 = temp[i].split('=');
                result[temp2[0]] = temp2[1];
            }
            ;

            mark = result["utm_campaign"];
            var $fotoramaDiv1 = $('#fotorama').fotorama();
            var fotorama1 = $fotoramaDiv1.data('fotorama');
            if (mark == 'shale') {
                fotorama1.show(1);
            }
        }
        ;
    }

    function activateSlide() {
        var newSelection = "";
        var select = $('#flavor-nav a.current').attr("rel");
        $(".flavor").not("." + select).slideUp();
        $("#flavor-nav a").click(function () {
            $("#all-flavors").fadeTo(200, 0.10);
            $("#flavor-nav a").removeClass("current");
            $(this).addClass("current");
            newSelection = $(this).attr("rel");
            $(".flavor").not("." + newSelection).fadeOut();
            $("." + newSelection).fadeIn();
            $("#all-flavors").fadeTo(600, 1);
        });
    }


    function activateBanner() {
        var element = $('.banner');
        $(window).scroll(function () {
            element['fade' + ($(this).scrollTop() > 70 ? 'In' : 'Out')](500);
        });
    };
    function activateBanner2() {
        var element = $('.banner2');
        $(window).scroll(function () {
            element['fade' + ($(this).scrollTop() > 50 ? 'In' : 'Out')](500);
        });
    };


    function activatePopup() {
        $('.call').fancybox({
            width: '95%',
            maxWidth: 300,
            maxHeight: 520,
            autoWidth: true,
            scrolling: 'no',
            fitToView: false,
            padding: 10,
            helpers: {
                overlay: {
                    locked: false // отключаем блокировку overlay
                }
            },
            beforeShow: function () {
                var title = $(this.element).data('title');
                var tag = $(this.element).data('tag');
                if (title) {
                    $('#modal form').find('legend').text(title);
                    $('#modal1 form').find('legend').text(title);
                }

                $('#modal form').data('form', tag);

            }
        });

        $('.block2_btn').click(function () {
            $('.spec_form').slideDown(1000);
        });

        $('.fancybox').fancybox({
            margin: 50,
            helpers: {
                overlay: {
                    locked: false // отключаем блокировку overlay
                }
            },
        });
        $(".youtube").fancybox({
            maxWidth: 560,
            maxHeight: 315,
            'transitionIn': 'none',
            'transitionOut': 'none',
            width: '90%',
            height: '90%',
            autoSize: false,
            closeClick: false,
            openEffect: 'none',
            closeEffect: 'none',
            type: 'iframe',
            helpers: {
                media: {},
                overlay: {
                    locked: false // отключаем блокировку overlay
                }
            }
        });
        function findt(dom) {
            switch (dom) {
                case 'proj1':
                    count = 3,
                        text = '- Сухой норвежский брус 180х280 мм из отборной сосны.',
                        price = '2 500 000',
                        number = 1;
                    break;
                case 'proj2':
                    count = 2,
                        text = '- Сухой норвежский брус 180х280 мм из отборной сосны.',
                        price = '1 500 000',
                        number = 2;
                    break;
                case 'proj3':
                    count = 3,
                        text = '- Сухой норвежский брус 180х280 мм из отборной сосны.',
                        price = '3 000 000',
                        number = 3;
                    break;
                case 'proj4':
                    count = 4,
                        text = '- Сухой норвежский брус 180х280 мм из отборной сосны.',
                        price = '2 000 000',
                        number = 4;
                    break;
                case 'proj5':
                    count = 4,
                        text = '- Сухой норвежский брус 180х280 мм из отборной сосны.',
                        price = '2 000 000',
                        number = 5;
                    break;
                case 'proj6':
                    count = 4,
                        text = '- Сухой норвежский брус 180х280 мм из отборной сосны.',
                        price = '2 000 000',
                        number = 6;
                    break;
                case 'proj7':
                    count = 3,
                        text = '- Сухой норвежский брус 180х280 мм из отборной сосны.',
                        price = '2 000 000',
                        number = 7;
                    break;
                case 'proj8':
                    count = 4,
                        text = '- Сухой норвежский брус 180х280 мм из отборной сосны.',
                        price = '2 000 000',
                        number = 8;
                    break;
                case 'proj9':
                    count = 4,
                        text = 'Первый этаж: газобетонный блок “YTONG”<br/>Второй этаж: сухой норвежский брус 180х280 мм из отборной сосны',
                        price = '2 000 000',
                        number = 9;
                    break;
                case 'proj10':
                    count = 4,
                        text = 'Первый этаж: газобетонный блок “YTONG”<br/>Второй этаж: сухой норвежский брус 180х280 мм из отборной сосны',
                        price = '2 000 000',
                        number = 10;
                    break;
                case 'proj11':
                    count = 4,
                        text = 'Первый этаж: газобетонный блок “YTONG”<br/>Второй этаж: сухой норвежский брус 180х280 мм из отборной сосны',
                        price = '2 000 000',
                        number = 11;
                    break;
                case 'proj12':
                    count = 4,
                        text = '- Сухой норвежский брус 180х280 мм из отборной сосны.',
                        price = '2 000 000',
                        number = 12;
                    break;
                case 'proj13':
                    count = 4,
                        text = '- Сухой норвежский брус 180х280 мм из отборной сосны.',
                        price = '2 000 000',
                        number = 13;
                    break;
                case 'proj14':
                    count = 4,
                        text = '- Сухой норвежский брус 180х280 мм из отборной сосны.',
                        price = '2 000 000',
                        number = 14;
                    break;
                case 'proj15':
                        count = 4,
                        text = '- Сухой норвежский брус 180х280 мм из отборной сосны.',
                        price = '2 000 000',
                        number = 15;
                    break;
                case 'proj16':
                        count = 4,
                        text = '- Сухой норвежский брус 180х280 мм из отборной сосны.',
                        price = '2 000 000',
                        number = 16;
                    break;
                case 'proj17':
                        count = 3,
                        text = '- Сухой норвежский брус 180х280 мм из отборной сосны.',
                        price = '2 000 000',
                        number = 17;
                    break;
                case 'proj18':
                        count = 4,
                        text = '- Сухой норвежский брус 180х280 мм из отборной сосны.',
                        price = '2 000 000',
                        number = 18;
                    break;
                case 'proj19':
                        count = 4,
                        text = '- Сухой норвежский брус 180х280 мм из отборной сосны.',
                        price = '2 000 000',
                        number = 19;
                    break;
                case 'proj20':
                        count = 4,
                        text = '- Сухой норвежский брус 180х280 мм из отборной сосны.',
                        price = '2 000 000',
                        number = 19;
                    break;
                case 'proj21':
                        count = 4,
                        text = '- Сухой норвежский брус 180х280 мм из отборной сосны.',
                        price = '2 000 000',
                        number = 19;
                    break;                                        
            }
            return [count, text, price, number];
        }

        function thankWrap(thank) {
            switch (thank) {
                case 't1':
                    title = 'Обещаю передать Вашу заявку людям!<br/>С уважением, Компьютер';
                    break;
                case 't2':
                    title = 'Обещаю передать Вашу заявку Александру!<br/>С уважением, Компьютер';
                    break;
                case 't3':
                    title = 'Обещаю передать Вашу заявку сметчику!<br/>С уважением, Компьютер';
                    break;
                case 't4':
                    title = 'Обещаю передать Ваш вопрос Александру!<br/>С уважением, Компьютер';
                    break;

            }
            return [title];
        }

        $('.addThanks').click(function () {
            var thanks = $(this).data('thanks'),
                tN = thankWrap(thanks),
                title = tN[0];
            $('#sp').html(title);

        });

        function workt(img) {
            var jsON = {
                "real1": {"count": "14"},
                "real2": {"count": "17"},
                "real3": {"count": "36"},
                "real4": {"count": "26"},
                "real5": {"count": "28"},
                "real6": {"count": "22"},
                "real7": {"count": "29"},
                "real8": {"count": "27"},
                "real9": {"count": "17"}
            };
            var count = jsON[img].count;
            return [count];

        }

        $('.extshow').fancybox({
            width: '95%',
            autoWidth: true,
            height: 'auto',
            scrolling: 'no',
            fitToView: false,
            padding: 10,
            helpers: {
                overlay: {
                    locked: false // отключаем блокировку overlay
                }
            },
            beforeLoad: function () {

                var dom = $(this.element).data('dom');
                var dataimg = new Array();
                var domN = findt(dom);
                var count = domN[0];
                $('.intro').html(domN[1]);
                for (i = 0; i < count; i++) {
                    imgkey = i + 1;
                    dataimg[i] = {
                        img: 'assets/img/' + dom + '_' + imgkey + '.jpg',
                        thumb: 'assets/img/' + dom + '_' + imgkey + '.jpg'
                    }
                }

                foto2 = $('.beforefr').fotorama({
                    data: dataimg,
                    allowfullscreen: true

                }).data('fotorama');

                foto2.show(0);
                foto2.requestFullScreen();


            },
            beforeShow: function () {
                var tag = $(this.element).data('tag');
                $('#projpop form').data('form', tag);
            },
            afterShow: function () {
                var dom = $(this.element).data('dom');
                var dataimg = new Array();
                var domN = findt(dom);
                var count = domN[0];
                for (i = 0; i < count; i++) {
                    imgkey = i + 1;
                    dataimg[i] = {
                        img: 'assets/img/' + dom + '_' + imgkey + '.jpg',
                        thumb: 'assets/img/' + dom + '_' + imgkey + '.jpg'
                    }
                }
                foto = $('.fotopop').fotorama({
                    data: dataimg

                }).data('fotorama');
            },
            afterClose: function () {
                var foto = $('.fotopop').fotorama().data('fotorama'),
                    foto2 = $('.beforefr').fotorama().data('fotorama');
                ;
                foto.destroy();
                foto2.destroy();
            }


        });

        $('.extshow2').fancybox({
            width: '95%',
            height: 'auto',
            autoWidth: true,
            scrolling: 'no',
            fitToView: true,
            padding: 10,
            helpers: {
                overlay: {
                    locked: false // отключаем блокировку overlay
                }
            },
            beforeLoad: function () {
                var img = $(this.element).data('img');
                var domN = workt(img);
                var text = domN[1];

                $('.w_right').html(text);
                var dataimg = new Array(),
                    dimg = new Array();
                    dimg['real1'] = 14,
                    dimg['real2'] = 17,
                    dimg['real3'] = 36,
                    dimg['real4'] = 26,
                    dimg['real5'] = 28,
                    dimg['real6'] = 22,
                    dimg['real7'] = 29,
                    dimg['real8'] = 27,
                    dimg['real9'] = 17;
                var num = dimg[img];
                for (i = 0; i < num; i++) {
                    imgkey = i + 1;
                    dataimg[i] = {
                        img: 'assets/img/' + img + '_' + imgkey + '.jpg',
                        thumb: 'assets/img/' + img + '_' + imgkey + '.jpg'
                    }
                }
                foto4 = $('.beforefr').fotorama({
                    data: dataimg,
                    allowfullscreen: true

                }).data('fotorama');

                foto4.show(0);
                foto4.requestFullScreen();


            },
            beforeShow: function () {
                var tag = $(this.element).data('tag');
                $('#workend form').data('form', tag);
            },
            afterShow: function () {
                var dom = $(this.element).data('img');
                var dataimg = new Array();
                var domN = workt(dom);
                var count = domN[0];
                for (i = 0; i < count; i++) {
                    imgkey = i + 1;
                    dataimg[i] = {
                        img: 'assets/img/' + dom + '_' + imgkey + '.jpg',
                        thumb: 'assets/img/' + dom + '_' + imgkey + '.jpg'
                    }
                }
                foto = $('.fotowork').fotorama({
                    data: dataimg

                }).data('fotorama');
            },
            afterClose: function () {
                var foto3 = $('.fotowork').fotorama().data('fotorama');
                foto4.destroy();
                foto3.destroy();
            }


        });

        $(".fotopop .fotorama__active").click(function () {
            alert("sad");
        })

        $(".projshow").fancybox({
            width: '95%',
            maxWidth: 900,
            height: 'auto',
            autoWidth: true,
            scrolling: 'no',
            fitToView: false,
            padding: 10,
            helpers: {
                overlay: {
                    locked: false // отключаем блокировку overlay
                }
            },
            beforeLoad: function () {
                var dom = $(this.element).data('dom');
                var tag = $(this.element).data('tag');

                if (tag) {
                    $('#proj-form').attr('data-form', tag);
                }
                var domN = findt(dom);
                var text = domN[1];
                var price = domN[2];


                $('.projFrom').val(tag);
                $('.intro').html(text);
                $('.enter-price').html(price);
            },
            beforeShow: function () {

            },
            afterShow: function () {
                var dom = $(this.element).data('dom');
                var dataimg = new Array();
                var domN = findt(dom);
                var count = domN[0];
                for (i = 0; i < count; i++) {
                    imgkey = i + 1;
                    dataimg[i] = {
                        img: 'assets/img/' + dom + '_' + imgkey + '.jpg',
                        thumb: 'assets/img/' + dom + '_' + imgkey + '.jpg'
                    }
                }
                var foto = $('.fotopop').fotorama({
                    data: dataimg

                }).data('fotorama');
            },
            afterClose: function () {
                var foto = $('.fotopop').fotorama().data('fotorama');
                foto.destroy();
            }
        });
        $('.proj-scroll').click(function () {


            var foto = $('.fotopop').fotorama().data('fotorama');
            foto.destroy();


            var dom = $(this).data('dom');
            var tag = $(this).data('tag');

            var dataimg = new Array();

            var domN = findt(dom);
            var text = domN[1];
            var price = domN[2];
            var count = domN[0];
            var number = domN[3];

            if (tag) {
                $('#proj-form').attr('data-form', tag);
            }

            for (i = 0; i < count; i++) {
                imgkey = i + 1;
                dataimg[i] = {
                    img: 'assets/img/' + dom + '_' + imgkey + '.jpg',
                    thumb: 'assets/img/' + dom + '_' + imgkey + '.jpg'
                }
            }

            foto.load(dataimg);

            $('.projFrom').val(tag);
            $('.intro').html(text);
            $('.enter-price').html(price);


        });

        $(".workshow").fancybox({
            width: '95%',
            height: 'auto',
            autoWidth: true,
            scrolling: 'no',
            fitToView: false,
            padding: 10,
            helpers: {
                overlay: {
                    locked: false // отключаем блокировку overlay
                }
            },
            beforeLoad: function () {
                var dom = $(this.element).data('img');
                var domN = workt(dom);
                var btn = $(this.element).data('btn');
                $('.add-val').val(btn);

            },
            beforeShow: function () {
                var tag = $(this.element).data('tag');
                $('.workFrom').val(tag);
            },
            afterShow: function () {
                var dom = $(this.element).data('img');
                var dataimg = new Array();
                var domN = workt(dom);
                var count = domN[0];
                for (i = 0; i < count; i++) {
                    imgkey = i + 1;
                    dataimg[i] = {
                        img: 'assets/img/' + dom + '_' + imgkey + '.jpg',
                        thumb: 'assets/img/' + dom + '_' + imgkey + '.jpg'
                    }
                }
                var foto3 = $('.fotowork').fotorama({
                    data: dataimg

                }).data('fotorama');
            },
            afterClose: function () {
                var foto3 = $('.fotowork').fotorama().data('fotorama');
                foto3.destroy();
            }
        });


    }


    function activateScrollTo() {
        jQuery("a.scrollto").click(function () {
            elementClick = jQuery(this).attr("href")
            destination = $(elementClick).offset().top - 30;
            jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 300);
            return false;
        });
    }


    $(".mailForm").submit(function (e) {
        var submitBtn = $(this).find('.btn');
        submitBtn.attr('disabled', true)


        var url = "send.php"; // the script where you handle the form input.

        $.ajax({
            type: "POST",
            url: url,
            data: $(this).serialize(), // serializes the form's elements.
            success: function (data) {
                $.fancybox({
                    href: '#sp',
                    autoCenter: true,
                    scrolling: 'no',
                    height: 58,
                    width: 450,
                    autoSize: false,
                    padding: 10,
                    wrapCSS: 'sp-wrap',
                    helpers: {
                        overlay: {
                            locked: false // отключаем блокировку overlay
                        }
                    },
                    afterLoad: function () {
                        setTimeout(function () {
                            $.fancybox.close();
                        }, 3000); // 3000 = 3 secs
                    }
                })

                submitBtn.attr('disabled', false);
            }
        });

        e.preventDefault(); // avoid to execute the actual submit of the form.
    });


    $(document).on('submit', '#sendForm', function (e) {
        e.preventDefault();
        var thisForm = this;

        var formData = new FormData(thisForm);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", thisForm.getAttribute('action'));

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    data = xhr.responseText;
                    thisForm.reset();
                    $.fancybox({
                        href: '#sp',
                        autoCenter: true,
                        scrolling: 'no',
                        height: 58,
                        width: 450,
                        autoSize: false,
                        padding: 10,
                        wrapCSS: 'sp-wrap',
                        helpers: {
                            overlay: {
                                locked: false // отключаем блокировку overlay
                            }
                        },
                        afterLoad: function () {
                            setTimeout(function () {
                                $.fancybox.close();
                            }, 3000); // 3000 = 3 secs
                        }
                    })
                }
            }
        };

        xhr.send(formData);

    });

    function activateFormSubmit() {
        $(".mailForm").submit(function (e) {

            e.preventDefault();
            $.fancybox('<p id="wsx"></p>');
            var mark = $(this.element).data('mark');

            var $this = $(this);
            var data = $this.formToObject();
            data.site = 'smartlaft.ru';
            data.ekb = 'false';
            if (document.location.pathname == '/bani') {
                data.tags = 'Бани';
            } else {
                data.tags = 'Дома';
            }
            ;
            if (document.location.host == 'ekb.smartlaft.ru') {
                data.ekb = 'true';
                data.tags = 'Екатеринбург';
            }

            var hasFile = false;
            $fileinput = $this.find('[type="file"]');
            if ($fileinput.size()) hasFile = true;

            $.ajax({
                type: 'POST',
                url: '/api/ajax/lead/',
                data: data,
                dataType: 'json',
                success: function (response) {
                    localStorage.setItem('response', JSON.stringify(response));
                    if (response.code == 200) {
                        if (hasFile) {
                            sendFile(response.data.id, $this, leadSuccessMessage);
                        } else {
                            leadSuccessMessage();
                        }
                    }
                },
                error: function (response) {
                    localStorage.setItem('error', JSON.stringify(response))
                    console.error(response);
                    $.fancybox('<p id="wsx">При отправке Вашей заявки произошла ошибка!<br>Перезвоните пожалуйста в наш офис</p>');
                }
            });


        });
    }

    function sendFile(lead_id, $form, callback) {
        var fd = new FormData();
        fd.append('id', 'file');
        fd.append('type', 'file');
        fd.append('userfile', $form.find('[type="file"]')[0].files[0]);

        var url = '/api/ajax/file/?lead_id=' + lead_id;

        $.ajax({
            type: 'POST',
            url: url,
            data: fd,
            processData: false,
            contentType: false,
            dataType: "json",
            success: function (data) {
                if (data.code == 200) {
                    localStorage.setItem('response', JSON.stringify(data))

                    callback();
                } else {
                    console.error(data)
                    localStorage.setItem('error', JSON.stringify(data))
                }

            },
            error: function (data) {
                localStorage.setItem('error', JSON.stringify(data))
                console.error(data);
            }
        });
    }

    function leadSuccessMessage() {
        if (document.location.pathname == '/bani') {
            mark = "bani"
        } else if (document.location.pathname == '/hram') {
            mark = "hram"
        } else {
            mark = 'dom'
        }
        ;
        if (location.host == 'ekb.smartlaft.ru') {
            yaCounter41455009.reachGoal(mark);
        } else {
            yaCounter41968399.reachGoal(mark);
        }


        document.location.href = 'http://smartlaft.ru/success';
        /*$.fancybox('<p id="wsx" style="background-image:none">Ваша заявка отправлена!<br>Мы вам перезвоним</p>');*/
    }

    function activateSlider() {
        $('.bxslider').bxSlider({
            responsive: true,
            pagerType: 'full',
            pagerShortSeparator: ' ',
            nextText: ' ',
            prevText: ' '
        });

        $('.proj-slide').bxSlider({
            responsive: true,
            pager: false,
            minSlides: 1,
            maxSlides: 5,
            moveSlides: 1,
            slideWidth: 240,
            slideMargin: 10
        });
    }

    function activateTeh(ex) {
        if (ex == true) {
            $('.tech_first_div_p').hide('fast');
            $('.tech_first_arrow').hide('fast');
            $('.tech_first_div_p:first').show('fast');
            $('.tech_first_arrow:first').show('fast');

            $('.teh_clck').on('click', '.tech_first_div_head', function () {
                if ($('.tech_first_div_head.act')) {
                    $('.tech_first_div_head.act').siblings('.tech_first_div_p').hide('slow');
                    $('.tech_first_div_head.act').siblings('.tech_first_arrow').fadeOut('slow');
                    $('.tech_first_div_head.act').removeClass('act');

                }
                $(this).toggleClass('act');
                $(this).siblings('.tech_first_div_p').slideToggle('fast');
                $(this).siblings('.tech_first_arrow').slideToggle('fast');

            });
        }
    }


})(jQuery);

(function () {

    var youtube = document.querySelectorAll(".youtube");

    for (var i = 0; i < youtube.length; i++) {

        var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";

        var image = new Image();
        image.src = source;
        image.addEventListener("load", function () {
            youtube[i].appendChild(image);
        }(i));

        youtube[i].addEventListener("click", function () {

            var iframe = document.createElement("iframe");

            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

            this.innerHTML = "";
            this.appendChild(iframe);
        });
    }
})();

ymaps.ready(init);
        var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map("map", {
                center: [55.68270656905706,37.62451650000001],
                zoom: 17,
                controls: ['zoomControl']
            });
            myMap.behaviors.disable('scrollZoom');

            myPlacemark = new ymaps.Placemark([55.68270656905706,37.62451650000001], {}, {});

            myMap.geoObjects.add(myPlacemark);

         }