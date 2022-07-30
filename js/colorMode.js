const btn = document.querySelector('#btn');


const iconSun = document.createElement("i");
const iconMoon = document.createElement("i");

iconSun.setAttribute('class', 'bx bx-sun')
iconMoon.setAttribute('class',  'bx bx-moon')



if(document.body.classList == 'dark') {
  btn.appendChild(iconSun)
}

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if(document.body.classList == ''){
      btn.appendChild(iconMoon)
      btn.removeChild(iconSun);
    }  else if(document.body.classList == 'dark'){
      btn.removeChild(iconMoon)
      btn.appendChild(iconSun)
    }
});
