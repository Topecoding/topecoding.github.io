let mykey = ["q","w","e","r","t","y","u",
               "i","o","p","a","s","d","f",
               "g","h","j","k","l"];
const mydiv = document.querySelectorAll(".justkey")
const tone = document.querySelectorAll(".one")
document.addEventListener("keydown", (event)=>{
if(event.repeat)return
mykey.forEach((keyss, index)=> {
      if(event.key === keyss){
    tone[index].play();
   mydiv[index].classList.add("active")}
})

})
document.addEventListener("keyup", (event)=>{

    mykey.forEach((keyss, index)=> {
          if(event.key === keyss){
       tone[index].pause()
       tone[index].currentTime = 0;
            mydiv[index].classList.remove("active")}
    })
    
    })
    mydiv.forEach((key, index)=>{
        
    mydiv[index].addEventListener("click", ()=>{
    
        mydiv[index].classList.add("active")
        tone[index].play();
        console.log(tone[index])

    })
        mydiv[index].addEventListener("mouseout", ()=>{
            mydiv[index].classList.remove("active")
            tone[index].pause();
            tone[index].currentTime =0
        
    
    })
        
        })
        