let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');

for (let button of buttons) {
    button.addEventListener('click', function (e) {
        let btnText = e.target.innerHTML;
        if (btnText === 'AC') {
            input.value = "";
        }

        else if (btnText === '=') {
            try {
                input.value = eval(input.value);
            }

            catch {
                input.value = "giyan ho aap";


            }



        }

        else {
            input.value += btnText
        }

    })
}