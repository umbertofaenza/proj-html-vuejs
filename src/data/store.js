import { reactive } from "vue";

export const store = reactive({
  specialCategoryData: [
    {
      title: "Batman",
      href: "#",
      img: "/img/category-image-01-446x550_t.jpg",
    },
    {
      title: "Bayonetta",
      href: "#",
      img: "/img/category-image-02-446x550_t.jpg",
    },
    {
      title: "Dark Souls",
      href: "#",
      img: "/img/category-image-03-446x550_t.jpg",
    },
  ],

  ourProductsData: [
    {
      productName: "Shopping Mahjong Connect",
      rating: "4",
      previousPrice: "£180",
      price: "£100.00",
      discount: "-44%",
      img: "/img/04.jpg",
    },
    {
      productName: "Buddy and Lucky Solitaire",
      rating: "0",
      price: "£83.00 - £90.00",
      img: "/img/09.jpg",
    },
    {
      productName: "Talishou x Alice Epilogue",
      rating: "0",
      price: "£100.00",
      img: "/img/03.jpg",
    },
    {
      productName: "Labyrinths of the World",
      rating: "2",
      price: "£110.00",
      img: "/img/11.jpg",
    },
  ],

  dotdData: [
    {
      productName: "Shopping Mahjong Connect",
      rating: "4",
      previousPrice: "£180",
      price: "£100.00",
      discount: "-44%",
      img: "/img/04.jpg",
    },
    {
      productName: "BangBang Shooting",
      rating: "0",
      price: "£56.00",
      img: "/img/18.jpg",
    },
    {
      productName: "Buddy and Lucky Solitaire",
      rating: "0",
      price: "£83.00 - £90.00",
      img: "/img/09.jpg",
    },
    {
      productName: "Taishou x Alice Epilogue",
      rating: "0",
      price: "£160.00",
      img: "/img/10.jpg",
    },
  ],
});
