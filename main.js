const grid = document.getElementById('grid');
const button= document.getElementById('play');


const createCell = () => {
    const cell = document.createElement('div');
    cell.className= 'cell';
    return cell;
} 


button.addEventListener('click', function(){

    for(i= 0 ; i < 100; i ++){
      const cell = createCell();  
      grid.appendChild(cell);
      cell.innerText= i + 1;

      cell.addEventListener('click', function(){

        cell.classList.add = ('clicked');
      })
    }

})