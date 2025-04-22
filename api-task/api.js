// const create = require("prompt-sync");

const PRODUCT_URL = 'https://fakestoreapi.com/products'

const productsContainer = document.querySelector(".products");
// const productWrapper = document.getElementsByClassName("products")

// console.log(productsContainer);
// console.log(productWrapper);

// const getproduct = (url)=> {
//     fetch(url).then((response)=> response.json())
//     .then((data)=>{console.log(data)

//     })
//     .catch((error)=> console.log(error))
// };

const getproducts = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayProducts(data)
    } catch (error) {
        console.log(""+error)
    }
}

getproducts(PRODUCT_URL)

function displayProducts(products){
    products.forEach((product)=> {
      console.log(product)  
      const {title, price, description, image} = product;
      const productHTML = document.createElement('div'); 
      productHTML.classList.add("products");
      productHTML.innerHTML = `
        <img src="${image}" alt="">
            <div>
                <p>${title}</p>
                <p>price: &#8358 ${price}</p>
            </div>
            <p>${description}</p>
      `
      productsContainer.appendChild(productHTML);
    //   console.log(title)
    //   console.log(price)
    //   console.log(description)

       
    });
}

// function createInnetHTML(productDiv, image, title, price, description){
//     productDiv.innerHTML = `
//         <img src="${image}" alt="">
//             <div>
//                 <p>${title}</p>
//                 <p>price: &#8358 ${price}</p>
//             </div>
//             <p>${description}</p>
//     `;
// }

