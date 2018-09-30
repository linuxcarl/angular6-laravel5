import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Movie } from "../interfaces/movie";
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
	API_ENDPOINT = 'http://localhost:8055/api';
	constructor(private http:HttpClient) {
	}
	get(){
		return this.http.get(this.API_ENDPOINT + "/movies")
	}
	getById(id){
		if(id){
			return this.http.get(this.API_ENDPOINT + "/movies/id/"+id);
		}
	}
	save(movie: Movie){
		const headers = new HttpHeaders({'Content-Type': 'application/json'});
		return this.http.post(this.API_ENDPOINT + '/movies',movie, {headers: headers});
	}
	put(movie){
		const headers = new HttpHeaders({'Content-Type':'application/json'});
		return this.http.put(this.API_ENDPOINT + '/movies/' + movie.id, movie, {headers: headers});
	}
	delete(id){
		return this.http.delete(this.API_ENDPOINT + '/movies/' + id);
	}
}
