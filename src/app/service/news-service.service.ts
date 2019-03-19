import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise'; // Mi promesa :3

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor( private http: Http, private route: ActivatedRoute) { }

  private static urlArticles = 'https://newsapi.org/v2/top-headlines?country=ar&apiKey=c8971d48774d4483865dec3d76057af3';

  getArticulos(): Promise<Articulo[]> {
    return this.http.get(NewsServiceService.urlArticles)
      .toPromise().then(response => response.json() as Articulo[]);
  }
}
// Defino mi interface para Articulo

export interface Articulo {
  articles: {
    source: { // Fuente
      name: string;
    },
    author: string;
    title: string;
    url: string;
    urlToImage: string;
  }[];

}
