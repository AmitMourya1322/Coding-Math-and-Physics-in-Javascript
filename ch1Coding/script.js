window.onload=()=>{
    var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d")
    width = canvas.width= window.innerWidth,
    height = canvas.height = window.innerHeight

    for( var i=0 ; i<50;i+=1){
        context.beginPath()
        context.moveTo(Math.random()*width,Math.random()*height)
        context.lineTo(Math.random()*width,Math.random()*height)
        context.stroke()
    }
}