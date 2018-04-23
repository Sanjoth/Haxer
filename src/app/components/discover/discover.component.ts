import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  constructor(private http: HttpClient) { }

  gen: GenreTy = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
    10765: "Sci-Fi & Fantasy",
    10768: "War & Politics",
    10767: "Talk",
    10766: "Soap",
    10764: "Reality",
    10763: "News",
    10762: "Kids",
    10759: "Action & Adventure"
  };

  sortby = {
    "popularity.asc": "Popularity ↑",
    "popularity.desc": "Popularity ↓",
    "release_date.asc": "Release Date ↑",
    "release_date.desc": "Release Date ↓",
    "revenue.asc": "Revenue ↑",
    "revenue.desc": "Revenue ↓",
    "primary_release_date.asc": "Primary Release Date ↑",
    "primary_release_date.desc": "Primary Release Date ↓",
    "original_title.asc": "Original Title ↑",
    "original_title.desc": "Original Title ↓",
    "vote_average.asc": "Vote Average ↑",
    "vote_average.desc": "Vote Average ↓",
    "vote_count.asc": "Vote Count ↑",
    "vote_count.desc": "Vote Count ↓"
  }
  genres_incl = [
    { "value": 28, "text": "Action", "checked": false },
    { "value": 12, "text": "Adventure", "checked": false },
    { "value": 16, "text": "Animation", "checked": false },
    { "value": 35, "text": "Comedy", "checked": false },
    { "value": 80, "text": "Crime", "checked": false },
    { "value": 99, "text": "Documentary", "checked": false },
    { "value": 18, "text": "Drama", "checked": false },
    { "value": 10751, "text": "Family", "checked": false },
    { "value": 14, "text": "Fantasy", "checked": false },
    { "value": 36, "text": "History", "checked": false },
    { "value": 27, "text": "Horror", "checked": false },
    { "value": 10402, "text": "Music", "checked": false },
    { "value": 9648, "text": "Mystery", "checked": false },
    { "value": 10749, "text": "Romance", "checked": false },
    { "value": 878, "text": "Science Fiction", "checked": false },
    { "value": 10770, "text": "TV Movie", "checked": false },
    { "value": 53, "text": "Thriller", "checked": false },
    { "value": 10752, "text": "War", "checked": false },
    { "value": 37, "text": "Western", "checked": false }
  ]
  genres_excl = [
    { "value": 28, "text": "Action", "checked": false },
    { "value": 12, "text": "Adventure", "checked": false },
    { "value": 16, "text": "Animation", "checked": false },
    { "value": 35, "text": "Comedy", "checked": false },
    { "value": 80, "text": "Crime", "checked": false },
    { "value": 99, "text": "Documentary", "checked": false },
    { "value": 18, "text": "Drama", "checked": false },
    { "value": 10751, "text": "Family", "checked": false },
    { "value": 14, "text": "Fantasy", "checked": false },
    { "value": 36, "text": "History", "checked": false },
    { "value": 27, "text": "Horror", "checked": false },
    { "value": 10402, "text": "Music", "checked": false },
    { "value": 9648, "text": "Mystery", "checked": false },
    { "value": 10749, "text": "Romance", "checked": false },
    { "value": 878, "text": "Science Fiction", "checked": false },
    { "value": 10770, "text": "TV Movie", "checked": false },
    { "value": 53, "text": "Thriller", "checked": false },
    { "value": 10752, "text": "War", "checked": false },
    { "value": 37, "text": "Western", "checked": false }
  ]
  before_date: any;

  sortby_values = Object.values(this.sortby);
  sortby_keys = Object.keys(this.sortby);
  langs: any;
  lang_object = {
    "No Language": "xx",
    "Afar": "aa",
    "Afrikaans": "af",
    "Akan": "ak",
    "Aragonese": "an",
    "Assamese": "as",
    "Avaric": "av",
    "Avestan": "ae",
    "Aymara": "ay",
    "Azerbaijani": "az",
    "Bashkir": "ba",
    "Bambara": "bm",
    "Bislama": "bi",
    "Tibetan": "bo",
    "Breton": "br",
    "Catalan": "ca",
    "Czech": "cs",
    "Chechen": "ce",
    "Slavic": "cu",
    "Chuvash": "cv",
    "Cornish": "kw",
    "Corsican": "co",
    "Cree": "cr",
    "Welsh": "cy",
    "Danish": "da",
    "German": "de",
    "Divehi": "dv",
    "Dzongkha": "dz",
    "Esperanto": "eo",
    "Estonian": "et",
    "Basque": "eu",
    "Faroese": "fo",
    "Fijian": "fj",
    "Finnish": "fi",
    "French": "fr",
    "Frisian": "fy",
    "Fulah": "ff",
    "Gaelic": "gd",
    "Irish": "ga",
    "Gallegan": "gl",
    "Manx": "gv",
    "Guarani": "gn",
    "Gujarati": "gu",
    "Haitian; Haitian Creole": "ht",
    "Hausa": "ha",
    "Serbo-Croatian": "sh",
    "Herero": "hz",
    "Hiri Motu": "ho",
    "Croatian": "hr",
    "Hungarian": "hu",
    "Igbo": "ig",
    "Ido": "io",
    "Yi": "ii",
    "Inuktitut": "iu",
    "Interlingue": "ie",
    "Interlingua": "ia",
    "Indonesian": "id",
    "Inupiaq": "ik",
    "Icelandic": "is",
    "Italian": "it",
    "Javanese": "jv",
    "Japanese": "ja",
    "Kalaallisut": "kl",
    "Kannada": "kn",
    "Kashmiri": "ks",
    "Kanuri": "kr",
    "Kazakh": "kk",
    "Khmer": "km",
    "Kikuyu": "ki",
    "Kinyarwanda": "rw",
    "Kirghiz": "ky",
    "Komi": "kv",
    "Kongo": "kg",
    "Korean": "ko",
    "Kuanyama": "kj",
    "Kurdish": "ku",
    "Lao": "lo",
    "Latin": "la",
    "Latvian": "lv",
    "Limburgish": "li",
    "Lingala": "ln",
    "Lithuanian": "lt",
    "Letzeburgesch": "lb",
    "Luba-Katanga": "lu",
    "Ganda": "lg",
    "Marshall": "mh",
    "Malayalam": "ml",
    "Marathi": "mr",
    "Malagasy": "mg",
    "Maltese": "mt",
    "Moldavian": "mo",
    "Mongolian": "mn",
    "Maori": "mi",
    "Malay": "ms",
    "Burmese": "my",
    "Nauru": "na",
    "Navajo": "nv",
    "Ndebele": "nd",
    "Ndonga": "ng",
    "Nepali": "ne",
    "Dutch": "nl",
    "Norwegian Nynorsk": "nn",
    "Norwegian Bokmål": "nb",
    "Norwegian": "no",
    "Chichewa; Nyanja": "ny",
    "Occitan": "oc",
    "Ojibwa": "oj",
    "Oriya": "or",
    "Oromo": "om",
    "Ossetian; Ossetic": "os",
    "Pali": "pi",
    "Polish": "pl",
    "Portuguese": "pt",
    "Quechua": "qu",
    "Raeto-Romance": "rm",
    "Romanian": "ro",
    "Rundi": "rn",
    "Russian": "ru",
    "Sango": "sg",
    "Sanskrit": "sa",
    "Sinhalese": "si",
    "Slovak": "sk",
    "Slovenian": "sl",
    "Northern Sami": "se",
    "Samoan": "sm",
    "Shona": "sn",
    "Sindhi": "sd",
    "Somali": "so",
    "Sotho": "st",
    "Spanish": "es",
    "Albanian": "sq",
    "Sardinian": "sc",
    "Serbian": "sr",
    "Swati": "ss",
    "Sundanese": "su",
    "Swahili": "sw",
    "Swedish": "sv",
    "Tahitian": "ty",
    "Tamil": "ta",
    "Tatar": "tt",
    "Telugu": "te",
    "Tajik": "tg",
    "Tagalog": "tl",
    "Thai": "th",
    "Tigrinya": "ti",
    "Tonga": "to",
    "Tswana": "tn",
    "Tsonga": "ts",
    "Turkmen": "tk",
    "Turkish": "tr",
    "Twi": "tw",
    "Uighur": "ug",
    "Ukrainian": "uk",
    "Urdu": "ur",
    "Uzbek": "uz",
    "Venda": "ve",
    "Vietnamese": "vi",
    "Volapük": "vo",
    "Walloon": "wa",
    "Wolof": "wo",
    "Xhosa": "xh",
    "Yiddish": "yi",
    "Zhuang": "za",
    "Zulu": "zu",
    "Abkhazian": "ab",
    "Mandarin": "zh",
    "Pushto": "ps",
    "Amharic": "am",
    "Arabic": "ar",
    "Bulgarian": "bg",
    "Cantonese": "cn",
    "Macedonian": "mk",
    "Greek": "el",
    "Persian": "fa",
    "Hebrew": "he",
    "Hindi": "hi",
    "Armenian": "hy",
    "English": "en",
    "Ewe": "ee",
    "Georgian": "ka",
    "Punjabi": "pa",
    "Bengali": "bn",
    "Bosnian": "bs",
    "Chamorro": "ch",
    "Belarusian": "be"
  };
  lang_keys: any;
  lang_values: any;
  sort_filter: string;
  hax_link: string;
  api_key = 'bd5e7f8161070f86bff1d8da34219f57'
  adult_filter = false;
  Date = new Date();
  data: any;
  movie_selected = true;
  sub: any;

  ngOnInit() {
    this.before_date = this.Date.toISOString().split('T')[0];
    this.lang_keys = Object.keys(this.lang_object);
    this.lang_values = Object.values(this.lang_object);
  }

  hax(vote_count = '1000', lang = 'Hindi', rating = '5', before = '1996-07-15', after = this.before_date) {
    let ratecheck = parseInt(rating);
    let votecount = parseInt(vote_count);
    let before_date = new Date(before);
    let after_date = new Date(after);
    if (ratecheck > 10) {
      alert("Rating can't be higher than 10");
      return;
    }
    if (votecount > 10000) {
      alert("Vote count out of range.");
      return;
    }
    if(before > after)
    {
      alert("From date can't be higher than To date.");
    }
    if(before > this.before_date || after > this.before_date)
    {
      alert("Please insert correct date range.");
    }
    if (this.sub != undefined) {
      this.sub.unsubscribe();
    }
    if (this.sort_filter === '') {
      this.sort_filter = 'popularity.desc';
    }
    if (before === '') {
      before = '1996-07-15'
    }
    if (rating === '') {
      rating = '5';
    }
    if (lang === '') {
      lang = 'English';
    }
    if (vote_count === '') {
      vote_count = '1000';
    }
    let in_genres = this.genres_incl.filter(opt => opt.checked).map(opt => opt.value).toString();
    let ex_genres = this.genres_excl.filter(opt => opt.checked).map(opt => opt.value).toString();
    if (this.movie_selected == true) {
      this.hax_link = 'https://api.themoviedb.org/3/discover/movie?api_key=' + this.api_key + '&language=en-IN&sort_by=' + this.sort_filter + '&include_adult=' + this.adult_filter + '&include_video=false&page=1&primary_release_date.gte=' + before + '&primary_release_date.lte=' + after + '&vote_count.gte=' + vote_count + '&vote_average.gte=' + rating + '&with_genres=' + in_genres + '&without_genres=' + ex_genres + '&with_original_language=' + this.lang_object[lang];
      console.log(this.hax_link);
    }
    else {
      this.hax_link = 'https://api.themoviedb.org/3/discover/tv?api_key=' + this.api_key + '&language=en-US&sort_by=' + this.sort_filter + '&page=1&include_null_first_air_dates=false&sort_by=' + this.sort_filter + '&include_adult=' + this.adult_filter + '&page=1&first_air_date.gte=' + before + '&first_air_date.lte=' + after + '&vote_count.gte=' + vote_count + '&vote_average.gte=' + rating + '&with_genres=' + in_genres + '&without_genres=' + ex_genres + '&with_original_language=' + this.lang_object[lang];
    }
    this.sub = this.http.get<UserResponse>(this.hax_link).subscribe(data => {
      this.data = data; // Assign local to global
      console.log(data);
    });
  }

  sortFix(sort) {
    this.sort_filter = sort;
    console.log(this.sort_filter);
  }

  setCat(bool, event) {
    this.movie_selected = bool;
    this.data = null;
    document.getElementById("haxthedb").click();
  }

}

interface UserResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Results[];
  ok: number;
  length: number;
}

interface Results {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
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
  [key: number]: string;
}
