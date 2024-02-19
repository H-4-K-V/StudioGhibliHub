import { createCards } from "./modules/cardModule.js";

await createCards();
const input = document.querySelector('#input-search');
const cards = document.querySelectorAll('#card-wrapper div');

input.addEventListener('input', (e)=> {
    const searchItem = e.target.value.toLowerCase();

    for(const card of cards){
        const titleElement = card.querySelector('aside h2').textContent;
        const title = titleElement ? titleElement.toLowerCase() : '';

        if(title.includes(searchItem)){
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
})