let count = 1;
const links = ["link1", "link2", "link3", "link4"];

document.getElementById("radio1").checked = true;

setInterval(function(){
  nextImage();
}, 7000);

function nextImage(){
  count++;
  document.getElementsByClassName("btn-img")[0].href = links[count - 1];
  if(count > 3){
    count = 1;
  }

  document.getElementById("radio"+count).checked = true;
}