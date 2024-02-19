
let input = document.querySelector('input');
let btns = document.querySelectorAll('.btns');
let buttons = document.querySelectorAll('button');
let sup = document.getElementById('one');

let e =  2.718281828459045;
let string = "";
let store = 0;
let val;
let count = 0;
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(button)=>{
        count++;
        if (button.target.innerHTML == "=") {
            val = eval(string);
            string = val;
            input.value = string;
        }else if(button.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }
        else if(button.target.innerHTML == "Back"){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else if(button.target.innerHTML == "π"){
            string = Math.PI;
            input.value = string;
        }
        else if(button.target.innerHTML == "e"){
                string = Math.E;
                input.value = string;
        }
        else if(button.target.innerHTML == "RND"){
            string = Math.round(string);
            input.value = string;
        }
        else if(button.target.innerHTML == "M+"){
            store = val;
        }
        else if(button.target.innerHTML == "M-"){
            store = "";
        }
        else if(button.target.innerHTML == "Ans"){
            input.value = store;
        }
        else if(button.target.innerHTML == "n!"){
            function factorialLoop(string) {
                let str1 = parseInt(string);
                let result = 1;
                for (let i = 2; i <= str1; i++) {
                    result *= i;
                    console.log(result);
                }
                input.value = result;
            }
            factorialLoop(string);
        }
        else if(button.target.innerText == "10x"){
            function ten_square(string){
                let val = parseInt(string);
                let eval = 10 ** val;
                input.value = eval;
            }
            ten_square(string);
        }
        else if(button.target.innerText == "ex"){
            function e_square(string){
                let val = parseInt(string);
                let eval = e ** val;
                input.value = eval;
            }
            e_square(string);
        }
        else if(button.target.innerHTML == "x<sup>2</sup>"){
            function cube(string){
                let iString = parseInt(string);
                sq = iString ** 2;
                input.value = sq;
            }
            cube(string);
        }
        else if(button.target.innerHTML == "x<sup>3</sup>"){
            function cube(string){
                let iString = parseInt(string);
                cubee = iString ** 3;
                input.value = cubee;
            }
            cube(string);
        }
        else if(button.target.innerText == "xy"){
            function n_square(string){
                let str1 = string[0];
                let str2 = string[1];
                let val1  = parseInt(str1);
                let val2  = parseInt(str2);
                input.value = Math.pow(val1 , val2);
            }
            n_square(string);
        }
        else if(button.target.innerHTML == "log"){
            function log(string){
                let iString = parseInt(string);
                input.value = Math.log10(iString);
            }
            log(string);
        }
        else if(button.target.innerHTML == "ln"){
            function ln(string){
                let iString = parseInt(string);
                input.value = Math.log(iString);
            }
            ln(string);
        }
        else if(button.target.innerHTML == "✓x"){
            function root(string){
                let iString = parseInt(string);
                input.value = Math.sqrt(iString);
            }
            root(string);
        }
        else if(button.target.innerHTML == "<sup>3</sup>✓x"){
            function cubeRoot(string){
                let iString = parseInt(string);
                input.value = Math.pow(iString, 1/3);
            }
            cubeRoot(string);
        }
        else if(button.target.innerText == "y✓x"){
            function n_root(string){
                let str1 = string[0];
                let str2 = string[1];
                let val1  = parseInt(str1);
                let val2  = parseInt(str2);
                input.value = Math.pow(val1 , 1/val2);
            }
            n_root(string);
        }
        else if(button.target.innerHTML == "sin"){
            function tanInDegrees(degrees) {
                let val = parseInt(degrees);
                console.log(val);
                // Convert degrees to radians
                let radians = val * (Math.PI / 180);
                // Calculate sine
                input.value = Math.sin(radians);
            }
            tanInDegrees(string);
        }
        else if(button.target.innerHTML == "cos"){
            function cosInDegrees(degrees) {
                let val = parseInt(degrees);
                // console.log(val);
                // Convert degrees to radians
                let radians = val * (Math.PI / 180);
                // Calculate sine
                input.value = Math.cos(radians);
            }
            cosInDegrees(string);
        }
        else if(button.target.innerHTML == "tan"){
            function tanInDegrees(degrees) {
                let val = parseInt(degrees);
                // console.log(val);
                // Convert degrees to radians
                let radians = val * (Math.PI / 180);
                // Calculate sine
                input.value = Math.tan(radians);
            }
            tanInDegrees(string);
        }
        else{
            string += button.target.innerText;
            input.value = string;
            // console.log(string);
        }
    });
});
