import { usePlacesStore } from '@/composables';
import mapboxgl from 'mapbox-gl';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'MapView',
  setup() {
    const mapElement = ref<HTMLDivElement>();

    const { userLocation, isUserlocationReady } = usePlacesStore();

    const initMap = () => {
      if(!mapElement.value) return;
      
      const map = new mapboxgl.Map({
        container: mapElement.value, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
      });
    };

    onMounted(() => {
      console.log(mapElement.value);
    });

    return {
      isUserlocationReady,
      mapElement,
    };
  },
});
