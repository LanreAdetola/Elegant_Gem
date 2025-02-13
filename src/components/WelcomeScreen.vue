<script setup>
import { ref, defineEmits } from 'vue';

// Emit function for the parent component
const emit = defineEmits();

// Local state for selected language and visit status
const selectedLanguage = ref('en'); // Default language is English
const isFirstVisit = ref(true); // Track if it's the first visit

// Emit selected preferences to parent component and update visit status
function submitPreferences() {
  console.log('Preferences selected:', selectedLanguage.value); // Debug output
  emit('preferencesChosen', selectedLanguage.value);
  isFirstVisit.value = false; // Set to false after preferences are chosen
}
</script>

<template>
  <div v-if="isFirstVisit" class="welcome-container">
    <div class="welcome-card">
      <h1>The Elegant Gem</h1>

      <!-- Language Selection -->
      <label for="language">Choose Language:</label>
      <select v-model="selectedLanguage" id="language">
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>

      <!-- Submit Button -->
      <button @click="submitPreferences">Enter Site</button>
    </div>
  </div>
</template>

<style scoped>
/* Full-screen container for centering */
.welcome-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Ensure it fills the whole screen height */
  
}

/* Card-style welcome screen */
.welcome-card {
  background-color: #a9a6a69e;
  padding: 2em;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
  font-family: Arial, sans-serif;
}

/* Headline */
h1 {
  position: relative;
  top: 30px;
  font-size: 3.0em;
  color: black;
}

/* Form labels */
label {
  display: block;
  font-size: 1em;
  color: black;
  margin-top: 1em;
  margin-bottom: 0.5em;
  text-align: left;
}

/* Dropdown */
select {
  width: 100%;
  padding: 0.8em;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin-bottom: 1em;
  outline: none;
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1);
}

/* Button styling */
button {
  padding: 0.8em 1.5em;
  background-color: black;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  margin-top: 1em;
  transition: background-color 0.3s;
}

button:hover {
  background-color: grey;
}
</style>
