const db = require('./conn');

class Burrito {
    constructor(id, first_name, burrito_type, size) {
        this.id = id;
        this.firstName = first_name;
        this.burritoType = burrito_type;
        this.size = size;
    }

    static getAll() {
        return db.any(`select * from orders`)
            .then((arrayOfOrders) => {
                return arrayOfOrders.map((orderData) => {
                    const anOrder = new Burrito(orderData.id, orderData.first_name, orderData.burrito_type, orderData.protein);
                    return anOrder;
                });
            });
    };
}

module.exports = Burrito;