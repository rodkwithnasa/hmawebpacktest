import printMe from './print.js';
import htmlUrl from '../index.html';


function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = ['Hello', 'webpack'].join(' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  console.log("HTML is available at:",htmlUrl); 

  element.appendChild(btn);
  
  return element;
}

document.body.appendChild(component());