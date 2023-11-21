
const myDiv=document.querySelectorAll('div');
for (let i=0;i<myDiv.length;i++){
    myDiv[i].addEventListener('click',(event)=>{
        for(let j=0;j<myDiv.length;j++){
            myDiv[j].classList.remove('red')
        }
        event.target.classList.add('red')
    })
}


