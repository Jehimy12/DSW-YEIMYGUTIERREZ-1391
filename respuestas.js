function resultado(){
    let total = 5;
    let punto= 0;

    let myForm = document.forms["formulario"];
    let respuestasCorrectas=["p13", "p22", "p31", "p42", "p52"];

    for(let i =1; i <=total; i++){
        if (myForm["p" + i].value == null ||
            myForm ["p" + i].value == ''){
                alert('Favor responder la preguntas');
                return false;
            }
            else { 
                if(myForm["p" + i].value === respuestasCorrectas[i - 1])
                puntos++;
                
            }
                }
                let resultado=document.getElementById('resultado')
                resultado.innerHTML='obtuviste'+puntos+' puntos de' + total + 'posibles';
                return false;
}