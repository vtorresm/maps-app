<script lang="ts" src="./MapView.ts" />

<template>
  <div
    v-if="!isUserlocationReady"
    class="loading-map d-flex justify-content-center align-items-center"
  >
    <h3>Espere por favor</h3>
    <span>Localizando...</span>
  </div>

  <div v-show="isUserlocationReady" class="map-container" ref="mapElement"></div>
</template>

<style scoped>
.map-container {
  height: 100vh;
  position: fixed;
  width: 100vw;
}

.loading-map {
  background: rgba(0, 0, 0, 0.8);
  color: white;
  height: 100vh;
  left: 0px;
  position: fixed;
  top: 0px;
  width: 100vw;
  z-index: 9999;
}
</style>