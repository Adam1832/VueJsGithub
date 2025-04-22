<template>
    <div>
      <h2 class="text-2xl font-bold">Détails du Plat</h2>
      <div v-if="product">
        <img :src="product.image" :alt="product.name" class="w-full max-w-md mx-auto mt-4 rounded-xl" />
        <h3 class="text-xl font-semibold mt-5">{{ product.name }}</h3>
        <p class="text-sm text-gray-600 mt-2">Cuisinier: {{ product.chef }}</p>
        <p class="mt-4">Description: {{ product.description }}</p> 
      </div>
      <router-link to="/products" class="block mt-4 text-blue-500 hover:text-blue-600">Retour à la liste des produits</router-link>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'Detail',
    setup() {
      const route = useRoute();
      const product = ref(null);
  
      onMounted(() => {
        const productId = route.params.id;
        const products = [
          { id: 1, name: 'Pain Perdu', chef: 'Phillipe Etchebest', image: 'https://img.cuisineaz.com/660x495/2016/03/08/i92056-pain-perdu-au-beurre.webp', description: 'Pain perdu au beurre'},
          { id: 2, name: 'Poulet Boucané', chef: 'Chef Marie', image: 'https://img.cuisineaz.com/312x250/2018/06/08/i140319-poulet-braise-citron-vert-barbecue.webp', description: 'Poulet cuit aux épices.' },
          { id: 3, name: 'Bananes plantain frites', chef: 'Paul Bocuse', image: 'https://img.cuisineaz.com/312x250/2017/10/04/i132812-bananes-frites.webp', description: 'Plantains frits à la perfection.' },
        ];
  
        product.value = products.find(p => p.id === parseInt(productId));
      });
  
      return { product };
    },
  };
  </script>
  