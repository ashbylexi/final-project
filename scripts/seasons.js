let info = document.querySelectorAll('.info');
let buttons = document.querySelectorAll('.button');

function hideAll() {
  info.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();

buttons.forEach(function(el) {
  el.onclick = (e) => {

    hideAll();



    switch (e.target.getAttribute('id')) {
      case 'summer-button':
        document.querySelector('#summer')
        	.style.display = 'block';
        document.body.style.backgroundColor = "#FFBDE9";
        document.querySelector('#summer-title').style.backgroundColor = "#FFDCFA";
        break;
      case 'spring-button':
        document.querySelector('#spring')
        	.style.display = 'block';
        document.body.style.backgroundColor = "#B9E6B8";
        document.querySelector('#spring-title').style.backgroundColor = "#E1FAE0";
        break;
      case 'winter-button':
        document.querySelector('#winter')
          .style.display = 'block';
        document.body.style.backgroundColor = "#ABE2FF";
        document.querySelector('#winter-title').style.backgroundColor = "#EBFBFC";
        break;
      case 'fall-button':
        document.querySelector('#fall')
          .style.display = 'block';
        document.body.style.backgroundColor = "#FFCCAE";
        document.querySelector('#fall-title').style.backgroundColor = "#FBF0E3";
        break;
    }


  };

}); 
