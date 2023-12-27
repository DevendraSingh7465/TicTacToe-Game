var num = 0;
var a = 0, b = 0, c = 0,
    d = 0, e = 0, f = 0,
    g = 0, h = 0, i = 0;

var alpha = 0;
function calculate() {
    if (a == 1 || b == 1 || c == 1 || d == 1 || e == 1 || f == 1 || g == 1 || h == 1 || i == 1 || a == 2 || b == 2 || c == 2 || d == 2 || e == 2 || f == 2 || g == 2 || h == 2 || i == 2) {
        alpha += 1;
        console.log("vlaue of alpha :", alpha);
        if (a == 1 && b == 1 && c == 1 || a == 2 && b == 2 && c == 2) {
            const btn1 = document.querySelector('.btn1');
            const btn2 = document.querySelector('.btn2');
            const btn3 = document.querySelector('.btn3');
            btn1.style.textDecoration = 'line-through';
            btn2.style.textDecoration = 'line-through';
            btn3.style.textDecoration = 'line-through';
            setTimeout(reset, 2000);

        }
        else if (d == 1 && e == 1 && f == 1 || d == 2 && e == 2 && f == 2) {
            const btn1 = document.querySelector('.btn4');
            const btn2 = document.querySelector('.btn5');
            const btn3 = document.querySelector('.btn6');
            btn1.style.textDecoration = 'line-through';
            btn2.style.textDecoration = 'line-through';
            btn3.style.textDecoration = 'line-through';
            setTimeout(reset, 2000);

        }
        else if (g == 1 && h == 1 && i == 1 || g == 2 && h == 2 && i == 2) {
            const btn1 = document.querySelector('.btn7');
            const btn2 = document.querySelector('.btn8');
            const btn3 = document.querySelector('.btn9');
            btn1.style.textDecoration = 'line-through';
            btn2.style.textDecoration = 'line-through';
            btn3.style.textDecoration = 'line-through';
            setTimeout(reset, 2000);

        }
        else if (a == 1 && d == 1 && g == 1 || a == 2 && d == 2 && g == 2) {
            const btn1 = document.querySelector('.btn1');
            const btn2 = document.querySelector('.btn4');
            const btn3 = document.querySelector('.btn7');
            btn1.style.textDecoration = 'line-through';
            btn2.style.textDecoration = 'line-through';
            btn3.style.textDecoration = 'line-through';
            setTimeout(reset, 2000);

        }
        else if (b == 1 && e == 1 && h == 1 || b == 2 && e == 2 && h == 2) {
            const btn1 = document.querySelector('.btn2');
            const btn2 = document.querySelector('.btn5');
            const btn3 = document.querySelector('.btn8');
            btn1.style.textDecoration = 'line-through';
            btn2.style.textDecoration = 'line-through';
            btn3.style.textDecoration = 'line-through';
            setTimeout(reset, 2000);

        }
        else if (c == 1 && f == 1 && i == 1 || c == 2 && f == 2 && i == 2) {
            const btn1 = document.querySelector('.btn3');
            const btn2 = document.querySelector('.btn6');
            const btn3 = document.querySelector('.btn9');
            btn1.style.textDecoration = 'line-through';
            btn2.style.textDecoration = 'line-through';
            btn3.style.textDecoration = 'line-through';
            setTimeout(reset, 2000);

        }
        else if (a == 1 && e == 1 && i == 1 || a == 2 && e == 2 && i == 2) {
            const btn1 = document.querySelector('.btn1');
            const btn2 = document.querySelector('.btn5');
            const btn3 = document.querySelector('.btn9');
            btn1.style.textDecoration = 'line-through';
            btn2.style.textDecoration = 'line-through';
            btn3.style.textDecoration = 'line-through';
            setTimeout(reset, 2000);

        }
        else if (c == 1 && e == 1 && g == 1 || c == 2 && e == 2 && g == 2) {
            const btn1 = document.querySelector('.btn3');
            const btn2 = document.querySelector('.btn5');
            const btn3 = document.querySelector('.btn7');
            btn1.style.textDecoration = 'line-through';
            btn2.style.textDecoration = 'line-through';
            btn3.style.textDecoration = 'line-through';
            setTimeout(reset, 2000);

        }
        else if (alpha == 9) {
            const heading = document.getElementById('heading');
            heading.textContent = "Match Draw";
            setTimeout(reset, 2000);
        }
    }
}

function one() {
    const button = document.querySelector('.btn1');
    button.disabled = true;
    num = num + 1;
    if (num % 2 == 0) {
        button.textContent = 'O';
        a += 2;

    }
    else {
        button.textContent = 'X';
        a += 1;

    }
    calculate();

    // console.log("a =",a);
}
function two() {
    const button = document.querySelector('.btn2');
    button.disabled = true;
    num = num + 1;
    if (num % 2 == 0) {
        button.textContent = 'O';
        b += 2;

    }
    else {
        button.textContent = 'X';
        b += 1;

    }
    calculate();

    // console.log("b =",b);

}
function three() {
    const button = document.querySelector('.btn3');
    button.disabled = true;
    num = num + 1;
    if (num % 2 == 0) {
        button.textContent = 'O';

        c += 2;

    }
    else {
        button.textContent = 'X';
        c += 1;

    }
    calculate();
    // console.log("c =",c);

}
function four() {
    const button = document.querySelector('.btn4');
    button.disabled = true;
    num = num + 1;
    if (num % 2 == 0) {
        button.textContent = 'O';
        d += 2;

    }
    else {
        button.textContent = 'X';
        d += 1;

    }
    calculate();

}
function five() {
    const button = document.querySelector('.btn5');
    button.disabled = true;
    num = num + 1;
    if (num % 2 == 0) {
        button.textContent = 'O';
        e += 2;

    }
    else {
        button.textContent = 'X';
        e += 1;

    }
    calculate();

}
function six() {
    const button = document.querySelector('.btn6');
    button.disabled = true;
    num = num + 1;
    if (num % 2 == 0) {
        button.textContent = 'O';
        f += 2;

    }
    else {
        button.textContent = 'X';
        f += 1;

    }
    calculate();

}
function seven() {
    const button = document.querySelector('.btn7');
    button.disabled = true;
    num = num + 1;
    if (num % 2 == 0) {
        button.textContent = 'O';
        g += 2;

    }
    else {
        button.textContent = 'X';
        g += 1;

    }
    calculate();

}
function eight() {
    const button = document.querySelector('.btn8');
    button.disabled = true;
    num = num + 1;
    if (num % 2 == 0) {
        button.textContent = 'O';
        h += 2;

    }
    else {
        button.textContent = 'X';
        h += 1;

    }
    calculate();

}
function nine() {
    const button = document.querySelector('.btn9');
    button.disabled = true;
    num = num + 1;
    if (num % 2 == 0) {
        button.textContent = 'O';
        i += 2;

    }
    else {
        button.textContent = 'X';
        i += 1;

    }
    calculate();

}


function reset() {
    location.reload();
    // num = 0;
    // a = 0;
    // b = 0;
    // c = 0;
    // d = 0;
    // e = 0;
    // f = 0;
    // g = 0;
    // h = 0;
    // i = 0;
    // for (let i = 1; i <= 9; i++) {
    //     const button = document.querySelector('.btn'+i);
    //     button.textContent = ''; 
    //     button.disabled = false;
    // }
} 
