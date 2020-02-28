<template>
  <div>
    <h4 class="text-center text-info" v-if="isNewNauticBase()">Créer une nouvelle base nautique</h4>
    <h4 class="text-center text-info" v-if="!isNewNauticBase()">Edition de la base nautique</h4>
    <form class="p-2">
      <div class="form-group">
        <label for="name">Nom*</label>
        <input type="text" class="form-control" id="name" placeholder="Nom"
          v-bind:class="{ 'border-require': !nauticBase.isValidName() }" v-model="nauticBase.name">
        <small class="form-text text-danger" v-if="!nauticBase.isValidName()">
          Veuillez rentrer un nom valide</small>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" id="description" rows="3" placeholder="Description"
          v-model="nauticBase.description"></textarea>
      </div>
      <div class="form-group">
        <label for="address">Adresse*</label>
        <input type="text" class="form-control" id="address" placeholder="Adresse"
          v-bind:class="{ 'border-require': !nauticBase.isValidAddress() }"
            v-model="nauticBase.address">
        <small class="form-text text-danger" v-if="!nauticBase.isValidAddress()">
          Veuillez rentrer une adresse valide</small>
      </div>
      <div class="form-group">
        <label for="city">Ville*</label>
        <input type="text" class="form-control" id="city" placeholder="Ville"
          v-bind:class="{ 'border-require': !nauticBase.isValidCity() }" v-model="nauticBase.city">
        <small class="form-text text-danger" v-if="!nauticBase.isValidCity()">
          Veuillez rentrer une ville valide</small>
      </div>
      <div class="form-group">
        <label for="postalCode">Code postal*</label>
        <input type="text" class="form-control" id="postalCode" placeholder="Code postal"
          v-bind:class="{ 'border-require': !nauticBase.isValidPostalCode() }"
          v-model="nauticBase.postalCode">
        <small class="form-text text-danger" v-if="!nauticBase.isValidPostalCode()">
          Veuillez rentrer un code postal valide</small>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <button type="submit" class="btn btn-danger" v-on:click="cancel()">Annuler</button>
        </div>
        <div>
          <button type="button" v-if="isNewNauticBase()" class="btn btn-info"
            :disabled="!nauticBase.isValid()"
            v-on:click="createNewNauticBase()">Enregistrer</button>
          <button type="button" v-if="!isNewNauticBase()" class="btn btn-info"
          :disabled="!nauticBase.isValid()" v-on:click="editNauticBase()">Modifier</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script src="./form.js"></script>
<style scoped src="./form.css"></style>
