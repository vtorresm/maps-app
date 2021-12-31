import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';

const actions: ActionTree<PlacesState, StateInterface> = {
  getInitialLocation({ commit }) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => commit('setLngLat', {lng: coords.longitude, lat: coords.latitude}),
      (err) => {
        console.log(err);
        throw new Error('Error getting location');
      }
    );
  },
};

export default actions;
