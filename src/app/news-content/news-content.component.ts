import { Component, OnInit } from '@angular/core';
import { NewsServiceService, Articulo } from '../service/news-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css']
})
export class NewsContentComponent implements OnInit {

  articulos: Articulo[];

  constructor( private newsService: NewsServiceService, private route: ActivatedRoute  ) { }

  ngOnInit() {
    // Me va a buscar todos los artículos
    this.newsService.getArticulos().then( data => this.articulos = data);
  }

}
