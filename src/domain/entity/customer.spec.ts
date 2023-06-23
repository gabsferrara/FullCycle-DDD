import Address from "./adress";
import Customer from "./customer";

describe("Customer unit test", () => {

    it("should throw error when id is empty", () => {

        expect(() => {
            let customer = new Customer("","Gabriel");
        }).toThrow("Id is required");
    });

    it("should throw error when name is empty", () => {

        expect(() => {
            let customer = new Customer("1","");
        }).toThrow("Name is required");
    });

    it("should change name", () => {

        const customer = new Customer("123","Gabriel")
        customer.changeName("Dani")

        expect(customer.name).toBe("Dani");
    });

    it("should activate customer", () => {
        const customer = new Customer("1","Customer 1")
        const address = new Address("Street 1", 123, "12345-678", "Sao Paulo")
        customer.Address = address;

        customer.activate();
        expect(customer.isActive()).toBe(true);

    })

    it("should deactivate customer", () => {
        const customer = new Customer("1","Customer 1")
        customer.deactivate();
        expect(customer.isActive()).toBe(false);
    })

    it("should throw error when address is undefined when you activate a costumer", () => {
        expect(() => {
            const customer = new Customer("1","Customer 1");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");

    })

    it("should add reward points", ()=> {
        const customer = new Customer("1", "Customer 1")
        expect(customer.rewardPoints).toBe(0);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(10);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(20);
    })

    
})