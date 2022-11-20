const BASE_URL = `https://api.exchangerate.host/latest`;

function left(base){

    var ammount = document.getElementById('onkeyup').value;

    var choices = [];
    var els = document.getElementsByName('right_btn');
    for (var i = 0; i < els.length; i++){
        if ( els[i].checked ) {
            choices.push(els[i].value);
        }
    }

    (async () => {
        const response = await fetch(BASE_URL + `?base=${base}&symbols=${choices[0]}&amount=${ammount}`);
        const data = await response.json();

        document.getElementById('result').value = data.rates[choices[0]].toFixed(3);
    })();

}

function right(base){

    var ammount = document.getElementById('onkeyup').value;

    var choices = [];
    var els = document.getElementsByName('left_btn');
    for (var i = 0; i < els.length; i++){
        if ( els[i].checked ) {
            choices.push(els[i].value);
        }
    }

    (async () => {
        const response = await fetch(BASE_URL + `?base=${choices[0]}&symbols=${base}&amount=${ammount}`);
        const data = await response.json();

        document.getElementById('result').value = data.rates[base].toFixed(3);
    })();

}

function keyup(){

    setTimeout(function() {
        
        var v = document.getElementById('onkeyup').value;

        var choices = [];
        var els = document.getElementsByName('left_btn');
        for (var i = 0; i < els.length; i++){
            if ( els[i].checked ) {
                choices.push(els[i].value);
            }
        }
    
        var choices2 = [];
        var els2 = document.getElementsByName('right_btn');
        for (var i = 0; i < els2.length; i++){
            if ( els2[i].checked ) {
                choices2.push(els2[i].value);
            }
        }
    
        (async () => {
            const response = await fetch(BASE_URL + `?base=${choices[0]}&symbols=${choices2[0]}&amount=${v}`);
            const data = await response.json();
    
            document.getElementById('result').value = data.rates[choices2[0]].toFixed(3);
        })();
    }, 1000);
}