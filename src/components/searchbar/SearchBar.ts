import { computed, defineComponent, ref } from 'vue';

import { usePlacesStore } from '@/composables';

import SearchResults from '@/components/search-results/SearchResults.vue';

export default defineComponent({
  name: 'SearchBar',
  components: { SearchResults },
  setup() {
    const debounceTimeout = ref();
    const debounceValued = ref('');

    const { searchPlacesByTerm } = usePlacesStore();

    return {
      debounceValued,

      searchTerm: computed({
        get() {
          return debounceValued.value;
        },
        set(val: string) {
          if (debounceTimeout.value) clearTimeout(debounceTimeout.value);

          debounceTimeout.value = setTimeout(() => {
            debounceValued.value = val;
            searchPlacesByTerm(val);
          }, 500);
          //
        },
      }),
    };
  },
});
