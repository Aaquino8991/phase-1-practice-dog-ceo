console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
  loadImages();
  loadBreeds();
});

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
let breedsArray;

function loadImages() {
  return fetch(imgUrl)
  .then(res => res.json())
  .then(img => {
    img.message.forEach(element => addImage(element))
  });
};

function addImage(picture) {
  const container = document.getElementById('dog-image-container');
  const newImg = document.createElement('img');
  newImg.src = picture;
  container.appendChild(newImg)
};

function loadBreeds() {
  return fetch(breedUrl)
  .then(res => res.json())
  .then(breed => {
    breedsArray = Object.keys(breed.message);
    addToList(breedsArray)
  })
}

function addToList(breeds) {
  const ul = document.getElementById('dog-breeds')
  breeds.forEach(breed => {
    const li = document.createElement('li')
    li.innerText = breed;
    ul.appendChild(li);
    li.addEventListener('mouseenter', (e) => { 
      e.target.style.color = 'magenta'
    })
    li.addEventListener('mouseleave', (e) => { 
      e.target.style.color = 'black'
    })
  })
}
window.addEventListener('DOMContentLoaded', () =>{
  let breedFilter = document.getElementById('breed-dropdown');
  let breedList = document.getElementById('dog-breeds').getElementsByTagName('li');

  breedFilter.addEventListener('change', function() {
    let selectedLetter = breedFilter.value;
    for (let i = 0; i < breedList.length; i++) {
      var breedName = breedList[i].textContent;
      if (selectedLetter === '' || breedName.charAt(0).toLowerCase() === selectedLetter) {
        breedList[i].style.display = 'block';
      } else {
        breedList[i].style.display = 'none';
      }
    }
  })
})