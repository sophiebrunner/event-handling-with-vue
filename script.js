Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    showCoordinates(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    removeFruitItem(fruitItem) {
      this.fruitBasket = this.fruitBasket.filter((fruit) => {
        return fruit !== fruitItem;
      });
    },
  },
}).mount("#app");
