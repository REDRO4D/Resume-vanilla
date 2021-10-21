window.addEventListener('load', () => {
    const hero = ['¡Hola!', 'Soy Bruno Rosales', 'Desarrollador de Software'];

    var greetingDiv = document.querySelector('#greeting');
    var nameDiv = document.querySelector('#me');
    var careerDiv = document.querySelector('#carrer');

    let i = 0;
    let flag = 0;

    const cursor = document.createElement('i');
    cursor.className = 'cursor';

    const writeAnimation = setInterval(() => {
        switch (flag) {
            case 0:
                greetingDiv.innerHTML = hero[0].slice(0, i);
                if (i == 0) {
                    document.getElementsByClassName('text-wrapper')[0].appendChild(cursor);
                }
                if (i < hero[0].length) {
                    i++;
                } else {
                    document.querySelector('.cursor').remove();
                    i = 0;
                    flag = 1;
                }
                break;
            case 1:
                nameDiv.innerHTML = hero[1].slice(0, i);
                if (i == 0) {
                    document.getElementsByClassName('text-wrapper')[1].appendChild(cursor);
                }
                if (i < hero[1].length) {
                    i++;
                } else {
                    document.querySelector('.cursor').remove();
                    i = 0;
                    flag = 2;
                }
                break;
            case 2:
                careerDiv.innerHTML = hero[2].slice(0, i);
                if (i == 0) {
                    document.getElementsByClassName('text-wrapper')[2].appendChild(cursor);
                }
                if (i < hero[2].length) {
                    i++;
                } else {
                    document.querySelector('.cursor').classList.add('typed');
                    i = 0;
                    flag = 3;
                }
                break;
            default:
                clearInterval(writeAnimation);
                break;
        }
    }, 100);

});

function write(textWrapperNumber, textWrapper, i) {
    textWrapper.innerHTML = hero[textWrapperNumber].slice(0, i);
    if (i == 0) {
        document.getElementsByClassName('text-wrapper')[textWrapperNumber].appendChild(cursor);
    }
    if (i >= hero[textWrapperNumber].length) {
        document.querySelector('.cursor').remove();
    }
}