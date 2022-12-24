
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
x_new_value = document.getElementById('x_slider')
function change_X(){
  group.x(x_new_value.value)
};
y_new_value = document.getElementById('y_slider')
function change_Y(){
  group.y(-y_new_value .value)
};
scale_x_new_value = document.getElementById('scale_slider_x')
function change_Scale_x(){
  group.scaleX(scale_x_new_value.value)
};
scale_y_new_value = document.getElementById('scale_slider_y')
function change_Scale_y(){
  group.scaleY(scale_y_new_value.value)
};
rotate_new_value = document.getElementById('rotation_slider')
function change_Rotation(){
  group.rotation(rotate_new_value.value)
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