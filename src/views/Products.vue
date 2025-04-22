<template>
  <div>
    <div v-if="!session">
      <p class="text-3xl text-red-300 mt-40">Veuillez vous connecter pour ajouter des produits à votre panier.</p>
    </div>
    <div v-else>
      <div v-for="product in products" :key="product.id" class="mb-10 text-center">
        <router-link :to="`/chef/${product.id}`">
        <img :src="product.image" :alt="product.name" class="w-full max-w-sm mx-auto mt-4 rounded-xl transition duration-300 hover:scale-105" />
      </router-link>
        <h3 class="text-xl font-semibold mt-5">{{ product.name }}</h3>
        <p class="text-sm text-gray-600 mt-2">Cuisinier: {{ product.chef }}</p>
        <button @click="addToCart(product)" class="mt-6 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200 hover:scale-105">Ajouter au panier</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useUserStore } from '@/stores/userStore'; 

export default {
  name: 'Products',
  setup() {
    const userStore = useUserStore();
    const session = computed(() => userStore.session); 

    return {
      userStore,
      session,
    };
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Pain Perdu',
          chef: 'Phillipe Etchebest',
          image: 'https://img.cuisineaz.com/660x495/2016/03/08/i92056-pain-perdu-au-beurre.webp',
        },
        {
          id: 2,
          name: 'Poulet Boucané',
          chef: 'Chef Marie',
          image: 'https://img.cuisineaz.com/312x250/2018/06/08/i140319-poulet-braise-citron-vert-barbecue.webp',
        },
        {
          id: 3,
          name: 'Bananes plantain frites',
          chef: 'Paul Bocuse',
          image: 'https://img.cuisineaz.com/312x250/2017/10/04/i132812-bananes-frites.webp',
        },
      ],
    };
  },
  methods: {
    addToCart(product) {
      alert(`${product.name} ajouté au panier`);
      this.userStore.addToCart(product);
    },
  },
};
</script>
