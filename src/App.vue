<template>
  <div id="app" class="container">
    <div class="text-center mb-2">
      <img src="@/assets/logo.png" />
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style>
.btn-icon {
  border: none;
  border-radius: 5px 5px 5px 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.btn-icon .material-icons {
  line-height: 1.5;
}
</style>
