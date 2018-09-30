import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../services/movies.service";
import { Movie } from "../interfaces/movie";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	movie: Movie = {
		name        :null,
		genre       :null,
		year        :null,
		duration    :null,
		description :null
	}
	id:number;
	editing:boolean;
	constructor(private moviesService:MoviesService,
				private router: Router,
				private activatedRoute:ActivatedRoute) {
		this.id = this.activatedRoute.snapshot.params['id'];
		if(this.id){
			this.editing= true;
			this.moviesService.getById(this.id)
				.subscribe((result:Movie)=>{
					this.movie = result;
				},(e)=>{
					console.log(e);
				});
		}else{
			this.editing= false;
		}
	}

	ngOnInit() {
	}
	save(){
		if(this.id && this.editing){
			this.moviesService.put(this.movie)
				.subscribe(
					(res)=>{
						this.router.navigate(['home']);
					},(e)=>{

					});
		}else{
			this.moviesService.save(this.movie)
				.subscribe(
					(dat)=>{
						this.router.navigate(['home']);
					},(e)=>{
						console.log(e);
					})
		}
	}

}
