<template>
    <div class="min-h-screen flex items-center justify-center ">
      <div class="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 class="text-2xl text-green font-semibold text-center mb-6">Inscription</h1>
        <form @submit.prevent="signup">
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
            class="w-full bg-red-300 text-white py-2 rounded-md hover:shadow-xl transition duration-200 hover:scale-105"> S'inscrire
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { useUserStore } from '@/stores/userStore';
  
  export default {
    name: 'Signup',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      signup() {
        const userStore = useUserStore(); 
        const newUser = { username: this.username, password: this.password };
  
        userStore.setSession(newUser); 
        this.$router.push('/login'); 
      },
    },
  };
  </script>
  