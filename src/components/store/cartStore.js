import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  // Reactive State
  const itemIds = ref([]); // Stores cart items {id, quantity}
  const totalItem = ref(0); // Stores total quantity of all items

  // Function: Add item to cart
  const addToCart = (quantity, id, title, image, price) => {
    const itemIndex = itemIds.value.findIndex(
      (item) => item?.id === Number(id)
    );
    if (itemIndex !== -1) {
      itemIds.value[itemIndex].quantity += quantity;
      return;
    } else {
      itemIds.value.push({
        id: Number(id),
        quantity,
        title,
        image,
        checked: false,
        price,
      });
    }
  };

  const totalQuantity = () => {
    const total = itemIds.value
      .map((item) => item.quantity)
      .reduce((a, b) => a + b, 0);
    totalItem.value = total;
  };

  const updateQuantity = (id, quantity) => {
    const itemIndex = itemIds.value.findIndex((item) => item.id === id);
    itemIds.value[itemIndex].quantity = quantity;
  };

  const removeItem = (id) => {
    const itemIndex = itemIds.value.findIndex((item) => item.id === id);
    itemIds.value.splice(itemIndex, 1);
  };
  // Return store values
  return {
    totalItem,
    itemIds,
    addToCart,
    updateQuantity,
    removeItem,
    totalQuantity,
  };
});
