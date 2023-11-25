
const myDiv=document.querySelectorAll('div');

for (let i=0;i<myDiv.length;i++){
    myDiv[i].addEventListener('click',(event)=>{
        if(event.target.style.backgroundColor =="red"){
            event.target.style.backgroundColor="";
        }
        else{
            for (let j=0;j<myDiv.length;j++){
                myDiv[j]. style.backgroundColor="";
            }
            event.target.style.backgroundColor='red';
        }  
    })
}

