import { Component, OnInit,Input } from '@angular/core';
import { MoviesService } from "../services/movies.service";
import { Movie } from "../interfaces/movie";
import { Router } from "@angular/router";
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  	template: `
	    <div class="modal-header bg-dark">
	      <h4 class="modal-title"> <i class="fas fa-trash-alt"></i>   Eliminar pelicula</h4>
	      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
	        <span aria-hidden="true">&times;</span>
	      </button>
	    </div>
	    <div class="modal-body bg-dark">
	      <h5>¿Desea eliminar la pelicula {{name_movie}}?</h5>
	    </div>
	    <div class="modal-footer bg-dark">
	      <button type="button" class="btn btn-danger" (click)="deleteMovie(id)"><i class="fas fa-trash-alt"></i>  Eliminar</button>
	      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')"><i class="fas fa-times"></i>  Cerrar</button>
	    </div>
	  `
})
export class ModalDeleteComponent{
	@Input() name_movie;
	@Input() id;
  	constructor(private router:Router,
  				private moviesService:MoviesService,
  				public activeModal: NgbActiveModal) {}

	deleteMovie(id){
		this.moviesService.delete(id)
			.subscribe(
				()=>{
					this.router.navigateByUrl("/", { skipLocationChange: false });
				},(e)=>{
					console.log(e);
				});
	}
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	movies: Movie[];
	constructor(public moviesService:MoviesService,
				private modal:NgbModal) {
		this.getMovies();
		this.modal.dismissAll();
	}
	public getMovies(){
		this.moviesService.get().subscribe((data: Movie[]) => {
			this.movies = data;
		},(error) => {
			console.log(error);
		})
	}

	ngOnInit() {

	}
	modalDelete(name_movie,id){
		const modalRef = this.modal.open(ModalDeleteComponent);
    	modalRef.componentInstance.name_movie = name_movie;
    	modalRef.componentInstance.id = id;
	}
}
