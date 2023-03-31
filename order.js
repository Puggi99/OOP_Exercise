class Order{
    constructor(product, quantity, unityPrice){
    this.product = product;
    this.quantity = quantity;
    this.unityPrice = unityPrice;
    }

    totalOrder(){
        const total = this.quantity * this.unityPrice;
        return total;
    }
    
    toString(){
        return `prodotto: ${this.product}\nquantità: ${this.quantity}\nprezzo: ${this.unityPrice}\nPrezzo totale: ${this.totalOrder()}`;
    }
}

