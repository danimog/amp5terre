import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: ['~/assets/bootstrap/css/bootstrap.min.css'],
    script: [
      {
        src: "~/assets/bootstrap/js/bootstrap.bundle.min.js",
        type: "text/javascript"
      }
     ]

})
