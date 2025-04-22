<template>
  <div class="p-4">
    <h1 class="text-xl text-pink-400 mb-6">Votre Panier :</h1>

    <div v-if="cart.length === 0" class="text-center">
      <p>Votre panier est vide.</p>
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="product in cart" :key="product.id" class="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg">
        <img :src="product.image" :alt="product.name" class="w-48 h-48 object-cover rounded-lg mb-4" />
        <h3 class="text-lg font-semibold text-gray-800 mb-4">{{ product.name }}</h3>
        <div class="flex items-center space-x-3">
          <button 
            @click="decreaseQuantity(product)" 
            :disabled="product.quantity <= 1" 
            class="px-3 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:bg-gray-200">
            -
        </button>
          <span class="text-lg font-semibold">{{ product.quantity }}</span>

          <button 
            @click="increaseQuantity(product)" 
            class="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600">
            +
          </button>
        </div>

        <button 
          @click="removeFromCart(product)" 
          class="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200 hover:scale-105">
          Retirer du panier
        </button>
      </div>
    </div>

    <div class="mt-6 text-center">
      <router-link to="/products" class="text-blue-500 hover:text-blue-600 transition duration-200">
        Retour aux produits
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useUserStore } from '@/stores/userStore';

export default {
  name: 'Cart',
  setup() {
    const userStore = useUserStore(); 

    const cart = computed(() => userStore.cart);
    const increaseQuantity = (product) => {
      userStore.updateQuantity(product, product.quantity + 1);
    };

    const decreaseQuantity = (product) => {
      if (product.quantity > 1) {
        userStore.updateQuantity(product, product.quantity - 1);
      }
    };

    const removeFromCart = (product) => {
      userStore.removeFromCart(product); 
    };

    return {
      cart,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
    };
  },
};
</script>
