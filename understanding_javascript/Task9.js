let Markrt_vendor ={
    Name:"NALONGO GEOCERIES",
    Location: "Muyenga",
    Products:[
        {name: "Tomatoes", price:200, quantity:20},
        {name: "Bananas", price:1000, quantity: 26},
        {namw: "carrots", price:300, quantity: 39},
        {name: "cassava", price:2000, quantity:50}
    ],
    calculateTotalrevenue: function(){
        let total =0;
        for(let i = 0;i < this.products.lenghth; i++) {
            total += this.products[i].price*
       this.products[i].quantity;
     }
     return total;
    }

}
console.log(`Total value of products in stock: UGX
    ${Markrt_vendor.calculateTotalrevenue()}`);
    