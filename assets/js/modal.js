const modal = document.querySelector('.modal')
const triger = document.querySelectorAll('[data-triger-modal]') 
const modalBody = document.querySelector('.modal-body')



const modalArr = [
    {
        id:'sold',
        title:'Нажаль всі квартири продано…',
        description:'Подивіться інші пропозиції у вільних будинках!',
        imgUrl:'assets/img/sold.png'
    },
    {
        id:'loginSuccess',
        markup: `
        <form class="form"> 
        <h4 class="form-title">Залишились питання? Напишіть нам!</h4>
        <div class="form-column">
            <label for="name">Name</label>
            <input id="name"  type="text">
        </div>
        <div class="form-column">
            <label for="tel">Telephone</label>
            <input id="tel" type="tel">
        </div>
        <div class="form-column">
            <label for="answer">You'r answer</label>
            <textarea id="answer"></textarea>
        </div>
        <button class="btn btn-secondary" type="submit" data-close="modal">Добре</button>
        <button class="btn btn-close" data-close="modal"></button>
      </form>`
    },
    {
        id:'registrationSuccess',
        title:'Успішна реєстрація',
        description:'Ви успішно зареєструвалися.',   
    },
    {
        id:'error',
        title:'Система зараз не працює.',
        description:'Система оновлюється,зареєструйтесь будь ласка пізніше!',
    }
]

triger.forEach(item => {
    item.addEventListener('click', function() {
        const modalType = item.getAttribute('data-triger-modal')
        showModal(modalType)
    })
})

function showModal(modalType) {
    const modalData = modalArr.find(item => item.id === modalType)
    
    if (modalData) {
        randerModalContent(modalData)
        modal.classList.add('show') 
   }   
}

    function randerModalContent(modalData) {
      console.log(modalData);
 
      if (modalData.markup) {
        modalBody.innerHTML = modalData.markup
   }  
        
    
    else {
         modalBody.innerHTML = ` <h4 id="title">${modalData.title}</h4>
                              <p>${modalData.description}</p>
                              <div class="btn-row">
                                   <button class="btn btn-primary" data-close="modal">Добре</button>
                                   <button class="btn btn-close" data-close="modal"></button> 
                              </div>`
    }
    
    const trigerClose = document.querySelectorAll('[data-close="modal"]')
    trigerClose.forEach(triger => {
        triger.addEventListener('click',closeModal)
    })
    console.log(trigerClose);
 }
       
   

       
function closeModal() {
    modal.classList.remove('show')
}


modal.addEventListener('click', (event)=> {
  event.target.classList.remove('show')
})