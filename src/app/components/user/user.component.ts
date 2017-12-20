import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // Global Vars
  title = 'A Hybrid Movie Search & Recommendation System for the real world!';
  tmdb:string;
  data:object;
  blank:object;
  movieid:number;
  
 

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
  constructor(private http: HttpClient){}

  sendReq(query){
    if(query == '')
    {
      this.data=this.blank; //Clearing Search Box
    }
    //console.log(query);
    this.tmdb = 'https://api.themoviedb.org/3/search/movie?api_key=bd5e7f8161070f86bff1d8da34219f57&query='+query+'&page=1';
    this.http.get<UserResponse>(this.tmdb).subscribe(data => {
      this.data = data; // Assign local to global
    });
  }
  ngOnInit(){}


  // Function to udpate cookie data with latest info
  localStorageUpdate(cookieName1,cookieName2,movieid,genre){
console.log(movieid,genre);
    if(!localStorage.getItem("UserEmail") || genre.length == 0)
    {
      //Dont track
      //console.log("Genre issue");
      return false;
    }

    if(localStorage.getItem(`"${cookieName1}"`)!= null)
    {
    let checkDupli = localStorage.getItem(`"${cookieName1}"`);
    let delim = checkDupli.split(",");
    let num = delim.length;
    let index = 0;

    // If movie already tracked
    for(index = 0; index < num; index++)
    {
      if(movieid == delim[index])
      {
        return false;
      }
    }
  }

    console.log(movieid,genre);

    if((localStorage.getItem(`"${cookieName1}"`)!= null) && (localStorage.getItem(`"${cookieName2}"`)!= null))
    { 
      // If data already in cookie & both cookie names is specified
    localStorage.setItem(`"${cookieName1}"`, `${localStorage.getItem(`"${cookieName1}"`)},${movieid}`);
    localStorage.setItem(`"${cookieName2}"`, `${localStorage.getItem(`"${cookieName2}"`)},${genre}`);
    console.log("Cookie1Mov "+localStorage.getItem(`"${cookieName1}"`));
    console.log("Cookie2Gen "+localStorage.getItem(`"${cookieName2}"`));
    }
    else if((localStorage.getItem(`"${cookieName1}"`)!= null) && cookieName2 == ""){
      // If data already in cookie but only 1 cookie name specified
      localStorage.setItem(`"${cookieName1}"`, `${localStorage.getItem(`"${cookieName1}"`)},${movieid}`);
      console.log("Cookie1Mov "+localStorage.getItem(`"${cookieName1}"`));
    }
    else
    {
      // If cookie new
      localStorage.setItem(`"${cookieName1}"`, `${movieid}`);
      localStorage.setItem(`"${cookieName2}"`, `${genre}`);
      console.log("Cookie1Mov "+localStorage.getItem(`"${cookieName1}"`));
      if(cookieName2 != '')
      {
      console.log("Cookie2Gen "+localStorage.getItem(`"${cookieName2}"`));
      }
    }
  }

  trackClick(movieid,genre){    
    this.localStorageUpdate("Intrst_MovieIDs","Intrst_GenreIDs",movieid,genre);   
  }
  likeMovie(movieid,genre){
    this.localStorageUpdate("Like_MovieIDs","Like_GenreIDs",movieid,genre);
    return true;  
  }
  dislikeMovie(movieid,genre){
    this.localStorageUpdate("Dislike_MovieIDs","Dislike_GenreIDs",movieid,genre);
    return true;  
  }
  addList(movieid,genre){
    this.localStorageUpdate("Bookmarked","",movieid,genre);
    return true;  
  }

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
