const shuffleArray = (arr) => {
    const output = [];
    while (arr.length !== 0) {
        const rand = Math.floor(Math.random() * arr.length);
        output.push(arr.splice(rand, 1)[0]);
    }
    return output;
}

function startGame() {

    const icons = ['🥗', '🍩', '🍵', '🥪', '🌳', '🌷', '🎊', '💖'];
    const arrayID = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

    const arrayRandom = shuffleArray(arrayID);




    const htmls = arrayRandom.map(i => (
        `
    <div class="box x">
        <div class="box x box-inner">
            <div class="box box-front">
                <i class="fal fa-hand-point-down"></i>
            </div>
            <div class="box box-back" name="${i}">
                ${icons[i - 1]}
            </div>
        </div>
    </div>
    `
    )).join('');

    document.querySelector('#game').innerHTML = htmls;


    const boxses = document.querySelectorAll('.box');

    boxses.forEach(box => {
        box.addEventListener('click', handleClick);
    })

    let stack = [];
    let boxOpened = 0;
    function handleClick() {
        const e = this.querySelector('.box-inner:not(.disabled)');
        if (e && stack.length < 2) {
            e.classList.toggle('flip');
            e.classList.toggle('disabled');
            stack.push(e);

            if (stack.length === 2) {
                const idBoxOpen1 = stack[0].querySelector('.box-back').getAttribute('name');
                const idBoxOpen2 = stack[1].querySelector('.box-back').getAttribute('name');


                setTimeout(() => {
                    if (idBoxOpen1 !== idBoxOpen2) {
                        stack[0].classList.toggle('flip');
                        stack[1].classList.toggle('flip');

                        stack[0].classList.toggle('disabled');
                        stack[1].classList.toggle('disabled');
                    } else {
                        boxOpened += 2;
                        if (boxOpened === 16) {
                            fire();
                            boxOpened = 0;
                            setTimeout(() => {
                                const allBox = document.querySelectorAll('.box-inner');
                                allBox.forEach(box => {
                                    box.classList.toggle('flip');
                                })
                                setTimeout(() => {
                                    startGame();
                                }, 1000);
                            }, 2000);
                        }
                    }
                    stack = [];
                }, 700);
            }
        }
    }
}

startGame();