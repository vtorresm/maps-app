import { Feature } from '@/interfaces/places';
import mapboxgl from 'mapbox-gl';
import { MutationTree } from 'vuex';
import { MapState } from './state';

const mutation: MutationTree<MapState> = {
  setMap(state, map: mapboxgl.Map) {
    state.map = map;
  },

  setPlacemarkers(state, places: Feature[]) {
    // Remove all existing markers
    state.markers.forEach((marker) => marker.remove());
    state.markers = [];

    if (!state.map) return;

    // Add new markers
    for (const place of places) {
      const [lng, lat] = place.center;

      const popup = new mapboxgl.Popup()
        .setLngLat([lng, lat])
        .setHTML(`<h3>${place.text}</h3>`);

      const marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(state.map);

      state.markers.push(marker);
    }
  },

  setRoutePolyline(state, coords: number[][]) {
    const start = coords[0];
    const end = coords[coords.length - 1];

    const bounds = new mapboxgl.LngLatBounds(
      // Definir los bounds
      [start[0], start[1]],
      [end[0], end[1]]
    );

    for(const coord of coords) {
      const newCoord: [number, number] = [coord[0], coord[1]];
      bounds.extend(newCoord);
    }
  },
};

export default mutation;
