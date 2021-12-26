import { useStore } from 'vuex';
import { StateInterface } from '@/store/index';
import { onMounted } from 'vue';

export const usePlacesStore = () => {
  const store = useStore<StateInterface>();

  onMounted(() => {
    if (!store.getters['places/isUserlocationReady']) {
      store.dispatch('places/getInitialLocation');
    }
  });

  return {};
};
