document.getElementById('12').style.color='red'
let initialle=100;

function aggrandir(){
    initialle=initialle+50;
    document.getElementById('im').style.width=initialle+'px';
}
function diminuer(){
    initialle=initialle-50;
    document.getElementById('im').style.width=initialle+'px';
}
function changer_image(){
    initialle += 50
    document.getElementById('im'),style.width=initialle+'px';
    let val=document.getElementById('im').scr;
    const im1='http://127.0.0.1:5500/image/a.png'
    const im2='http://127.0.0.1:5500/image/b.png'


    if(initialle==300){
        if(val==im1)
             document.getElementById('im').src="im2"
    
        else
                document.getElementById('im').src="im1"
    }

}