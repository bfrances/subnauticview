<template>
  <div>
    <h4 class="text-center mb-3">
      {{ nauticBase.name }}
      <button type="button" class=" btn-info btn-icon" v-on:click="goEditView()">
        <i class="material-icons">edit</i>
      </button>
    </h4>
    <div class="row">
      <div class="col" v-if="nauticBase.haveDescription()">
        <p class="white-space-pre-line">
          {{ nauticBase.description }}
        </p>
      </div>
      <div class="col text-center">
        {{ nauticBase.address }}<br />
        {{ nauticBase.postalCode }}  {{ nauticBase.city }}<br />
      </div>
    </div>
    <div class="text-center mt-3">
      <a href="javascript:void()" class="text-info font-italic"
        v-on:click="goHomeView()">Retour</a> -
      <a href="javascript:void()" class="text-danger font-italic"
        v-on:click="deleteNauticBase()">Supprimer...</a>
    </div>
  </div>
</template>

<script src="./nauticBase.js"></script>
<style scoped src="./nauticBase.css"></style>
