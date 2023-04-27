
const vacdata= [
  {
      dist: "Patna",
      vac_avl:1000,
      rate: 0.04,
      popul:2000,
  },
  {
      dist: "Kolkata",
      vac_avl:2000,
      rate: 0.02,
      popul:2000,
  },
  {
      dist: "Bhubaneshwar",
      vac_avl:3000,
      rate: 0.02,
      popul:3000,
  },
  {
      dist: "Kharagpur",
      vac_avl:4000,
      rate: 0.02,
      popul:4000,
  },
]

//const vacdata=require('vacdata')
//console.log(vacdata[0].vac_avl);
// Get the dropdown element
const dropdown = document.getElementById("DistrictDropdown");
const mapHolder = document.getElementById("DAYMAP");
var vidSpeed = 0.2;
var selCity;
var endDay = 0;

// Attach an event listener to the dropdown
dropdown.addEventListener("change", function() {
  // Get the selected value
//   console.log(dropdown);
  const selectedValue = dropdown.value;
  const selectedind=dropdown.selectedIndex;
  //console.log("sel value is " + selectedValue);
  // Call your function with the selected value
  myFunction(selectedind);
});

// Your function that will be called when the dropdown value is changed
function myFunction(selectedind) {
    document.getElementById("show").style.display='flex';
    document.getElementById("indata").style.display='block'
  //console.log("The selected value is: " + selectedind);
  // Do something with the selected value
  document.getElementById("vacdone").innerHTML=0;
  document.getElementById("vacrem").innerHTML=vacdata[selectedind-1].vac_avl;
  document.getElementById("perrem").innerHTML=vacdata[selectedind-1].popul;
  document.getElementById("selectday").style.display='block';
  document.getElementById("getdata").style.display='inline';
  document.getElementById("PLAYVID").style.display='inline';
  document.getElementById("indata").innerHTML="~: Initial Data :~"

  // Showing MAP
  selCity = vacdata[selectedind-1].dist;
  const day = 0;
  ShowMap(day);

}

 function getcurdata(){
  // Get the selected value1
//   console.log(dropdown);
  const day = document.getElementById("seld").value;
  //console.log(day);
  //console.log("sel value is " + selectedValue);
  // Call your function with the selected value
  currdata(day);
  endDay = day;

  //show map
  ind = document.getElementById("myDropdown").selectedIndex;
  const cityName = vacdata[ind-1].dist;
  ShowMap(day);
  clearTimeout();
}

function ShowMap(day){
var str = "" + day
var pad = "0000"
var suffix = pad.substring(0, pad.length - str.length) + str

  let imgSrc = "imageData\\Patna\\patna_0_" + suffix+".png";
  mapHolder.setAttribute("src", imgSrc);
}


function PlayMap(){
  endDay = document.getElementById("seld").value;
 
  for(let i = 0; i <= endDay; i++){
    
    setTimeout(()=>{console.log(i);ShowMap(i)}, vidSpeed*1000*i);
  }
  clearTimeout();
}

function currdata(day){
  if(day==NaN)
  console.log("Enter Integer as day number");
  day=parseInt(day);
  console.log(day);
  
 document.getElementById("indata").innerHTML=`~: Data after day ${day} :~`
  ind = document.getElementById("myDropdown").selectedIndex;
  let dose= new Array,vacrem= new Array,dem= new Array;
  let v=vacdata[ind-1].vac_avl;
  let x=vacdata[ind-1].rate;
  let p=vacdata[ind-1].popul;
  let d=day;

  dose.push(0);
  vacrem.push(v);
  dem.push(p);
  let i=1;
  let tdose=0;
  while(i<=d)
  {
    if(i%30 == 1 && i!=1){
      vacrem[i-1] +=v;
  }
  if(i>90 && tdose< (2*p)){
      dem[i-1]+=dose[i-90];
  }
  dose[i] =  parseInt(vacrem[i-1]*x);
  if(dose[i] >dem[i-1]){
      dose[i]=  dem[i-1];
  }
  tdose+=dose[i];
  vacrem[i] =  vacrem[i-1] - dose[i];
  dem[i] = dem[i-1] - dose[i];
  // cout<<i<<" "<<dose[i]<<" "<<vacrem[i]<<" "<<dem[i]<<" "<<tdose<<endl;
  i++;
  }
  document.getElementById("vacdone").innerHTML=tdose;
  document.getElementById("vacrem").innerHTML=vacrem[d];
  document.getElementById("perrem").innerHTML=2*p-tdose;
  
}