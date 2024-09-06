/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
  let action = ['comió', 'pisó', 'aplastó', 'rompió'];
  let what = ['mi tarea', 'mi teléfono', 'el auto'];
  let when = ['antes de la clase', 'cuando dormía', 'mientras hacía ejercicio', 'durante mi almuerzo', 'mientras oraba'];


  let txt1 = Math.floor(Math.random()* who.length);
  let txt2 = Math.floor(Math.random()* action.length); 
  let txt3 = Math.floor(Math.random()* what.length);
  let txt4 = Math.floor(Math.random()* when.length);

  document.getElementById("excuses").innerHTML = who[txt1] + action[txt2] + what[txt3] + when[txt4]; 


  console.log("Hello Rigo from the console!");
};
