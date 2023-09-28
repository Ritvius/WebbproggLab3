class OrderHandler {
    constructor() {
      this.basket = [];
    }

    add(salad) {
      this.basket.push(salad);
    }

    delete(uuid) {
      this.basket = this.basket.filter((salad) => salad.uuid !== uuid);
    }

    calculatePrice() {
      return this.basket.reduce((accPrice, salad) => accPrice + salad.getPrice(), 0);
    }
  }
  export default OrderHandler;