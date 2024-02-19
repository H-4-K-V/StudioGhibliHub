const apiConnection = (value) => {
    const connection = fetch(`https://ghibliapi.vercel.app/films`)
    .then((res) => res.json())
    .then((data) => {
        return data;
    });

    return connection;
}

const content= `
<div>
    <h2 id="primary-title">title</h2>
    <span id="secondary-title">title2</span>
</div>
<p id="description"></p>
`;

const wrapper = document.querySelector('#card-wrapper');

async function createCards(){
    const result = await apiConnection();
    
    result.forEach(el => {
        const card = document.createElement('div');
        const img = document.createElement('img');
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const span = document.createElement('span');
        const p = document.createElement('p');


        h2.textContent = el.title;
        span.textContent = el.original_title;
        div.appendChild(h2);
        div.appendChild(span);

        p.textContent = el.description;
        card.classList.add('w-80', 'flex', 'flex-col')
        img.setAttribute('src', el.image)
        
        card.appendChild(img);
        card.appendChild(div);
        card.appendChild(p);
        wrapper.appendChild(card);

        console.log(el)
    });

}

console.log(wrapper);

createCards();