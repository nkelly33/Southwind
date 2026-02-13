document.addEventListener("DOMContentLoaded", function() {
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: 'MM-dd'
  });
  const happyAnimate = document.getElementById('Happy');
  let random = Math.floor(Math.random()*3);
  console.log(random);
  const animateClasses = ["animate__heartBeat", "animate__bounce", "animate__rubberBand"];
  happyAnimate.classList.add(animateClasses[random]);

  // uncheck all boxes by default (Firefox)
  document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
  // event listener for check/uncheck
  document.getElementById('checkbox-card').addEventListener('change', function(e){
    if (e.target.classList.contains('form-check-input')) {
      const elem = document.getElementById(e.target.id + 'Img');
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      e.target.checked ?
        elem.classList.add("animate__animated", "animate__bounceInDown") :
        elem.classList.add("animate__animated", "animate__bounceOutUp");
    }
  });
    const happy = document.getElementById('Happy');

  const red = document.getElementById('red');
  red.addEventListener('mouseenter', function(e){
    happy.style.color = "red";
  });
  red.addEventListener('mouseleave', function(e){
    happy.style.color = "black";
  });
  const blue = document.getElementById('blue');
  blue.addEventListener('mouseenter', function(e){
    happy.style.color = "blue";
  });
  blue.addEventListener('mouseleave', function(e){
    happy.style.color = "black";
  });
  const green = document.getElementById('green');
  green.addEventListener('mouseenter', function(e){
    happy.style.color = "green";
  });
  green.addEventListener('mouseleave', function(e){
    happy.style.color = "black";
  });
  document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault();
    if (red.checked === false && blue.checked === false && green.checked === false) {
      document.getElementById('liveToast').classList.add('show');
    console.log("Please select a balloon color!");
    }
  
});
document.getElementById('checker').addEventListener('click', function(e){
  e.preventDefault();
  if (red.checked === false && blue.checked === false && green.checked === false) {
    red.checked = true;
    blue.checked = true;
    green.checked = true;
  }else if
  (red.checked === true && blue.checked === true && green.checked === true) {
    red.checked = false;
    blue.checked = false;
    green.checked = false;
  }
});
});
