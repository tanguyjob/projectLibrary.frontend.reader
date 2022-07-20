import { add, parse } from "date-fns";

export class BorrowingBookCustomModel {
    borrowingId!: number;
    dateBack!: Date;
    dateBegin!: Date;
    get plannedDate() { return add(this.dateBegin, { weeks:3 }); }
    addtional!: boolean;
    copyId!: number;
    bookId!: number;
    title!:string;
    resume!:string;
    publicationDate!:Date; 

    constructor(obj?: any) {
        this.borrowingId = obj && obj.borrowingId || "";
        // this.dateBegin = obj && parse(obj.dateBegin, "yyyy-mm-dd") || null;
        // this.dateBack = obj && parse(obj.dateBack, "yyyy-mm-dd") || null;
         this.dateBegin = obj && parse(obj.dateBegin, "yyyy-mm-dd",new Date()) || null;
         this.dateBack = obj && parse(obj.dateBack, "yyyy-mm-dd", new Date()) || null;
        this.addtional=obj && obj.additional || "";
        this.copyId=obj && obj.copyId || "";
        this.bookId=obj && obj.bookId || "";
        this.title=obj && obj.title || "";
        this.resume=obj && obj.resume || "";
        this.publicationDate=obj && obj.publicationDate || "";
    }
    
}