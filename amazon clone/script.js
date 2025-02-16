const imgs=document.querySelectorAll('.header_slider ul img')
const prev = document.querySelector('.Contol_previous')
const next = document.querySelector('.Contol_next')
let n=0;
function changeslide(){
    for(let i=0; i< imgs.length;i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display='block';
}
changeslide();
prev.addEventListener('click',(e)=>{
    event.preventDefault()
})
next.addEventListener('click',(e)=>{
    event.preventDefault()
})
prev.addEventListener('click',(e)=>{
    if(n > 0){
        n--;
    }
    else{
        n = imgs.length - 1;
    }
    changeslide();
})
next.addEventListener('click',(e)=>{
    if(n < imgs.length - 1){
        n++;
    }
    else{
        n = 0;
    }
    changeslide();
})

const scroller = document.querySelectorAll('.products_imgs')
for(const item of scroller){
    item.addEventListener('wheel',(e)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}