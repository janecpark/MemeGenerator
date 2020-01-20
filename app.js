const form = document.querySelector('#form');
const image = document.querySelector('#url');
const textTop = document.querySelector('#text-top');
const textBtm = document.querySelector('#text-bottom');
const result = document.querySelector('#results')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const imageInput = image.value; 
    const topInput = textTop.value 
    const bottomInput = textBtm.value 
    createImage(imageInput, topInput, bottomInput)
    form.reset()

})

result.addEventListener('click', function(e){
    const clicked = e.target;
    if(clicked.parentElement.parentElement.classList.contains('meme')){
        clicked.parentElement.parentElement.remove()
       
    }
})

function createImage(img,top,bottom){
    const div = document.createElement('div')
    div.setAttribute('class', 'meme')
    const imageUI = document.createElement('img');
    const divTop = document.createElement('div')
    divTop.setAttribute('class', 'top')
    divTop.innerText = top;
    const divBtm = document.createElement('div')
    divBtm.setAttribute('class', 'bottom')
    divBtm.innerText = bottom;
    imageUI.setAttribute('src', img);
    imageUI.setAttribute('class', 'img');
    div.append(imageUI, divTop, divBtm);
    result.append(div)
    const overlay = document.createElement('div')
    overlay.setAttribute('class', 'overlay')
    const del = document.createElement('i')
    del.classList.add('far', 'fa-trash-alt', 'fa-10x')
    overlay.appendChild(del)
    div.append(overlay)
}
