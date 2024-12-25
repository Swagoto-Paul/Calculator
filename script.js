let btns=document.querySelectorAll(".btn");
let str="";
Array.from(btns).forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="=")
        {
            if(str=="")
                str=str;
            else
                str=eval(str);
            document.querySelector('.input').value=str;
        }
        else if(e.target.innerHTML=="C")
        {
            str="";
            document.querySelector('.input').value=str;
        }
        else if(e.target.innerHTML=="")
        {
            str=str.slice(0,str.length-1);
            document.querySelector('.input').value=str;
        }
        else
        {
            console.log(e.target);
            str=str+e.target.innerHTML;
            document.querySelector(".input").value=str;
        }
    })
})