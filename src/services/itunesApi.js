import axios from 'axios';
import { environment } from '../environments/environment';

// https://itunes.apple.com/search?term=nombre+artista&entity=song

const API_URL = environment.apiUrl;

export function getSongsList(searchTerm) {
  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}?term=${searchTerm}`)
      .then((response) => { resolve(response.data.results); })
      .catch((error) => { reject(error); });
  });
}
