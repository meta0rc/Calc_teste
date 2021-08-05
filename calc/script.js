let btn_calc = document.querySelectorAll("#buttons div");
let btn_funcs = document.querySelectorAll(".funcBtn div");
let result = document.querySelectorAll("#resultado div");
let ingual = document.getElementById('ingual');


for(let s = 0; s <= 3; s++){
    let aux = btn_funcs[s].textContent;
    btn_funcs[s].onclick = () => {
        result[1].innerText = aux;
    }
}
for(let i = 0; i <= 9; i++){
    
    let dec = btn_calc[i].textContent;
    btn_calc[i].onclick = () => {
        result[0].innerText += dec;
    }
}
for(let w = 0; w <= 9; w++){
    let aux = 2; 
    let uni = btn_calc[w].textContent;
    btn_calc[w].onclick = () =>{
        result[aux].innerText += uni;
    }
}

function limp(){
    result[0].innerText = " ";
    result[1].innerText = " ";
    result[2].innerText = " ";
}
