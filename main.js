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


console.log(colorMe.value)

let ctx = canvas.getContext('2d');

canvas.addEventListener('mousemove', (event)=>{

  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {

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
        }else{
          ctx.strokeStyle = 'rgba('+ r +', ' + g + ', ' + b + ', '+a+')';  
        }
        ctx.stroke(shape);
      }

      if(strokeOrFill.value == 2){
        if(colorMe.checked){
          ctx.fillStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' + 
          Math.floor(255 - 42.5 * j) + ')';
        }else{
          ctx.fillStyle = 'rgba('+ r +', ' + g + ', ' + b + ', '+a+')';  
        }
        ctx.fill(shape);
      }
  

    }
  }

})