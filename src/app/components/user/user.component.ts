import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatInputModule} from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // Global Vars
  title = 'A Hybrid Movie Search & Recommendation System for the real world!';
  hell:string;
  data:object;
  blank:object;

  gen: GenreTy = {
    28:"Action",        
    12:"Adventure",        
    16:"Animation",   
    35:"Comedy",   
    80:"Crime", 
    99:"Documentary", 
    18:"Drama", 
    10751:"Family",
    14:"Fantasy",
    36:"History",
    27:"Horror",
    10402:"Music",
    9648:"Mystery",
    10749:"Romance",  
    878:"Science Fiction", 
    10770:"TV Movie",  
    53:"Thriller",  
    10752:"War",
    37:"Western"
};


  constructor(private http: HttpClient){
  }

  trackClick(movieid,genre){
    console.log(movieid,genre);
    console.log(this.gen[28]);
  }
  
  sendReq(query){
    if(query == '')
    {
      this.data=this.blank; //Clearing Search Box
    }
    //console.log(query);
    this.hell = 'https://api.themoviedb.org/3/search/movie?api_key=bd5e7f8161070f86bff1d8da34219f57&query='+query+'&page=1';
    this.http.get<UserResponse>(this.hell).subscribe(data => {
      this.data = data; // Assign local to global
    });
  
  
  }
  ngOnInit(){}

}

//  BELOW INTERFACES FOR PARSING JSON OBJECT
interface UserResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results:Results[];
}

interface Results{
  adult: boolean;
  backdrop_path: string;
  genre_ids:number[];
  original_language: string;
  id: number;
  vote_average: number;
  vote_count: number;
  title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
}

interface GenreTy {
  [key: number]:  string;
}

/* console.log(data);
      console.log(data.page);
      console.log(data.total_results);
      console.log(data.total_pages);
      console.log(data.results[0].id);
      console.log(data.results[0].vote_average);
      console.log(data.results[0].vote_count);
      console.log(data.results[0].title);
      console.log(data.results[0].overview);
      console.log(data.results[0].poster_path);
      console.log(data.results[0].genre_ids[0]);
      console.log(data.results[0].genre_ids[1]);
      console.log(data.results[0].genre_ids[2]);
      console.log(data.results[0].popularity);
 */
