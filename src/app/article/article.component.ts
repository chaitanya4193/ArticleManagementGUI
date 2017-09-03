/**
 * New typescript file
 */
import { Component } from '@angular/core';

import { IArticle } from './article.interface';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-table',
  templateUrl: './article.component.html',
  providers: [ ArticleService ]

})
export class ArticleComponent {
  articles: IArticle[];
  showArticles: boolean;
  
  constructor(private articleService: ArticleService) {
    this.articleService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
    this.showArticles = this.articles !== undefined && this.articles.length!=0 ? true : false ;
  }

  addArticle(article : IArticle){
    // Call Add http request
    this.articleService.addArticle(article);
  }

  editArticle(id:number){
    // Call Edit http request
    this.articleService.editArticle(id);
  }

  deleteArticle(id:number){
    // Call Delete http request
    this.articleService.deleteArticle(id);
  }
}
