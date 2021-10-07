import axios from "axios";
var data = [
  {
    _id: "111",
    title: "18kt White Gold Ring",
    price: 1500.0,
    category: "ring",
    image: "whiteengagementring.jpg",
    discount: 3,
    minimum: 1,
  },
  {
    _id: "222",
    title: "14 kt Cartier bracelet",
    price: 1000.0,
    category: "bracelet",
    image: "bracelets.jpg",
    discount: 3,
    minimum: 1,
  },
  {
    _id: "333",
    title: "14 kt Gold Rope Chain",
    price: 400.0,
    category: "necklace",
    image: "goldchain.jpg",
    discount: 3,
    minimum: 1,
  },
  {
    _id: "444",
    title: "18 kt Gold plated Nameplate",
    price: 600.0,
    category: "necklace",
    image: "nameplate.webp",
    discount: 3,
    minimum: 1,
  },
  {
    _id: "555",
    title: "18kt Gold Earrings",
    price: 150.0,
    category: "earrings",
    image: "earrings.jpg",
    discount: 3,
    minimum: 1,
  },
  {
    _id: "666",
    title: "14kt Gold band",
    price: 700.0,
    category: "ring",
    image: "goldband.jpg",
    discount: 3,
    minimum: 1,
  },
  {
    _id: "777",
    title: "14 kt White Gold Band",
    price: 800.0,
    category: "ring",
    image: "whitegoldband2.jpg",
    discount: 3,
    minimum: 1,
  },
  {
    _id: "888",
    title: "Silver Diamond Ring",
    price: 1650.0,
    category: "ring",
    image: "silverring2.jpg",
    discount: 3,
    minimum: 1,
  },
  {
    _id: "999",
    title: "18 kt Gold Necklace",
    price: 620.0,
    category: "necklace",
    image: "gold chain 2.webp",
    discount: 3,
    minimum: 1,
  },
];

class ItemService {
  serverURL = "http://127.0.0.1:5000";
  //use axios to get the data from the server(backend)
  async getCatalog() {
    //use axios to get the data from the server (back end)
    let response = await axios.get(this.serverURL + "/api/catalog");
    return response.data;
  }

  //return a saveItem function
  /**recieve the item as parameter
   * send the item on post request to "http://127.0.0.1:5000/api/catalog"
   */
  async saveItem(item) {
    try {
      let response = await axios.post(this.serverURL + "/api/catalog", item);
      console.log("result of saving", response.data);
    } catch {
      console.log("Error, product no saved");
    }
  }

  async getCouponCodes() {
    //use axios to get the data from the server (back end)
    let response = await axios.get(this.serverURL + "/api/couponCode");
    return response.data;
  }
  async saveCouponCode(coupon) {
    try {
      let response = await axios.post(
        this.serverURL + "/api/couponCode" + coupon
      );
      console.log("result of saving", response.data);
    } catch (error) {
      console.log("Error, coupon not saved");
    }
  }
  async validateCoupon(code) {
    try {
      let response = await axios.get(
        this.serverURL + "/api/couponCode/" + code
      );
      return response.data;
    } catch {
      console.log("error validating coupon");
      return null;
    }
  }

  async saveOrder(order) {
    try {
      let response = await axios.post(this.serverURL + "/api/orders", order);
      return response.data;
    } catch {
      console.log("error saving order");
      return null;
    }
  }
}

export default ItemService;
