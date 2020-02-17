const colors = ['red', 'blue', 'green', 'purple'];

let btn = $('<button class="btn btn-primary m-5">Click!</button>');
$('body').append(btn);

btn.click(function () {
    alert('Clicked')
});



$(':input[type="submit"]').prop('disabled', true);
    $('input[type="text"]').keyup(function() {
        if ($(this).val() != '') {
            $(':input[type="submit"]').prop('disabled', false);
        }
    })

    $('<div></div>').appendTo('body');
    $('<h2>Input</h2>').appendTo('div');
    $('<ul></ul>').appendTo('body');
    $('<li>peter</li>').appendTo('ul');

    $('h2').mouseover( function(){
        $('h2').css({
            'background-color': 'yellow',
            'border': '2px solid black',
            'border-radius': '50px',

        })

    })
    $('li').click(function() {
        let randomIndex = Math.floor(Math.random() * colors.length);
        li.css('background-color', colors[randomIndex]);

     $('li').dblclick(function(){
         $('li').remove();
     })   
    });
        