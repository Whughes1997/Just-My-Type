let sentArr = ['ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'
];
// let $feedback = $('#feedback')
let $highlight = $('#yellow-block');
let $highlightPosition = 0;
let sentenceCounter = 0;
let letterCounter = 0;
$('#sentence').text(sentArr[sentenceCounter])
$("#target-letter").text(sentArr[sentenceCounter][letterCounter]);

$(".yellow-block") == letterCounter[sentArr]


$(document).ready(function() {
    $('#keyboard-upper-container').hide();
})


$(document).ready(function() {
    $("body").keydown(function(e) {
        if (e.which == 16) {
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
        } else {
            if (letterCounter < sentArr[sentenceCounter].length - 1) {
                if (e.key == sentArr[sentenceCounter][letterCounter]) {
                    $("#feedback").append($("<span></span>").attr("class", "glyphicon glyphicon-ok"))
                } else if (e.key == sentArr[sentenceCounter][letterCounter]) {
                    $("#feedback").append($("<span></span>").attr("class", "glyphicon glyphicon-ok"))
                }

                letterCounter++;
                $('#target-letter').text(sentArr[sentenceCounter][letterCounter]);
                console.log(letterCounter)
                console.log(sentArr[sentenceCounter].length - 1)
                $highlightPosition += 17.5;
                $($highlight).css('left', $highlightPosition + 'px');


            } else if (letterCounter == sentArr[sentenceCounter].length - 1) {
                sentenceCounter++
                console.log("TEST")
                $('#sentence').text(sentArr[sentenceCounter])
                letterCounter = 0
                $("#target-letter").text(sentArr[sentenceCounter][letterCounter]);
                $highlightPosition = 5
                $($highlight).css('left', $highlightPosition + 'px');



            }

        };
    })

    $(document).keyup(function(e) {
        if (e.which == 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();

        };
    })

    $(document).keypress(function(e) {
        let targetNum = e.key.charCodeAt();
        $('#' + targetNum).css('background-color', 'aqua');

        $(document).keyup(function(e) {
            let targetNum = e.key.charCodeAt();
            $('#' + targetNum).css('background-color', '');
        });
    });



});