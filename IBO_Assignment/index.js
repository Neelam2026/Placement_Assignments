/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/


//1.
const getUniqueProductCount=(listOfProducts)=>{
    let ProductCount={}
    for(let i=0;i<listOfProducts.length;i++){
    if(ProductCount[listOfProducts[i].productName]===undefined)
    ProductCount[listOfProducts[i].productName]=1;
    else
    ProductCount[listOfProducts[i].productName]+=1;
    }
    return ProductCount 
    }
    
    
    //2.
    
    const getUniquePrducts=(listOfProducts)=>{
      let UniquePrducts=[]
      for(let i=0;i<listOfProducts.length;i++){
       let flag=true
       for(let j=0; j<UniquePrducts.length;j++){
         if(listOfProducts[i].productName===UniquePrducts[j].productName){
           flag=false
           UniquePrducts[j].quantity+=listOfProducts[i].quantity
           break;
         }
        }
       if(flag)
        UniquePrducts.push(listOfProducts[i])
       
    }
      return UniquePrducts
    }
    
    
    
    const listOfProducts = [{
        productName: "TV",
        quantity: 10,
        description: "television"
      },
      {
        productName: "AC",
        quantity: 5,
        description: "air conditioner"
      },
      {
        productName: "TV",
        quantity: 10,
        description: "television"
      },
      {
        productName: "AC",
        quantity: 5,
        description: "air conditioner"
      },
      {
        productName: "FAN",
        quantity: 10,
        description: "Ceiling Fan"
      }
    ];
    
    let product_count=getUniqueProductCount(listOfProducts)
    console.log(product_count)
    
    let Unique_product=getUniquePrducts(listOfProducts)
    console.log(Unique_product)
    