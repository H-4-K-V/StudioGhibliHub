import { apiConnection } from "./connectionModule.js";

const wrapper = document.querySelector('#card-wrapper');

function createElement(type, className = '') {
    const element = document.createElement(type);
    if (className) {
        element.classList.add(...className.split(' '));
    }
    return element;
}

function createCardElement(el) {
    const card = createElement('div', 'flex flex-col w-[240px]');
    const image = createElement('img', 'rounded-sm w-full');
    const description = createElement('aside');
    const title = createElement('h2', 'text-lg text-slate-800');
    const originalTitle = createElement('span', 'text-slate-400 text-sm');

    title.textContent = el.title;
    originalTitle.textContent = el.original_title;
    image.setAttribute('src', el.image);

    description.appendChild(title);
    description.appendChild(originalTitle);
    card.appendChild(image);
    card.appendChild(description);
    
    return card;
}

export async function createCards(){
    const result = await apiConnection();
    const cardElements = result.map(createCardElement);
    cardElements.forEach(card => wrapper.appendChild(card));
}
