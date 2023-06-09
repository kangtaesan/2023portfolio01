$(function () {

    let text = $('.web .tab_menu > div');
    let bg = $('.web .inner > figure');
    let item = $('.web .right .item');
    text.click(function () {
        text.removeClass('on');
        $(this).addClass('on');

        bg.removeClass('on');
        bg.eq($(this).index()).addClass('on');

        item.removeClass('on').find('.device figure').animate({
            'top': '280px'
        }, "fast");
        item.eq($(this).index()).addClass('on').find('.device figure').animate({
            'top': '250px'
        }, "fast");
        item.removeClass('on').find('.text .text_detail').animate({
            'left': '55%'
        });
        item.eq($(this).index()).addClass('on').find('.text .text_detail').animate({
            'left': '50%'
        });

    }); //web

    let text02 = $('.app .tab_menu > div');
    let bg02 = $('.app .inner > figure');
    let item02 = $('.app .right .item');
    text02.click(function () {
        text02.removeClass('on');
        $(this).addClass('on');

        bg02.removeClass('on');
        bg02.eq($(this).index()).addClass('on');

        item02.removeClass('on').find('.device figure').animate({
            'right': '40px'
        }, 400);;
        item02.eq($(this).index()).addClass('on').find('.device figure').animate({
            'right': '20px'
        }, 400);;
        item02.removeClass('on').find('.text .text_detail').animate({
            'left': '55%'
        }, 400);;
        item02.eq($(this).index()).addClass('on').find('.text .text_detail').animate({
            'left': '50%'
        }, 400);;


    });//app

    let img01 = $('.design .top figure:nth-of-type(1)');
    let img02 = $('.design .top figure:nth-of-type(2)');
    let img03 = $('.design .top figure:nth-of-type(3)');
    let img04 = $('.design .top figure:nth-of-type(4)');
    let img05 = $('.design .top figure:nth-of-type(5)');
    let img06 = $('.design .middle figure:nth-of-type(1)');
    let img07 = $('.design .middle figure:nth-of-type(2)');
    let img08 = $('.design .middle figure:nth-of-type(3)');
    let img09 = $('.design .middle figure:nth-of-type(4)');
    let img10 = $('.design .middle figure:nth-of-type(5)');
    let img11 = $('.design .middle figure:nth-of-type(6)');
    let img12 = $('.design .bottom figure:nth-of-type(1)');
    let img13 = $('.design .bottom figure:nth-of-type(2)');
    let img14 = $('.design .bottom figure:nth-of-type(3)');
    let img15 = $('.design .bottom figure:nth-of-type(4)');
    let img16 = $('.design .bottom figure:nth-of-type(5)');
    let img17 = $('.design .bottom figure:nth-of-type(6)');

    let img00 = $('.design .list figure')

    img14.click(function () {
        img05.removeClass('on02');
        img06.removeClass('on02');
        img08.removeClass('on02');
        img10.removeClass('on02');
        img13.removeClass('on02');
        img15.removeClass('on02');
        img01.toggleClass('on01');
        img02.toggleClass('on01');
        img03.toggleClass('on01');
        img04.toggleClass('on01');
        img07.toggleClass('on01');
        img09.toggleClass('on01');
        img11.toggleClass('on01');
        img12.toggleClass('on01');
        img16.toggleClass('on01');
    }); //design
    img17.click(function () {
        img01.removeClass('on01');
        img02.removeClass('on01');
        img03.removeClass('on01');
        img04.removeClass('on01');
        img07.removeClass('on01');
        img09.removeClass('on01');
        img11.removeClass('on01');
        img12.removeClass('on01');
        img16.removeClass('on01');
        img05.toggleClass('on02');
        img06.toggleClass('on02');
        img08.toggleClass('on02');
        img10.toggleClass('on02');
        img13.toggleClass('on02');
        img15.toggleClass('on02');
    }); //design

    let design_bg = $('.design');
    let plusFigure = $('.design .inner .plus > figure');
    let plusImg = $('.design .inner .plus > figure .plus_img');
    let list = $('.design .inner .list figure');
    let cancel = $('.design .inner .plus .cancel figure');

    list.click(function () {
        let thisImg = $(this).find('img').attr('src');

        plusFigure.show();
        cancel.show();
        design_bg.addClass('on');
        plusImg.attr('src', thisImg);
    });

    
    $('.design .inner .list .bottom figure:nth-of-type(3)').click(function () {
        plusFigure.hide();
        design_bg.removeClass('on');
    });
    $('.design .inner .list .bottom figure:nth-of-type(6)').click(function () {
        plusFigure.hide();
        design_bg.removeClass('on');
    });

    plusFigure.click(function () {
        $('.design').removeClass('on');
        plusFigure.hide();
        cancel.hide();
    });
    cancel.click(function(){
        $('.design').removeClass('on');
        plusFigure.hide();
        cancel.hide();
    });
    //design

}) //jquery end
