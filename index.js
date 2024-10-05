
// 2nd step
const loadAllPhones = async(status, searchText) => {
    console.log(searchText)
    document.getElementById('spinner').style.display = 'none';

    // .then promise return kore
    // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(error => console.log(error))

    // async - await er maddome // async -await diye korle must function er age async dite hobe
    const responce = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText ? searchText : 'iphone'}`)
    const data = await responce.json();
    
console.log(data);

   if(status === true){
    displayAllPhones(data.data);
   }
   else{
    displayAllPhones(data.data.slice(0,6));                     // slice(0, 6) diye 15 ta datar moddhe 0 theke 6 ta porjonto data nea hoise
   }
    
}

// 3rd step
const displayAllPhones = (phones) => {
    // console.log(phones);
    const phoneContainer = document.getElementById('phones-container')

    // forEach kono kisu return kore na tai akhane forEach loop chalabo
    phones.forEach(phone => {
        // console.log(phone);

        // object destructuring
        const {brand, phone_name, image, slug} = phone;
        
        // forEach loop jkhn chalabo tkn akta akta kore div create hobe
        const div = document.createElement('div')

        div.innerHTML = `

        <div class="card m-2 bg-base-100 w-96 shadow-xl">
            <figure class="px-10 pt-10">
                <img
                src="${image}"
                alt="Shoes"
                class="rounded-xl" />
            </figure>

            <div class="card-body items-center text-center">
                <h2 class="card-title">${brand}</h2>
                <p>${slug}</p>
                <div class="card-actions">
                    <button onclick="phoneDetails()" class="btn btn-primary">Show Details</button>
                </div>
            </div>
        </div>

        `
        phoneContainer.appendChild(div);
    });
    
}

// 4th step
// kew showAll a click korle 15 ta datai dekhabe

const handleShowAll = () => {
    loadAllPhones(true)
}



// 1st step // eikhane data ta 3 sec ghure uporer 2nd step ke call korbe
const handleSearch = () => {
    const searchText = document.getElementById('search-box').value
    document.getElementById('spinner').style.display = 'block';
    setTimeout(function(){
        loadAllPhones(false, searchText)
    },3000)
}



loadAllPhones(false, 'iphone');


const phoneDetails = async(slug) => {
    console.log(slug);
    
    // const response = await fetch('https://openapi.programming-hero.com/api/phone/${id}')
}









// const phone = {
//     "brand": "Apple ",
//     "phone_name": "iPhone 13 mini",
//     "slug": "apple_iphone_13_mini-11104",
//     "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg"
// }

// // object destructuring
// const {brand, phone_name, image, slug} = phone;
// console.log(slug);
