import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
    products: [
      {
        name: "Crewneck T-Shirt",
        id: 53362,
        price: 9.5,
        color: "white",
        size: "small",
        gender: "men",
        quantity: 10,
        dateAdded: "Tue 24 March",
        category: "Shirts",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash",
          additional: "Some color feature different-colored yarns",
        },
        images: ["53362-1.jpg", "53362-2.jpg", "53362-3.jpg"],
      },
      {
        name: "Cardigan Sweater",
        id: 53363,
        price: 49.5,
        color: "red",
        size: "medium",
        gender: "Women",
        quantity: 8,
        dateAdded: "Mon Mar 23",
        category: "Sweaters",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "Machine wash cold",
          additional: "",
        },
        images: [
          "53363-1.jpg",
          "53363-2.jpg",
          "53363-3.jpg",
          "53363-4.jpg",
          "53363-5.jpg",
        ],
      },
      {
        name: "Slim Fit Jeans",
        id: 53364,
        price: 29.5,
        color: "navy",
        size: {
          waist: 32,
          length: 32,
        },
        gender: "men",
        quantity: 5,
        dateAdded: "Wed Mar 25",
        category: "pants",
        details: {
          material: "Denim",
          fit: "slim",
          maintenance: "machine wash cold with like colors",
          additional: "",
        },
        images: [
          "53364-1.jpg",
          "53364-2.jpg",
          "53364-3.jpg",
          "53364-4.jpg",
          "53364-5.jpg",
        ],
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    product: (state) => (id) => {
      return state.products.filter((p) => p.id === Number(id))[0];
    },
  },
});
