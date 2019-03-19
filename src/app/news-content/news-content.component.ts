import { Component, OnInit } from '@angular/core';
import { NewsServiceService, Articulo } from '../service/news-service.service';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css']
})
export class NewsContentComponent implements OnInit {

  articulos: Articulo[];

  constructor( private newsService: NewsServiceService ) { }

  ngOnInit() {
    this.newsService.getArticulos().then( data => this.articulos = data);
  }

}
