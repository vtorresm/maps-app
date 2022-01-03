import axios from 'axios';

const directionApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token:
      'pk.eyJ1IjoidnRvcnJlc20iLCJhIjoiY2t2dTZvaDlxMDQydjJudG5zYWkxdWdoMyJ9.9h-YXBSVysaxjbQwARY15A',
  },
});

export default directionApi;
