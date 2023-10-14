
function runThemes() {
    let radios = document.querySelectorAll('input[type="radio"]');
    let calculator = document.querySelector(".calculator");
    let inputs = document.querySelectorAll('input[type="button"]');
    let inputDisplay = document.querySelector('input[type="text"]');
    let a = 8;
    let bgClrs = ['#800080', '#dc143c', '#008000', '#000080', '#000035','#008080', '#ffff00', '#228b22', '#ff0000'];
    let txtClrs = ['yellow', 'lime', 'chartreuse', 'orange', 'purple', 'azure', 'navy', 'cyan', 'snow']

    for (let i = 0; i <= a; i++){
        radios[i].onclick = () => {
            calculator.style.background = bgClrs[i];
            inputs.forEach(e => {
                e.style.color = txtClrs[i];
            })
            inputDisplay.style.color = txtClrs[i];
        }
    }
 
}
runThemes()