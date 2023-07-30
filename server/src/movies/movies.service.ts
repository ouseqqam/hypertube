import { Injectable } from '@nestjs/common'
import axios from 'axios'

@Injectable()
export class MoviesService {
    private ytsApiBaseUrl = 'https://yts.mx/api/v2'
    
    async getMovies(): Promise<any> {
        try {
          const response = await axios.get(`${this.ytsApiBaseUrl}/list_movies.json?limit=1`);
          return response.data.data.movies;
        } catch (error) {
          throw new Error('Failed to fetch movies from YTS API');
        }
    }
}
