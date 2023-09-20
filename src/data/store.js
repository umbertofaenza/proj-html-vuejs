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
});
