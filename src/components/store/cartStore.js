import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  // Reactive State
  const itemIds = ref([]); // Stores cart items {id, quantity}
  const totalItem = ref(0); // Stores total quantity of all items

  // Function: Add item to cart
  const addToCart = (quantity, id) => {
    totalItem.value += quantity; // Update total quantity
    
    // Find index of existing item
    const itemIndex = itemIds.value.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
      // If item exists, update quantity
      itemIds.value[itemIndex].quantity += quantity;
    } else {
      // If item doesn't exist, add to cart
      itemIds.value.push({ id, quantity });
    }
  };

  // Return store values
  return { totalItem, addToCart, itemIds };
});
