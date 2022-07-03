//1.
const getUniqueProductCount = (listOfProducts) => {
  let ProductCount = {};
  for (let i = 0; i < listOfProducts.length; i++) {
    if (ProductCount[listOfProducts[i].productName] === undefined)
      ProductCount[listOfProducts[i].productName] = 1;
    else ProductCount[listOfProducts[i].productName] += 1;
  }
  return ProductCount;
};

//2.

const getUniquePrducts = (listOfProducts) => {
  let UniquePrducts = [];
  for (let i = 0; i < listOfProducts.length; i++) {
    let flag = true;
    for (let j = 0; j < UniquePrducts.length; j++) {
      if (listOfProducts[i].productName === UniquePrducts[j].productName) {
        UniquePrducts[j].quantity += listOfProducts[i].quantity;
        flag = false;
        break;
      }
    }
    if (flag) UniquePrducts.push(listOfProducts[i]);
  }
  return UniquePrducts;
};

const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

let product_count = getUniqueProductCount(listOfProducts);
console.log(product_count);

let Unique_product = getUniquePrducts(listOfProducts);
console.log(Unique_product);
