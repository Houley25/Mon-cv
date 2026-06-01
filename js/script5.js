//recuperer un element dans html
const val=document.getElementById('c').textContent
console.log(val)
const val2=document.getElementById('A').textContent
const val3=document.getElementById('B').textContent

//Modification du contenu d'un element html
//document.getElementById ("c").innerHTML="88"
function compte(){
    let val1=document.getElementById('c').textContent
    val1++
    document.getElementById ("c").innerHTML=val1
    if(val1==5){
      document.getElementById ("d").innerHTML="c'est 5"  
    }
    else if(val1==10){
        document.getElementById ("d").innerHTML="c'est 10"
    }
    else if(val1==15){
        document.getElementById ("d").innerHTML="c'est 15"
    }
}    