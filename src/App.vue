<template>
  <router-view />
</template>

<style scopped>
nav a {
  @apply text-site-gray-1;
}

nav a.router-link-exact-active {
  @apply text-site-green-3 font-extrabold;
}
</style>
