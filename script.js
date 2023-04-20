 //functions  
//creates grid
function createGrid(number){
  let idNum = 1;
  for (let y = 1; y <= number; y++) {
      const maincontainer = document.querySelector('.containAll');
      const mainDiv = document.createElement('div');
      mainDiv.classList.add('grid-container');
      for (let i = 1; i <= number; i ++) {
          const child = document.querySelector('.grid-container');
          const children = document.createElement('div');
          children.classList.add('griditem');
          children.setAttribute("id", idNum);
          children.textContent = '';
          mainDiv.appendChild(children);
          maincontainer.appendChild(mainDiv);   
          idNum ++;        
   }
      idNum ++;
 }  
}

//transforms dots color
function transform (e) {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);

  const divNum = container.querySelector(`div[id="${e.target.id}"]`);
  if(!divNum) return;
  divNum.style.borderColor = ("#" + randomColor);
  divNum.style.backgroundColor = ( "#" + randomColor);
}
//Removes all created divs

function reset(){
  const boxs = document.querySelectorAll('.grid-container');
  let container = boxs.length;
  boxs.forEach( box => {
      box.parentNode.removeChild(box);
  });
}
//for clearAll button
function radioSelection(number){
  reset();
  createGrid(number);
}
//reset grid 
function goBack(){
  amount = document.querySelectorAll('.grid-container').length;
  reset();
  createGrid(amount);
}

createGrid(16);

const container = document.querySelector('.containAll');
container.addEventListener('mouseover', transform);
 