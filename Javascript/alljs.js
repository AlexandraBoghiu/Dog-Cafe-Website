let number = Math.floor(Math.random() * 3) + 1;
let icon1 = document.getElementsByClassName('fas fa-home');
let icon2 = document.getElementsByClassName('fas fa-dog');
let icon3 = document.getElementsByClassName('fas fa-coffee');
let icon4 = document.getElementsByClassName('fas fa-exclamation-circle');
let icon5 = document.getElementsByClassName('fas fa-users');
let icon6 = document.getElementsByClassName('fas fa-question-circle');
let icon7 = document.getElementsByClassName('fas fa-address-card');
let icon8 = document.getElementsByClassName('fas fa-tv');

if(number == 1){
icon1[0].style.color = 'black';
icon2[0].style.color = '#A9A9A9';
icon3[0].style.color = '#5E595C';
icon4[0].style.color = '#27180E';
icon5[0].style.color = '#5A4F48';
icon6[0].style.color = '#29190E';
icon7[0].style.color = '#45352B';
icon8[0].style.color = '#1C1B1B';
}

else if (number == 2){
icon1[0].style.color = '#302F2D';
icon2[0].style.color = '#FEFDF8';
icon3[0].style.color = '#756357';
icon4[0].style.color = '#1C1B1B';
icon5[0].style.color = 'black';
icon6[0].style.color = '#A9A9A9';
icon7[0].style.color = '#27180E';
icon8[0].style.color = '#D3D1CB';
}

else{
icon1[0].style.color = '#45352B';
icon2[0].style.color = '#29190E';
icon3[0].style.color = '#1C1B1B';
icon4[0].style.color = 'black';
icon5[0].style.color = '#5A4F48';
icon6[0].style.color = '#C4C3C0';
icon7[0].style.color = '#6F6F6F';
icon8[0].style.color = '#5E595C';
}
