const tagsElements = document.getElementById('tags');

const textarea = document.getElementById('textarea');


textarea.addEventListener('keyup',(e)=>{

  createTags(e.target.value)
  if(e.key === 'Enter') {
    e.target.value = '';

    // start random selector function
    randomSelector();
  }


});

function createTags(input) {
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag =>tag.trim());

  tagsElements.innerHTML = '';
  

  tags.forEach(tag => {
    const tagElement = document.createElement('span');
    tagElement.classList.add("tag");
    tagElement.innerText = tag;

    tagsElements.appendChild(tagElement);
  });

    
    console.log(tags.length);

  
}

function randomSelector() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag  = pickRandomTag();
    highlightTag(randomTag);

    setTimeout(()=> {
      unhighlightTag(randomTag);
    },100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)]
}
// console.log(pickRandomTag);
function highlightTag(tag) {
  tag.classList.add('active');
}
function unhighlightTag(tag) {
  tag.classList.remove('active');
}
