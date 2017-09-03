import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/Operator/map';


import { IArticle } from '../article/article.interface';

const GET_ARTICLE_URL = 'http://localhost:8080/article' ;

@Injectable()
export class ArticleService{

	constructor(private http : Http){
		console.log('Initializing Article service...');
	}

	getArticles(){
		return this.http.get(GET_ARTICLE_URL)
		.map(res => res.json());
	}

	addArticle(article:IArticle){
	}

	editArticle(id:number){
	}

	deleteArticle(id:number){
	}
} 