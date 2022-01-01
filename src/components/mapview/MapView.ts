import { usePlacesStore } from '@/composables';
import mapboxgl from 'mapbox-gl';
import { defineComponent, onMounted, ref, watch } from 'vue';

export default defineComponent({
  name: 'MapView',
  setup() {
    const mapElement = ref<HTMLDivElement>();

    const { userLocation, isUserlocationReady } = usePlacesStore();

    const initMap = async () => {
      if (!mapElement.value) throw new Error('Div element no exits');
      if (!userLocation.value) throw new Error('user location no exits');

      await Promise.resolve();

      const map = new mapboxgl.Map({
        container: mapElement.value, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15, // starting zoom
      });

      const myLocationPopup = new mapboxgl.Popup()
        .setLngLat(userLocation.value)
        .setHTML('<p>You are here</p>')

      const myLocationMarker = new mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .setPopup(myLocationPopup)
        .addTo(map);
    };

    onMounted(() => {
      if (isUserlocationReady.value) return initMap();
    });

    watch(isUserlocationReady, (newValue) => {
      if (isUserlocationReady.value) initMap();
    });

    return {
      isUserlocationReady,
      mapElement,
    };
  },
});
