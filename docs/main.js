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
  red.value = Math.floor(Math.random() * 255);
  green.value = Math.floor(Math.random() * 255);
  blue.value = Math.floor(Math.random() * 255);
  alpha.value = Math.random(0,1)

  body.style.backgroundColor = 'rgba('+red.value+', '+green.value+', '+blue.value+', '+alpha.value+')'
}


let ctx = canvas.getContext('2d');
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener('mousemove', (event)=>{

  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {

    let shape = new Path2D();
    let x = event.offsetX;
    let y = event.offsetY;
    let rand = Math.floor(Math.random() * 11);
    let rand2 = Math.floor(Math.random() * 51);
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
          ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' + 
          Math.floor(255 - 32.5 * j) + ')';

          body.style.backgroundColor = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' + 
          Math.floor(255 - 42.5 * j) + ')';
        }else{
          ctx.strokeStyle = 'rgba('+ r +', ' + g + ', ' + b + ', '+a+')';  
          body.style.backgroundColor = 'rgba('+ r +', ' + g + ', ' + b + ', '+a+')'; 
        }
        ctx.stroke(shape);
      }

      if(strokeOrFill.value == 2){
        if(colorMe.checked){
          ctx.fillStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' + 
          Math.floor(255 - 42.5 * j) + ')';

          body.style.backgroundColor = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' + 
          Math.floor(255 - 42.5 * j) + ')';

        }else{
          ctx.fillStyle = 'rgba('+ r +', ' + g + ', ' + b + ', '+a+')';  
          body.style.backgroundColor = 'rgba('+ r +', ' + g + ', ' + b + ', '+a+')'; 
        }
        ctx.fill(shape);
      }
  

    }
  }

})