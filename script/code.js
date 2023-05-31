// products
let structure = document.querySelector('section#result .row:last-child')
// create an array of objects

let products = [
    {
        id: '1',
        description: 'This is a 2 bedroom, with kitchen, bathroom',
        type: 'Home',
        price: 'R1 525 000',
        Image: 'https://i.postimg.cc/rwftpZsK/Equestria.jpg'
    },
]

let result = document.querySelector('.product');
products.forEach ((product) =>{
    result.innerHTML += `
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${product}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   `
});