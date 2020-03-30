const Deck = document.getElementById("Deck");

console.log(Deck);

const fetchCard = ()=>{

    const promises = [];
    for(let i=1;i<=6;i++){
        
        const url = 'https://db.ygoprodeck.com/api/v7/randomcard.php';
        promises.push(fetch(url).then((res)  =>  {
            return res.json(); 
        }));
    }
    
   Promise.all(promises).then((results)=>{
       const card = results.map((data)=>({
            //name:data.name,
            //id:data.id,
            //desc:data.desc,
            image:data.card_images.map((card_images)=>card_images.image_url).join(', '),
        }));
        displayPokemon(card);
    });
   
};

const displayPokemon =(card) =>{
    console.log(card);
    const cardHTMLString = card.map(cardman =>`
    <li class="card">
        <img class="card-image" src="${cardman.image}"/>
    </li>
    `
    ).join('');
    Deck.innerHTML=cardHTMLString;
}
fetchCard();