import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  // Reactive State
  const itemIds = ref([]); // Stores cart items {id, quantity}
  const totalItem = ref(0); // Stores total quantity of all items

  // Function: Add item to cart
  const addToCart = (quantity, id , title , image , price) => {
  
    const itemIndex = itemIds.value.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
      // If item exists, update quantity
      itemIds.value[itemIndex].quantity += quantity;
    } else {
      // If item doesn't exist, add to cart
      itemIds.value.push({ id: Number(id), quantity , title , image , checked:false , price});
    }
  };

  const updateQuantity=(quantity)=>{
    totalItem.value += quantity; 
  }

  const removeItem=(id)=>{
    const itemIndex = itemIds.value.findIndex(item => item.id === id);
    itemIds.value.splice(itemIndex, 1);
  }
  // Return store values
  return { totalItem, addToCart, itemIds , updateQuantity , removeItem};
});
