let counter=0;
let contributor=['Ravi','Arpan','Harsh','Prateek','Raman','Divyam','Sushant','Fardeen'];

let credit=document.getElementsByClassName('typing')[0];

setInterval(()=>{
    counter=(counter+1)%contributor.length;
    console.log(contributor[counter]);
    credit.innerHTML='';
    credit.innerHTML=`${contributor[counter]}`
},3000);