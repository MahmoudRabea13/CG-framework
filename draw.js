
// colorPicker = document.getElementById("color-picker"),
// colorbtns = document.querySelectorAll(".colors .option");
// color_selc= window.getComputedStyle(document.querySelector(".colors .options .selected")).getPropertyValue("background-color");



// colorPicker.addEventListener("change", () => {
//     // passing picked color value from color picker to last color btn background
//     colorPicker.parentElement.style.background = colorPicker.value;
//     color_selc=colorPicker.value;
// });
// colorbtns.forEach(btn => {

//   btn.addEventListener("click", () =>{
//     document.querySelector(".colors .options .selected").classList.remove('selected');
//     btn.classList.add('selected');
//     color_selc = window.getComputedStyle(btn).getPropertyValue("background-color");
//     console.log(color_selc);

//   })
// });


let stage = new Konva.Stage({
  container: 'Konva-holder',
  width: 810,
  height: 700,
});

let layer = new Konva.Layer().moveTo(stage);

let group = new Konva.Group({
x:0,
y:0,
}).moveTo(layer);
var rect = new Konva.Rect({
          x:200,
          y: 350,
          width: stage.width()/2,
          height: stage.height()/2,
          fill: '#0b4906',
          stroke:'#000000',

        });
        layer.add(rect);
        stage.add(layer);
       


var Triangle = new Konva.RegularPolygon({
          x:402,
          y:233,
          sides: 3,
          radius: 234,
          fill:'#f8e5b5',
          stroke:'#000000',
        });
        // layer.add(Triangle);
        stage.add(layer);
        


var rect2 = new Konva.Rect({
          x:300,
          y: 550,
          width: 100,
          height: 150,
          fill: '#634b0f',
          stroke:'#000000',
        });
        // layer.add(rect2);
        stage.add(layer);

var rect3 = new Konva.Rect({
          x:401,
          y: 550,
          width: 100,
          height: 150,
          fill: '#634b0f',
          stroke:'#000000',
        });
        // layer.add(rect3);
        stage.add(layer);



      
var circle = new Konva.Circle({
    x: 375,
    y: 650,
    radius:4,
    fill:'#fff82c',

  });
  // layer.add(circle);
  stage.add(layer);

       
var circle2 = new Konva.Circle({
  x: 430,
  y: 650,
  radius:4,
  fill:'#fff82c',

});
// layer.add(circle2);
stage.add(layer);

          

var rect4 = new Konva.Rect({
  x:250,
  y: 400,
  width: 70,
  height: 70,
  fill: '#cfeaed',
  stroke:'#000000',
});
layer.add(rect4);
stage.add(layer);


