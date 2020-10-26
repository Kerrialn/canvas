const body = document.querySelector('body');
const canvas = document.querySelector('#canvas');
const circleSize = document.querySelector('#circleSize');
const randomize = document.querySelector('#randomize');
const type = document.querySelector('#type');
const red = document.querySelector('#red'); 
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const alpha = document.querySelector('#alpha');
const strokeOrFill = document.querySelector('#strokeOrFill');
const colorMe = document.querySelector('#colorMe');




let ctx = canvas.getContext('2d');
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const clearCanvas = () =>{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
} 

document.addEventListener('DOMContentLoaded', function() {
  changeColor();
});


const downloadImage = () => {
let img = new Image();
img.classList.add("col");
img.classList.add("m4");
img.classList.add("preview-image");

img.src = canvas.toDataURL();
document.querySelector('#preview-holder').appendChild(img);
}


const changeColor = () => {

  type.value = Math.floor(Math.random() * 2) + 1;
  strokeOrFill.value = Math.floor(Math.random() * 2) + 1;
  randomize.value = Math.floor(Math.random() * 2) + 1;

  red.value = Math.floor(Math.random() * 255);
  green.value = Math.floor(Math.random() * 255);
  blue.value = Math.floor(Math.random() * 255);
  alpha.value = Math.random(0,1)
  circleSize.value = Math.floor(Math.random() * 50);
  body.style.backgroundColor = 'rgba('+red.value+', '+green.value+', '+blue.value+', '+alpha.value+')'
}


canvas.addEventListener('mousemove', (event)=>{

  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {

    let shape = new Path2D();
    let x = event.offsetX;
    let y = event.offsetY;
    
    let rr = Math.floor(Math.random() * 256);
    let rg = Math.floor(Math.random() * 256);
    let rb = Math.floor(Math.random() * 256);

    let size = Math.floor(circleSize.value * 2);
    let randomizer = Math.floor(Math.random() * randomize.value);
    let r = red.value;
    let g = green.value;
    let b = blue.value; 
    let a = alpha.value;


      if(type.value == 1){
        shape.arc(x+j*randomizer, y+i*randomizer, size, 0, Math.PI * 2, true);
      }
  
      if(type.value == 2){
        shape.rect(x+j*randomizer, y+i*randomizer, size, size);
      }

      if(strokeOrFill.value == 1){
        if(colorMe.checked){
          ctx.strokeStyle = 'rgba('+rr+', '+rg+', '+rb+', 1)';
          body.style.backgroundColor = 'rgba('+ r +', ' + g + ', ' + b + ', '+a+')'; 
        }else{
          ctx.strokeStyle = 'rgba('+ r +', ' + g + ', ' + b + ', '+a+')';  
          body.style.backgroundColor = 'rgba('+ r +', ' + g + ', ' + b + ', '+a+')'; 
        }
        ctx.stroke(shape);
      }

      if(strokeOrFill.value == 2){
        if(colorMe.checked){
          ctx.fillStyle = 'rgba('+rr+', '+rg+', '+rb+', 1)';
          body.style.backgroundColor = 'rgba('+ r +', ' + g + ', ' + b + ', '+a+')'; 
        }else{
          ctx.fillStyle = 'rgba('+ r +', ' + g + ', ' + b + ', '+a+')';  
          body.style.backgroundColor = 'rgba('+ r +', ' + g + ', ' + b + ', '+a+')'; 
        }
        ctx.fill(shape);
      }
  

    }
  }

})