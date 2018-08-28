

$(document).ready(function() {
    anim();
    $('span').bind('click', function() {

       removeClass();
       removeDiv();


        $(this).parent().addClass('.active');


       var color = {
            'red': ['images/red.jpg', ['l', 'xl', 'xxxl'], 10],
            'blue':['images/blue.jpg', ['s', 'm', 'l', 'xl'], 6],
            'green':['images/green.jpg', ['s', 'sm', 'm', 'l', 'xl'], 7] ,
            'yellow':['images/yellow.jpg', ['s', 'm', 'l', 'xxl'],35],
            'black':['images/black.jpg', ['sm', 'm', 'l', 'xxl'],52],
            'white':['images/white.jpg', ['s', 'm', 'l', 'xxl'],4]
        };

        var index = $(this).data('color');//помещаем данные цвета в кеш jquery

        $(this).attr('data-size',color[index][1]);//данные отображаются в DOM - дереве
        $(this).data('size',color[index][1]);//помещаем данные про размер в кеш jquery, в DOM изменения не видны
        alert($(this).data('size'));


        $('img').attr({src: color[index][0], alt: index});



        var div = $('<div></div>');

        var span = $('<span class="size"></span>');
        console.log(color[index][1].length);

                $('#myform').after(div);
                $(div).addClass('size-block');
                $(div).css('display', 'flex');

                $(span).text(color[index][1][0]);

                    $(div).append(span);


        //валидация формы

        var validator = $( "#myform" ).validate({

            rules: {
                amount: {
                    required: true,
                    number: true,
                    maxlength: 3,
                    max: color[index][2]
                }
            },

            messages: {
                amount: {
                    required: "Обязательное поле!",
                    number: "Проверьте правильность ввода",
                    maxlength: "Длина строки не более 3-х символов",
                    max: "Числа должны быть от 1 до" + ' ' + color[index][2]
                }
            }
        });

        //Конец валидация формы

    });

});



function removeClass(){
    $('span').parent().removeClass('.active');

}


function removeDiv(){


}


//анимация

function anim() {

    $('.myproduct-card').show(5000, function () {
        $('.card').slideDown(5000);
        $('.card-control').show(5000, function(){
                $('.card-control-title').slideDown(3000);
                $('.card-color').slideDown(3000, function(){
                    $('.card-color').css('display', 'flex');
                });
                $('#myform').slideDown(4000, function(){
                    $('.myproduct-card').fadeOut(30000);
                });
        });


    });
}


/*
  $('.card').show(8000, function() {
      $('.card').slideUp('3000');

  });

*/