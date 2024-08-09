const flatArr = [{
  id: 0,
  house: '2',
  floor: '1',
  flatNumber: '1',
  rooms: '3',
  square: '82.3м²',
  price: '950$',
  priceTotal: '78,185$',
 status: 'action',
},
{
    id: 1,
    house: '2',
    floor: '1',
    flatNumber: '2',
    rooms: '2',
    square: '60,7м²',
    price: '950$',
    priceTotal: '57,665$',
    status: 'free',
},
{
    id: 2,
    house: '2',
    floor: '1',
    flatNumber: '3',
    rooms: '2',
    square: '60,7м²',
    price: '950$',
    priceTotal: '57,665$',
    status: 'already-sold',
},
{
    id: 3,
    house: '2',
    floor: '1',
    flatNumber: '4',
    rooms: '3',
    square: '82м²',
    price: '950$',
    priceTotal: '77,900$',
    status: 'sold',
},
{
    id: 4,
    house: '2',
    flatNumber: '5',
    rooms: '3',
    square: '79,7м²',
    price: '950$',
    priceTotal: '75,905$',
    status: 'booking',
},
{
    id: 5,
    house: '2',
    floor: '1',
    flatNumber: '6',
    rooms: '1',
    square: '39,2м²',
    price: '950$',
    priceTotal: '37,240$',
    status: 'action',
},
{
    id: 6,
    house: '2',
    flatNumber: '7',
    rooms: '1',
    square: '42м²',
    price: '950$',
    priceTotal: '39,900$',
    status: 'booking',
},
{
    id: 7,
    house: '2',
    flatNumber: '8',
    rooms: '1',
    square: '39,2м²',
    price: '950$',
    priceTotal: '37,240$',
    status: 'already-sold',
},
{
    id: 8,
    house: '2',
    floor: '1',
    flatNumber: '9',
    rooms: '3',
    square: '79,3м²',
    price: '950$',
    priceTotal: '75,335$',
    status: 'sold',
},
]

const installFloor = () => {
    const flats = document.querySelectorAll('.flat')
    const flatInfo = document.querySelector('.floor-options')

    const removeActiveClass = () => flats.forEach(item => {
        item.classList.remove('active')
    })

  const setInitialActive =()=> {
    const firstFlatSelector = document.querySelector('.flat')
    firstFlatSelector.classList.add('active')
  }
  setInitialActive()

const initialValue = [flatArr[1]]
console.log(initialValue);

    const renderInformation = (array) => {
      const flatInformation = array.map(item => {
        return (`
          <div class="floor-option-item">
            <div>Номер будинку:</div>
            <div><h2>${item.house}</h2></div>
        </div>
        <div class="floor-option-item">
            <div>Поверх:</div>
            <div><h2>${item.floor}</h2></div>
        </div>
        <div class="floor-option-item">
            <div>Номер квартири:</div>
            <div><h2>${item.flatNumber}</h2></div>
        </div>
        <div class="floor-option-item">
            <div>Кількість кімнат:</div>
            <div><h2>${item.rooms}</h2></div>
        </div>
        <div class="floor-option-item">
            <div>Площа квартири:</div>
            <div><h2>${item.square}</h2></div>
        </div>
        <div class="floor-option-item">
            <div>Ціна за м2:</div>
            <div><h2>${item.price}</h2></div>
        </div>
        <div class="floor-option-item">
            <div>Ціна за квартиру:</div>
            <div><h2>${item.priceTotal}</h2></div>
        </div>
        <div class="floor-option-item">
            <div>Статус квартири:</div>
            <div><h2>${item.status}</h2></div>
        </div>
          `)   
      })

        flatInfo.innerHTML = flatInformation
    }
    renderInformation(initialValue)
  

    flats.forEach(flat => {
       flat.addEventListener('click', () => {
        removeActiveClass()
        flat.classList.add('active')
          const thisFlat = flat.getAttribute('data-flat-number')
          const flatNumber = flatArr.filter(item => item.flatNumber === thisFlat)
          renderInformation(flatNumber)
       })
      console.log(flat);


      if (flat.classList.contains('action')) {
        flat.querySelector('.cell-flat-status .flat-status').innerHTML = 'Акція'
      } else if (flat.classList.contains('sold.flat-status .flat-status')) {
        flat.querySelector('.cell-flat-status .flat-status').innerHTML = 'Бронь'
      } else if (flat.classList.contains('booking.flat-status .flat-status')) {
        flat.querySelector('.cell-flat-status .flat-status ').innerHTML = 'Продано'
      } else {
        flat.querySelector('.cell-flat-status .flat-status').innerHTML = 'Вільно'
      }
   
    })
}

document.querySelector('.page-floor') ? installFloor() : null;
