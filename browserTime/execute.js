const timer = 5
const titleValue = document.title
const titleObjValue =  Object(titleValue)
let num = timer * 60
let gap;
 const setter = () => {
    if (num > 1) {
        num--
  document.title = `${titleObjValue[0]}${titleObjValue[1]}${titleObjValue[2]}${titleObjValue[3]}${titleObjValue[4]} | SDI ${num}`
} else {
    window.open('', '_self');
    window.close();
}
 }
const shutDown = () =>{
document.addEventListener("visibilitychange", () => {
if (document.hidden) {
    console.log('Countdown started')
gap = setInterval(setter , 1000)
} else{
    console.log('Countdown back to default')
clearInterval(gap)
num = timer * 60
document.title = titleValue
}
})
}
shutDown()