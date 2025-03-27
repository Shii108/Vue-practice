import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  // Reactive State
  const item_details = ref([]); // Stores cart items {id, quantity, title, image, price, checked, shipping_fee}
  const totalItem = ref(0); // Total quantity of all items in the cart
  const shippingCost = ref(0); // Total shipping cost
  const subTotal = ref(0); // Subtotal of selected items
  const totalCost = ref(0); // Final total including shipping
  const total_buying_item = ref(0); // Total count of checked (selected) items

  // Function: Add item to cart
  const addToCart = (quantity, id, title, image, price) => {
    const itemIndex = item_details.value.findIndex(
      (item) => item?.id === Number(id)
    );

    if (itemIndex !== -1) {
      // If item already exists, increase quantity
      item_details.value[itemIndex].quantity += quantity;
    } else {
      // Add new item to the cart
      item_details.value.push({
        id: Number(id),
        quantity,
        title,
        image,
        checked: false, // Default unchecked
        price,
        shipping_fee: 100, // Fixed shipping fee per item
      });
    }
  };

  // Function: Calculate costs (subtotal, shipping, total)
  const costCalculation = () => {
    // Calculate total shipping cost for checked items
    shippingCost.value = item_details.value
      .map((item) => (item.checked ? item.shipping_fee : 0))
      .reduce((a, b) => a + b, 0);

    // Calculate subtotal for checked items
    subTotal.value = item_details.value
      .map((item) => ({
        quantity: item.checked ? item.quantity : 0,
        price: item.checked ? item.price : 0,
      }))
      .reduce((sum, item) => sum + item.quantity * item.price, 0);

    // Calculate total quantity of checked items
    total_buying_item.value = item_details.value
      .map((item) => (item.checked ? item.quantity : 0))
      .reduce((a, b) => a + b, 0);

    // Format values
    subTotal.value = Number(subTotal.value.toFixed(2));
    totalCost.value = (subTotal.value + shippingCost.value).toFixed(2);
  };

  // Function: Calculate total quantity of all items (checked or not)
  const totalQuantity = () => {
    totalItem.value = item_details.value
      .map((item) => item.quantity)
      .reduce((a, b) => a + b, 0);
  };

  // Function: Update item quantity
  const updateQuantity = (id, quantity) => {
    const itemIndex = item_details.value.findIndex((item) => item.id === id);
    item_details.value[itemIndex].quantity = quantity;
    costCalculation();
  };

  // Function: Toggle checked status of an item
  const updateChecked = (id) => {
    const itemIndex = item_details.value.findIndex((item) => item.id === id);
    item_details.value[itemIndex].checked =
      !item_details.value[itemIndex].checked;
    costCalculation();
  };

  // Function: Remove item from cart
  const removeItem = (id) => {
    const itemIndex = item_details.value.findIndex((item) => item.id === id);
    item_details.value.splice(itemIndex, 1);
    costCalculation();
  };

  // Return store values
  return {
    shippingCost,
    subTotal,
    totalCost,
    totalItem,
    item_details,
    total_buying_item,
    addToCart,
    updateQuantity,
    removeItem,
    totalQuantity,
    costCalculation,
    updateChecked,
  };
});
