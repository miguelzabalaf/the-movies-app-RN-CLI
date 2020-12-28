import { API_HOST, API_KEY, LANG } from "../utils/constants";

export const getNowPlayingMoviesApi = (page = 1, ) => {

  const url = `${ API_HOST }/movie/now_playing?api_key=${ API_KEY }&lenguage=${ LANG }&page=${ page }`;

  return fetch(url).then((resp) => {
    return resp.json();
  }).then((data) => {
    // console.log('getNowPlayingMoviesApi:', data);
    return data;
  });

}