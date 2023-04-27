// // const westBengalbtn = document.getElementById("MAP1");
// const locationMapbtn = document.getElementById("MAP2");
// // const westBengalImg = document.getElementById("WestBengal");
// const LocationImg = document.getElementById("Location");
// // var ind = 0;
// const end = 500;
// // const map1 = westBengalImg.alt;
// const map2 = LocationImg.alt;
// // var path1 = "images\\westBengal\\westBengal_"
// var path2 = "images\\westBengal\\westBengal_"
// // var mapHolder1 = westBengalImg;
// var mapHolder2 = LocationImg;
// vidSpeed = 0.05;
// // var play1 = false;
// var play2 = false;
// let timeout1, timeout2;


// westBengalbtn.addEventListener("click", () => {
//     if(!play1){
//         play1 = true;
//         path1 = "images\\" + map1 + "\\" + map1 + "_";
//         mapHolder1 = westBengalImg;
//         PlayMap1();
//     }

// });

// locationMapbtn.addEventListener("click", () => {
//     if(!play2){
//         play2 = true;
//         path2 = "images\\" + map2 + "\\" + map2 + "_";
//         mapHolder2 = LocationImg;
//         PlayMap2();
//     }
    
// });

// function ShowMap1(day) {
//     var str = "" + day;
//     var pad = "0000";
//     var suffix = pad.substring(0, pad.length - str.length) + str;

//     let imgSrc = path1 + suffix + ".png";
//     mapHolder1.setAttribute("src", imgSrc);
// }

// function ShowMap2(day) {
//     var str = "" + day;
//     var pad = "0000";
//     var suffix = pad.substring(0, pad.length - str.length) + str;

//     let imgSrc = path2 + suffix + ".png";
//     mapHolder2.setAttribute("src", imgSrc);
// }

// function PlayMap1() {
    
//     for (let i = 0; i <= end; i++) {
//         timeout1 = setTimeout(() => {
//             console.log(i);
//             ShowMap1(i);
//             if (i === 500) {
//                 play1 = false;
//             }
//         }, vidSpeed * 1000 * i);
//     }
//     clearTimeout(timeout1);

// }

// function PlayMap2() {

    
//     for (let i = 0; i <= end; i++) {
//         timeout2 = setTimeout(() => {
//             console.log(i);
//             ShowMap2(i);
//             if (i == 499) {
//                 play2 = false;
//             }
//         }, vidSpeed * 1000 * i);
        
//     }
    
//     clearTimeout(timeout2);

// }


var myVideo1 = document.getElementById("video1"); 
var myVideo2 = document.getElementById("video2"); 
var play_pause_status1 = false;
var play_pause_status2 = false;

function playPause1() { 
  if (play_pause_status1) {
    myVideo1.pause();
    play_pause_status1 = false;
  }
  else {
    myVideo1.play(); 
    play_pause_status1 = true;
  }
 
} 


function playPause2() { 
    if (play_pause_status2) {
      myVideo2.pause();
      play_pause_status2 = false;
    }
    else {
      myVideo2.play(); 
      play_pause_status2 = true;
    }
   
  } 
