import { createI18n } from 'vue-i18n';

// Define your translation messages
const messages = {
  en: {
    home: 'Home',
    products: 'Products',
    cart: 'Cart',
    addToCart: 'Add to Cart',
  },
  fr: {
    home: 'Accueil',
    products: 'Produits',
    cart: 'Panier',
    addToCart: 'Ajouter au Panier',
  },
};

const i18n = createI18n({
  locale: 'en', // Set default language to English
  messages,
});

export default i18n;
