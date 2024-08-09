const floorItem = document.querySelectorAll('.floor-item')

const cellAddressItem = document.querySelector('#address-item')
const cellFloorItem = document.querySelector('#floor-item')
const cellFlatsFreeItem = document.querySelector('#flats-free-item')
const cellFlatsBookingItem = document.querySelector('#flats-booking-item')
const cellFlatsSoldItem = document.querySelector('#flats-sold-item')



const showInformationLink = (cell, attr)=> floorItem.forEach(object => {
    object.addEventListener('mouseover', ()=> {
       const value = object.getAttribute(attr)
       cell.innerText = value
    })
    

     // console.log(object.getAttribute('data-flats'));
})
    
    


showInformationLink(cellAddressItem, 'data-address')
showInformationLink(cellFloorItem, 'data-floor')
showInformationLink(cellFlatsFreeItem, 'data-flats')
showInformationLink(cellFlatsBookingItem, 'data-flats-booking')
showInformationLink(cellFlatsSoldItem, 'data-flats-sold')



// const showNumber = ()=> {
//     console.log(1);
// }

// showNumber()

// const soldFlats = document.querySelectorAll('[data-flats-sold="0"]')

// soldFlats.forEach(item => item.classList.add('sold'))

const calcInformationLink = ()=> floorItem.forEach(item => {

    let floor = item.getAttribute('data-floor')
    let flats = item.getAttribute('data-flats')
    let flatsBooking = item.getAttribute('data-flats-booking')
    let flatsSold = item.getAttribute('data-flats-sold')

    numflats = Number(flats);
    flatsBooking = Number(flatsBooking);
    flatsSold = Number(flatsSold);

    console.log(numflats - (flatsBooking + flatsSold));
    

   if (flats === "0") {
    item.classList.add('sold')
    item.setAttribute('data-modal', 'sold')
    item.setAttribute('data-triger-modal', 'sold')
    item.addEventListener('click', (event) => {
        event.preventDefault() 
     })
   }
    
}) 

calcInformationLink()