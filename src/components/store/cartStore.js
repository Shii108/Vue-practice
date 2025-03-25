import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  // Reactive State
  const item_details = ref([]); // Stores cart items {id, quantity}
  const totalItem = ref(0); // Stores total quantity of all items
  const shippingCost = ref(0);
  const subTotal = ref(0);
  const totalCost = ref(0);

  // Function: Add item to cart
  const addToCart = (quantity, id, title, image, price) => {
    const itemIndex = item_details.value.findIndex(
      (item) => item?.id === Number(id)
    );
    if (itemIndex !== -1) {
      item_details.value[itemIndex].quantity += quantity;
      return;
    } else {
      item_details.value.push({
        id: Number(id),
        quantity,
        title,
        image,
        checked: false,
        price,
        shipping_fee: 100,
      });
    }
  };

  const costCalculation = () => {
    const shippingFee = item_details.value
      .map((item) => {
        if (item.checked) {
          return item.shipping_fee;
        }
      })
      .reduce((a, b) => a + b, 0);
    shippingCost.value = shippingFee;

    const subTotalCalc = item_details.value
      .map((item) => ({
        quantity: item.quantity,
        price: item.price,
      }))
      .reduce((sum, item) => sum + item.quantity * item.price, 0);
    subTotal.value = subTotalCalc;

    totalCost.value = subTotal.value + shippingCost.value;

    console.log("total", totalCost.value);
    console.log("subtotal", subTotal.value);
    console.log("shipping", shippingCost.value);
  };

  const totalQuantity = () => {
    const total = item_details.value
      .map((item) => item.quantity)
      .reduce((a, b) => a + b, 0);
    totalItem.value = total;
  };

  const updateQuantity = (id, quantity) => {
    const itemIndex = item_details.value.findIndex((item) => item.id === id);
    item_details.value[itemIndex].quantity = quantity;
    costCalculation();
  };

  const updateChecked = (id) => {
    const itemIndex = item_details.value.findIndex((item) => item.id === id);
    item_details.value[itemIndex].checked =
      !item_details.value[itemIndex].checked;
    costCalculation();
  };

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
    addToCart,
    updateQuantity,
    removeItem,
    totalQuantity,
    costCalculation,
    updateChecked,
  };
});
