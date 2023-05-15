function resultado(){
    let total = 5;
    let punto= 0;

    let myForm = document.forms["formulario"];
    let respuestasCorrectas=["p13", "p22", "p31", "p42", "p52"];
console.log(myForm['pregunta1']);
let j=1;
    for(let i =1; i <=total; i++){
        if (myForm["pregunta" + i].value == null ||
            myForm ["pregunta" + i].value == ''){
                alert('Favor responder la preguntas');
                return false;
            }
            else { 
                if(myForm["pregunta" + i].value === respuestasCorrectas[i - 1])
                punto++;
                
            }
                }
                let resultado=document.getElementById('resultado')
                resultado.innerHTML='Obtuviste '+punto+' puntos de ' + total + ' posibles';
                return false;
}