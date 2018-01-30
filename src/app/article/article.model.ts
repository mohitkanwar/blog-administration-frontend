import { Blog } from "../blog/blog.model";

export class Article{
    articleText:string;
    lastModificationDate:Date;
    constructor(
        public id:string,
        public title:string,
        public summary:string,
        public publishState:string){}
}