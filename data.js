const ROLE = {
  SUPERVISOR: "supervisor",
  EMPLOYEE: "employee",
  CLIENT: "client",
};

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: "Kyle", role: ROLE.SUPERVISOR },
    { id: 2, name: "Sally", role: ROLE.EMPLOYEE },
    { id: 3, name: "Joe", role: ROLE.CLIENT },
  ],
  categories: [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Furniture" },
    { id: 3, name: "Accessories" },
  ],
  products: [
    { id: 1, name: "DVD", price: 50, categoryId: 1 },
    { id: 2, name: "Fan", price: 150, categoryId: 1 },
    { id: 3, name: "Power bank", price: 70, categoryId: 3 },
    { id: 4, name: "Chair", price: 500, categoryId: 2 },
    { id: 5, name: "Television", price: 250, categoryId: 1 },
    { id: 6, name: "Table", price: 200, categoryId: 2 },
  ],
  messages: [
    { id: 1, message: "Lorem ipsum1" },
    { id: 2, message: "Lorem ipsum22" },
    { id: 3, message: "Lorem ipsum333" },
  ],
};
