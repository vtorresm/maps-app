import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit:5,
    language: "es",
    access_token: 'pk.eyJ1IjoidnRvcnJlc20iLCJhIjoiY2t2dTZvaDlxMDQydjJudG5zYWkxdWdoMyJ9.9h-YXBSVysaxjbQwARY15A'
  }

});

export default searchApi;
