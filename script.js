
const h1Element=document.querySelector('.heading');
const h1Parent=h1Element.closest('.heading');
console.log(h1Parent);
h1Parent.style.borderTop='grey solid 5px';


const packageTitleElement=document.querySelectorAll('.package-title');
for(let item of packageTitleElement){
    item.previousElementSibling.style.border='2px solid #072f5f'
}

const infoElement=document.querySelector('.info ');
const labelElement=infoElement.querySelectorAll('label');
console.log(labelElement)
for(let item of labelElement){
    console.log(item.className);
    if(item.matches('.mild')){
        item.style.borderBottom='3px solid yellow';
    }
    else if(item.matches('.intense')){
        item.style.borderBottom='3px solid orange';
    }
    else{
        item.style.borderBottom='3px solid red';
    }
}

const navListElement=document.querySelector('ul.nav-list');
const navListChildren=navListElement.querySelectorAll('li');
const siteMapElement=document.querySelector('ul.site-map');
navListChildren.forEach(item =>{
    const copiedItem = item.cloneNode(true);
    siteMapElement.append(copiedItem);

})


/*
navListChildren.forEach(item => {

    const newItem = document.createElement('li');

    newItem.innerHTML = item.innerHTML;
    
    Array.from(item.attributes).forEach(attr => {
      newItem.setAttribute(attr.name, attr.value);
    });

    siteMapElement.appendChild(newItem);
  });
  */