let p=document.querySelector("p");
let inc=document.querySelector("#b1");
let dec=document.querySelector("#b2");
let res=document.querySelector("#b3");

let num=0;
inc.addEventListener("click",function()
{
    num++;
    p.innerText=num;
})

dec.addEventListener("click",function()
{
    num--;
    p.innerText=num;
})
res.addEventListener("click",function()
{
    num=0;
    p.innerText=num;
})

