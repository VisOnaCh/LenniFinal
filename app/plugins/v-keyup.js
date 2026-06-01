export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("keyup", {
        mounted(el, binding) {
        }
    })
});