import { Article } from "../article/article.model";

export class Blog{
    id:number
    title:string
    description:string
    articles:Article[]
    
    constructor(id:number,title:string,description:string){
        this.id=id;
        this.title=title;
        this.description=description;
    }
}