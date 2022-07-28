var div = document.getElementById('div');
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');

div.addEventListener("click", e =>{
    var i = document.createElement('i');
    if(div.children.length == 1)
    {  
       i.classList.add("fa-solid");
       i.classList.add("fa-circle-check");
       i.classList.add("text-success");
       div.appendChild(i);
      div1.removeChild(div.children[1]);
      div2.removeChild(div.children[1]);
      div3.removeChild(div.children[1]);
    }
   else if(div.children.length == 2)
   {
        console.log(div.removeChild(div.children[1]));
   }
   
})

div1.addEventListener("click", e =>{
     var i = document.createElement('i');
     if(div1.children.length == 1)
     {  
        i.classList.add("fa-solid");
        i.classList.add("fa-circle-check");
        i.classList.add("text-success");
        div1.appendChild(i);
       div.removeChild(div.children[1]);
       div2.removeChild(div.children[1]);
       div3.removeChild(div.children[1]);
     }
    else if(div1.children.length == 2)
    {
         console.log(div1.removeChild(div1.children[1]));
    }
    
 })

 div2.addEventListener("click", e =>{
     var i = document.createElement('i');
     if(div2.children.length == 1)
     {
      
        i.classList.add("fa-solid");
        i.classList.add("fa-circle-check");
        i.classList.add("text-success");
        div2.appendChild(i);
       div1.removeChild(div.children[1]);
       div.removeChild(div.children[1]);
       div3.removeChild(div.children[1]);
     }
    else if(div2.children.length == 2)
    {
         console.log(div2.removeChild(div2.children[1]));
    }
    
 })

 div3.addEventListener("click", e =>{
     var i = document.createElement('i');
     if(div3.children.length == 1)
     {
      
        i.classList.add("fa-solid");
        i.classList.add("fa-circle-check");
        i.classList.add("text-success");
        div3.appendChild(i);
       div1.removeChild(div.children[1]);
       div2.removeChild(div.children[1]);
       div.removeChild(div.children[1]);
     }
    else if(div3.children.length == 2)
    {
         console.log(div3.removeChild(div3.children[1]));
    }
    
 })