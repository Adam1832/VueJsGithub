<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="p-8 rounded-lg shadow-xl w-96">
      <h1 class="text-2xl text-pink-400 text-center mb-6 font-semibold">Connexion</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700">Nom d'utilisateur</label>
          <input
            v-model="username"
            type="text"
            id="username"
            placeholder="Nom d'utilisateur"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"required/>
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="Mot de passe"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"required/>
        </div>
        <button
          type="submit"
          class="w-full bg-red-300 text-white py-2 rounded-md hover:shadow-xl transition duration-200 hover:scale-105">Se connecter
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/userStore';
import users from '../users.json'; 

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  mounted() {
    const userStore = useUserStore();
  
    if (userStore.session) {
      console.log('Utilisateur déjà connecté', userStore.session);
      this.$router.push('/products');
    }
  },
  methods: {
    login() {
      const userStore = useUserStore(); 
      console.log('Tentative de connexion...');
      console.log('userStore :', userStore);

      const user = users.find(
        (u) => u.username === this.username && u.password === this.password
      );

      if (user) {
        alert('Connexion réussie !');
        
        userStore.setSession(user); 
        this.$router.push('/products'); 
      } else {
        alert("Nom d'utilisateur ou mot de passe incorrect");
      }
    },
  },
};
</script>
