function procesarRespuestas(){
    let total = 5;
    let punto= 0;

    let myForm = document.forms["formulario"];
    let respuestasCorrectas=["c", "c", "a", "b", "b"];

    for(let i =1; i <=total; i++){
        if (myForm["r" + i].value == null ||
            myForm ["r" + i].value == ''){
                alert('Favor responder la preguntas');
                return false;
            }
            else { 
                if(myForm["r" + i]. value === respuestasCorrectas[i - 1])
                puntos++;
                
            }
                }
                let resultado=document.getElementById('resultado')
                resultado.innerHTML='obtuviste'+puntos+ 'puntos de' + total+ 'posibles';
                return false;
}