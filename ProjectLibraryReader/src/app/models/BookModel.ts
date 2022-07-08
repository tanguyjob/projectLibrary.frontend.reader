export class BookModel {
    id!: number;
    title!: string;
    resume!: string;
    publicationDate!: Date;
    languageId!: number;

    constructor(id:number,title:string,resume: string,publicationDate: Date,languageId: number )
    {
        this.id = id;
        this.title=title;
        this.resume=resume;
        this.publicationDate=publicationDate,
        this.languageId=languageId
    }
}