var rect5 = new Konva.Rect({
  x:485,
  y: 400,
  width: 70,
  height: 70,
  fill: '#cfeaed',
  stroke:'#000000',
});
layer.add(rect5);
stage.add(layer);
group.scaleX(0.5);
group.scaleY(0.5);
group.x(400);
group.y(300);
temp_x = 0;
temp_y = 0;
temp_scale_x = 0;
temp_scale_y = 0;
temp_rotate = 0;
x_new_value = document.getElementById('x_slider')
function change_X(){
  rect.x(+rect.getX() + +(x_new_value.value-temp_x))
  Triangle.x(+Triangle.getX() + +(x_new_value.value-temp_x))
  rect2.x(+rect2.getX() + +(x_new_value.value-temp_x))
  rect3.x(+rect3.getX() + +(x_new_value.value-temp_x))
  circle.x(+circle.getX() + +(x_new_value.value-temp_x))
  circle2.x(+circle2.getX() + +(x_new_value.value-temp_x))
  rect4.x(+rect4.getX() + +(x_new_value.value-temp_x))
  rect5.x(+rect5.getX() + +(x_new_value.value-temp_x))
  temp_x = +x_new_value.value
};
y_new_value = document.getElementById('y_slider')
function change_Y(){
  rect.y(+rect.getY() + -(y_new_value.value-temp_y))
  Triangle.y(+Triangle.getY() + -(y_new_value.value-temp_y))
  rect2.y(+rect2.getY() + -(y_new_value.value-temp_y))
  rect3.y(+rect3.getY() + -(y_new_value.value-temp_y))
  circle.y(+circle.getY() + -(y_new_value.value-temp_y))
  circle2.y(+circle2.getY() + -(y_new_value.value-temp_y))
  rect4.y(+rect4.getY() + -(y_new_value.value-temp_y))
  rect5.y(+rect5.getY() + -(y_new_value.value-temp_y))
  temp_y = +y_new_value.value
};
scale_x_new_value = document.getElementById('scale_slider_x')
function change_Scale_x(){
  rect.ScaleX(+rect.getScaleX() + +(scale_x_new_value.value-temp_scale_x))
  Triangle.ScaleX(+Triangle.getScaleX() + +(scale_x_new_value.value-temp_scale_x))
  rect2.ScaleX(+rect2.getScaleX() + +(scale_x_new_value.value-temp_scale_x))
  rect3.ScaleX(+rect3.getScaleX() + +(scale_x_new_value.value-temp_scale_x))
  circle.ScaleX(+circle.getScaleX() + +(scale_x_new_value.value-temp_scale_x))
  circle2.ScaleX(+circle2.getScaleX() + +(scale_x_new_value.value-temp_scale_x))
  rect4.ScaleX(+rect4.getScaleX() + +(scale_x_new_value.value-temp_scale_x))
  rect5.ScaleX(+rect5.getScaleX() + +(scale_x_new_value.value-temp_scale_x))
  temp_scale_x = +scale_x_new_value.value
};
scale_y_new_value = document.getElementById('scale_slider_y')
function change_Scale_y(){
  rect.ScaleY(+rect.getScaleY() + +(scale_y_new_value.value-temp_scale_y))
  Triangle.ScaleY(+Triangle.getScaleY() + +(scale_y_new_value.value-temp_scale_y))
  rect2.ScaleY(+rect2.getScaleY() + +(scale_y_new_value.value-temp_scale_y))
  rect3.ScaleY(+rect3.getScaleY() + +(scale_y_new_value.value-temp_scale_y))
  circle.ScaleY(+circle.getScaleY() + +(scale_y_new_value.value-temp_scale_y))
  circle2.ScaleY(+circle2.getScaleY() + +(scale_y_new_value.value-temp_scale_y))
  rect4.ScaleY(+rect4.getScaleY() + +(scale_y_new_value.value-temp_scale_y))
  rect5.ScaleY(+rect5.getScaleY() + +(scale_y_new_value.value-temp_scale_y))
  temp_scale_y = +scale_y_new_value.value
};
rotate_new_value = document.getElementById('rotation_slider')
function change_Rotation(){
  rect.rotate(+rect.getRotation() + +(rotate_new_value.value-temp_rotate))
  Triangle.rotate(+Triangle.getRotation() + +(rotate_new_value.value-temp_rotate))
  rect2.rotate(+rect2.getRotation() + +(rotate_new_value.value-temp_rotate))
  rect3.rotate(+rect3.getRotation() + +(rotate_new_value.value-temp_rotate))
  circle.rotate(+circle.getRotation() + +(rotate_new_value.value-temp_rotate))
  circle2.rotate(+circle2.getRotation() + +(rotate_new_value.value-temp_rotate))
  rect4.rotate(+rect4.getRotation() + +(rotate_new_value.value-temp_rotate))
  rect5.rotate(+rect5.getRotation() + +(rotate_new_value.value-temp_rotate))
  temp_rotate = +rotate_new_value.value
};

group.add(rect,Triangle,rect2,rect3,circle,circle2,rect4,rect5);
group.draggable(true);




// document.getElementById('Draw Circle').addEventListener('click',draw_C);
// document.getElementById('Draw_Rectangle').addEventListener('click',draw_R);
// document.getElementById('Draw Square').addEventListener('click',draw_S);
// document.getElementById('Draw Triangle').addEventListener('click',draw_T);
// document.getElementById('Move').addEventListener('click',draw_T);



// function draw_R(){
//     var rect = new Konva.Rect({
//         x: 20,
//         y: 20,
//         width: 100,
//         height: 50,
//         fill: color_selc,
//         draggable:true,
//       });
//       layer.add(rect);
//       stage.add(layer);
//       }

// function draw_C(){
//     var circle = new Konva.Circle({
//         x: stage.width() / 2,
//         y: stage.height() / 2,
//         radius: 70,
//         fill: color_selc,
//         draggable:true,
    
//       });
//       layer.add(circle);
//       stage.add(layer);
//     }


// function draw_S(){
//         var square= new Konva.Rect({
//             x: 20,
//             y: 20,
//             width: 100,
//             height: 100,
//             fill: color_selc,
//             draggable:true,
//           });
//           layer.add(square);
//           stage.add(layer);
//           }


// function draw_T(){
//             var Triangle = new Konva.RegularPolygon({
//                 x:100,
//                 y:100,
//                 sides: 3,
//                 radius: 70,
//                 fill: color_selc,
//                 draggable:true,
//               });
//               layer.add(Triangle);
//               stage.add(layer);
//               }