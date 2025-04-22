import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const useUserStore = defineStore('user', {
  state: () => ({
    session: ref(JSON.parse(localStorage.getItem('userSession')) || null),
    cart: reactive(JSON.parse(localStorage.getItem('cart')) || []),
  }),
  actions: {
    setSession(user) {
      this.session = user;
      localStorage.setItem('userSession', JSON.stringify(user));
    },
    clearSession() {
      this.session = null;
      localStorage.removeItem('userSession');
    },
    addToCart(product) {
      const itemInCart = this.cart.find((item) => item.id === product.id);
      if (itemInCart) {
        itemInCart.quantity++; 
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    removeFromCart(product) {
      this.cart = this.cart.filter((item) => item.id !== product.id);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    updateQuantity(product, quantity) {
      const itemInCart = this.cart.find((item) => item.id === product.id);
      if (itemInCart) {
        itemInCart.quantity = quantity;
      }
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
  },
});
