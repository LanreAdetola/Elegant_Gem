<template>
    <div class="language-switcher">
      <select v-model="selectedLanguage" @change="switchLanguage">
        <option value="en">En</option>
        <option value="fr">Fr</option>
      </select>
    </div>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n';
  import { ref } from 'vue';
  
  const { locale } = useI18n();
  const selectedLanguage = ref(locale.value); // Bind the dropdown to the current language
  
  function switchLanguage() {
    locale.value = selectedLanguage.value; // Update the language based on the selected value
  }
  </script>
  
  <style scoped>
  select {
    padding: 5px 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f0f0f0;
    color: #333;
    cursor: pointer;
  }
  
  select:focus {
    outline: none;
    border-color: #42b883;
  }
  </style>
  