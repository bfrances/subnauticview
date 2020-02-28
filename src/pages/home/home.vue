<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <h5>Base Nautiques</h5>
        <button type="button" class="btn-info btn-icon" v-on:click="goCreateView()">
          <i class="material-icons">add</i>
        </button>
      </li>
      <li class="list-group-item font-italic" v-if="nauticBases.length == 0">
        Aucune base nautique cliquer sur le bouton "plus" pour en ajouter
      </li>
      <li v-for="(nauticBase, index) in nauticBases" :key="index" class="list-group-item"
        v-on:click="goNauticBaseView(nauticBase.id)">
        <div class="media">
          <div class="media-body">
            <h5 class="mt-0 mb-1">{{ nauticBase.name }}</h5>
            {{ nauticBase.description | trunctate }}
          </div>
          <button type="button" class="btn-secondary btn-icon">
            <i class="material-icons">chevron_right</i>
          </button>
        </div>
      </li>
    </ul>
    <!-- Maybe to do a component //-->
    <nav aria-label="Pagination" v-if="pagination.nbPages > 1">
      <ul class="pagination justify-content-center">
        <li class="page-item" v-if="pagination.page > 1"
            v-on:click="getNauticBases(pagination.page - 1)">
          <a class="page-link" href="javascript:void()" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"
          v-for="index in pagination.nbPages"
          :key="index"
          v-bind:class="{ 'active': index == pagination.page }"
          v-on:click="getNauticBases(index)">
          <a class="page-link" href="javascript:void()">{{ index }}</a>
        </li>
        <li class="page-item" v-if="pagination.page < pagination.nbPages"
          v-on:click="getNauticBases(pagination.page + 1)">
          <a class="page-link" href="javascript:void()" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script src="./home.js"></script>
<style scoped src="./home.css"></style>
