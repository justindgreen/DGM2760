document.querySelector('#name').innerText = "Hotel California";
document.querySelector('#slogan').innerText = 'You can never leave.';
document.querySelector('#pageTitle').innerText = "Hotel Booking";

async function getHotelData() {
	try {
		const response = await fetch('../assignment%2011/hotel.json')
		return response.json()
	} catch (error) {
		console.error(error)
	}
}

let hotelData = {}
getHotelData().then(data =>	hotelData = data)

document.querySelectorAll('button').forEach(button => {button.addEventListener('click', hotelInfo)})

function hotelInfo(event) {
	let hotelChoice = hotelData.hotels.find(hotel => {
		return hotel.name === event.target.id
	})

	document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`
	document.querySelector('#address').textContent = `${hotelChoice.address}`
	document.querySelector('#rooms').textContent = `${hotelChoice.rooms}`
	document.querySelector('#gym').textContent = `${hotelChoice.gym}`
	document.querySelector('#types').textContent = `${hotelChoice.types}`
	document.querySelector('#image').src = hotelChoice.image

}
