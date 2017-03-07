$(document).ready(function () {

    //elements
    var btn = document.getElementById('btn');
    var app = document.getElementById('app');
    var questions = document.getElementById('questions');

    //url
    var url = 'http://survey.quantox.tech/survey/';
    var api_key = '14d2828a1a905a86e87248ad795318c0919dac2f';
    var request = url + api_key;



    //on click event
    btn.addEventListener('click', function () {

        var email = document.getElementById('email').value;
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!regex.test(email)) {
            alert('Please provide a valid email address');
            email.focus;
            return false;

        } else {

            var step2 = document.getElementsByClassName('step-2');
            app.innerHTML = '';
            app.appendChild(step2).style.display = 'block';

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open('GET', request, 'true');
            xmlhttp.onload = function () {
                if (xmlhttp.status === 200) {
                    var json_data = JSON.parse(xmlhttp.responseText);
                    insertQuestion(json_data);
                } else if (xmlhttp.status === 400) {
                    app.innerHTML = '';
                    app.appendChild('step-5').style.display = 'block';
                }
            };
            xmlhttp.send();


        }

    });


    function insertQuestion(data) {
        var string = '';

        for (i = 0; i < data.question.length; i++) {
            string += data[i].question;
        }
    }

    //navigating
    var pageCount = 1;
    var rigth_arrow = document.getElementsByClassName('r-arrow').onclick;
    var left_arrow = document.getElementsByClassName('l-arrow').onclick;





});