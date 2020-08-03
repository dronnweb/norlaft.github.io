$(document).ready(function(){
    activateBani();
	
	function activateBani() {
		var ban = [27,28,35,36,38,40,45,48,50,55,60,63],
			bcount = ban.length;
		for (i=0; i<bcount; i++) {
			var n = ban[i],
				proj = bani(n),
				c = proj[0],
				t = proj[1],
				p = proj[2];
			$('.'+n).find('.mprice').text(p);
		}
	}

    function bani(img) {
            var jsON = {"27":{"count":"5","text":"<p class=\"lead\">Идеальный вариант небольшой бани  для  3 - 5 человек.  Резные столбы на террасе в норвежском стиле придают бане архитектурную неповторимость. Для тех, кто любит уникальность, ценит свое время и заботится о здоровье.</p>","price":"1 250 000 руб"},"28":{"count":"5","text":"<p class=\"lead\">Удобная баня для небольшой компании с большой комнатой отдыха. Резные столбы толстого диаметра придают бане уникальный экстерьер. Может быть использована как небольшой временный дом. Большие окна и второй свет создают современный простор внутри.</p>","price":"1 330 000 руб"},"35":{"count":"5","text":"<p class=\"lead\">Уникальный проект бани с большими окнами в современной архитектуре. Комната отдыха для большой компании с обеденной зоной и небольшой кухней. Может быть использована как полноценный дом для 2 человек. В комнате отдыха второй свет создает уютную атмосферу комфорта.</p>","price":"1 527 000 руб"},"36":{"count":"3","text":"<p class=\"lead\">Уникальный проект бани с большими окнами в современной архитектуре. Комната отдыха для большой компании с обеденной зоной и небольшой кухней. Может быть использована как полноценный дом для 2 человек. В комнате отдыха второй свет создает уютную атмосферу комфорта.</p>","price":"1 505 000 руб"},"38":{"count":"3","text":"<p class=\"lead\">Удобная банька для 4 человек с просторной гостиной из соснового бруса в «косую лапу\". Высота потолков 2.3 метра, объемная парилка на 6 человек. Удобный санузел с душем может быть как совмещенным, так и раздельным</p>","price":"1 150 000 руб"},"40":{"count":"3","text":"<p class=\"lead\">Баня в финском стиле для ценителей современной архитектуры. Комфортный вариант для семьи или любителей пространства, создаваемый панорамной дверью. Парилка удобно вмещает до 4 человек одновременно. Летняя кухня и барбекю для любителей провести с пользой время на открытом воздухе и встречать гостей.\n</p>","price":"1 515 000 руб"},"45":{"count":"2","text":"<p class=\"lead\">Отличный вариант просторной загородной бани. Большая комната отдыха и парная вмещает до 8 человек одновременно. Для тех, кто любит проводить время в комфорте, встречать друзей и принимать оздоровительные процедуры. На мансардном этаже есть возможность оборудовать спальное помещение</p>","price":"1 590 000 руб"},"48":{"count":"2","text":"<p class=\"lead\">Отличный вариант просторной загородной бани. Большая комната отдыха и парная вмещает до 8 человек одновременно. Для тех, кто любит проводить время в комфорте, встречать друзей и принимать оздоровительные процедуры. На мансардном этаже есть возможность оборудовать спальное помещение</p>","price":"1 590 000 руб"},"50":{"count":"5","text":"<p class=\"lead\">Проект бани с мансардным этажом. Подходит для большой семьи или приема больших компаний. Комната отдыха удобно вмещает до 8 - 10 человек одновременно. На мансардном этаже можно оборудовать небольшое спальное место.</p>","price":"1 620 000 руб"},"55":{"count":"5","text":"<p class=\"lead\">Просторная баня с большой террасой, которую можно использовать для отдыха, веселых компаний или как зону барбекю. Комната отдыха вмещает до 8 человек. Для тех, кто заботится о своем хозяйстве и любит проводить выходные с семьей и друзьями.</p>","price":"1 680 000 руб"},"60":{"count":"3","text":"<p class=\"lead\">Просторная баня для семьи или большой компании. Вентилируемый дровенник для большого запаса дров, который можно использовать для хранения гриля и инструментов. Большая открытая терраса для летнего ужина всей семьей или встречи гостей. Может быть использована как гостевой или временный дом со всеми удобствами. В гостиной можно оборудовать небольшую кухню.</p>","price":"1 610 000 руб"},"63":{"count":"5","text":"<p class=\"lead\">Проект бани с большой террасой и гостиной. Удобная парная вмещает до 6 человек одновременно. А сама баня может вместить до 10 гостей одновременно. На террасе можно оборудовать барбекю или летнюю кухню.</p>","price":"1 970 000 руб"}};
            var count = jsON[img].count;
            var text = jsON[img].text;
            var price = jsON[img].price;
            return [count, text, price];
            
        } 

    //вызов попап
    $(".bani").fancybox({
            width : '95%',
            height:'auto',
            autoWidth : true,
            scrolling: 'no',
            fitToView   : false,
            padding : 10,
            helpers: {
                overlay: {
                  locked: false // отключаем блокировку overlay
                }
            },
            beforeLoad: function() {
                var dom = $(this.element).data('dom');
                var domN = bani(dom);
                var text = domN[1];
                var price = domN[2];
				$('.title_b').text("LAFT "+dom);
                $('.text_bani').html(text);
                $('.price').html(price);
            },
            beforeShow: function() {
                var tag = $(this.element).data('tag');
                $('#bani form').data('form',tag);
            },
            afterShow: function() {
                var dom = $(this.element).data('dom');
                var dataimg = new Array();
                var domN = bani(dom);
                var count = domN[0];
                for (i=0;i<count;i++) {
                    imgkey = i+1;
                    dataimg[i] = {img: 'assets/img/'+dom+'x'+imgkey+'.jpg', thumb: 'assets/img/'+dom+'x'+imgkey+'.jpg'}
                }
                var foto3 = $('.fotoworkb').fotorama({
                    data: dataimg
                    
                }).data('fotorama');
            },
            afterClose: function() {
                var foto3 = $('.fotoworkb').fotorama().data('fotorama');
                foto3.destroy();
            }
    });

    //вызов фулскрин
    $('.banishow').fancybox({
            width : '95%',
            height:'auto',
            autoWidth : true,
            scrolling: 'no',
            fitToView   : true,
            padding : 10,
            helpers: {
                overlay: {
                  locked: false // отключаем блокировку overlay
                }
            },
            beforeLoad: function() {
                var img = $(this.element).data('dom');
                var domN = bani(img);
                var text = domN[1];
                var price = domN[2];
                $('.text_bani').html(text);
                $('.price').html(price);
				$('.title_b').text("LAFT "+img);
                
               var dataimg = new Array();
                var num = domN[0];
                for (i=0; i<num;i++) {
                imgkey = i+1;
                dataimg[i] = {img: 'assets/img/'+img+'x'+imgkey+'.jpg', thumb: 'assets/img/'+img+'x'+imgkey+'.jpg'}
                }
                foto4 = $('.beforefr').fotorama({
                    data: dataimg,
                    allowfullscreen: true
                    
                    }).data('fotorama');
                
                foto4.show(0);
                foto4.requestFullScreen();
                
                
            },
            beforeShow: function() {
                var tag = $(this.element).data('tag');
                $('#bani form').data('form',tag);
            },
            afterShow: function() {
                var dom = $(this.element).data('dom');
                var dataimg = new Array();
                var domN = bani(dom);
                var count = domN[0];
                for (i=0;i<count;i++) {
                    imgkey = i+1;
                    dataimg[i] = {img: 'assets/img/'+dom+'x'+imgkey+'.jpg', thumb: 'assets/img/'+dom+'x'+imgkey+'.jpg'}
                }
                foto = $('.fotoworkb').fotorama({
                    data: dataimg
                    
                }).data('fotorama');
            },
            afterClose: function() {
                var foto3 = $('.fotoworkb').fotorama().data('fotorama');
                foto4.destroy();foto3.destroy();
            }
            
            
        });
});