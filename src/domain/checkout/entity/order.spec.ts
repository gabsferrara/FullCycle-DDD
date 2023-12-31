import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit test", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            let order = new Order("", "123", []);
        }).toThrowError("Id is required")
    });

    it("should throw error when customerId is empty", () => {
        expect(() => {
            let order = new Order("123", "", []);
        }).toThrowError("customerId is required")
    });

    it("should throw error when array Item is empty ", () => {
        expect(() => {
            let order = new Order("123", "123", []);
        }).toThrowError("Item are required")
    });

    it("should calculate total", () => {
        const item = new OrderItem("1","Item 1", 100, "p1", 2);
        const item2 = new OrderItem("2","Item 2", 200, "p2", 2);
        const order = new Order("o1","c1", [item]);

        let total = order.total();

        expect(total).toBe(200);
        
        const order2 = new Order("o1","c1", [item, item2]);
        total = order2.total();

        expect(total).toBe(600);

    })


    it("should throw error if the item quantity is less or equal than 0", () => {
        expect(() => {{
            const item = new OrderItem("1","Item 1", 100, "p1", 0);
            const order = new Order("o1", "c1", [item])
        }}).toThrowError("Quantity must be grater than 0")
    })
    
})