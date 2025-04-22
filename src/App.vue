<template>
  <div id="app" class="min-h-screen flex flex-col items-center">
    <div class="flex items-center justify-center space-x-4 mt-8">
      <img src="./assets/logo.svg" alt="Razer Logo" class="w-200 h-40 rounded-xl transition duration-300 hover:scale-105" />
    </div>
    <nav class="bg-red-200 w-full p-4 mt-6">
      <div class="flex justify-center space-x-8">
        <router-link to="/products" class="text-white font-medium hover:text-red-500 transition duration-300 hover:scale-105">
          Chefs Cuistots
        </router-link>
        <template v-if="!session">
          <router-link to="/login" class="text-white font-medium hover:text-red-500 transition duration-300 hover:scale-105">Connexion</router-link>
          <router-link to="/signup" class="text-white font-medium hover:text-red-500 transition duration-300 hover:scale-105">S'inscrire</router-link>
        </template>
        <template v-if="session">
            <router-link to="/cart" class="text-white font-medium hover:text-red-500 transition duration-300 hover:scale-105">  Panier
            <img src="./assets/shopping-cart-svgrepo-com.svg" alt="Panier" class="w-6 h-6 inline-block" />
          </router-link>
          <button @click="logout" class="text-white font-medium hover:text-white-500 hover:bg-red-600 hover:rounded-lg transition duration-300 hover:scale-105">
            Déconnexion
          </button>
        </template>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/userStore'; 
import { computed } from 'vue';  

export default {
  name: 'App',
  setup() {
    const userStore = useUserStore();
    const session = computed(() => userStore.session);


    const logout = () => {
      userStore.clearSession(); 
      this.$router.push('/login'); 
    };

    return {
      session,  
      logout,   
    };
  },
};
</script>
