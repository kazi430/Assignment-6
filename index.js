

const loadData = () =>{
  fetch('https://openapi.programming-hero.com/api/ai/tools')
  .then(res => res.json())
  .then(data => disPlayData(data.data.tools))
}


const disPlayData = kazi =>{
  
  
  kazi.forEach(element => {

      const cardContainer = document.getElementById('card-container');
      const cardDiv = document.createElement('div');
       cardDiv.classList.add('col');
       cardDiv.innerHTML = `
       <div class="card p-4">
       <img src="${element.data.tools[0].image.jpg }" class="card-img-top" alt="...">
       <div class="card-body">
       <h5 class="card-title">Name: </h5>
         <h5 class="card-title">Capital: </h5>
       
         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

       </div>
     </div>
  
       `;
       cardContainer.appendChild(cardDiv);

  });
}



loadData();