class Youtube{// starting of the class
 
 private title: string;
 private releasedate: string;
 private views: number;
 public likes: number;
 public dislikes: number;
 private subscribers: number;
 private uploadedby: string;
 private commentscount: number;
 
 constructor(title : string, releasedate : string, views : number, likes: number, dislikes : number, subscribers: number, uploadedby : string, commentcount : number){
     this.title=title;
     this.releasedate=releasedate;
     this.views=views;
     this.likes=likes;
     this.dislikes=dislikes;
     this.subscribers=subscribers;
     this.uploadedby=uploadedby;
     this.commentscount=commentcount;
 }

 getTitle = () : string =>{
     return this.title;
 }

 getViews =() : number =>{
     return this.views;
 }
 getlikes =() : number =>{
    return this.likes;
}
getdislikes =() : number =>{
    return this.dislikes;
}
getSubscribers =() : number =>{
    return this.subscribers;
}
getcommentscount =() : number =>{
    return this.commentscount;
}
getUploadedby =() :string =>{
    return this.uploadedby;
}
getReleasedate =() :string =>{
    return this.releasedate;
}

setViews=(uv:number)=>{
    this.views=uv;
}
setLikes=(ul:number)=>{
    this.views=ul;
}
setComments=(uc:number)=>{
    this.views=uc;
}

 

}// end of the class

let youtube1 = new Youtube("How it made ice cream","jun 5 2018",35192,1800,150,19200, "Sandwich", 800 )

console.log(youtube1.getViews());
console.log(youtube1.getlikes());
console.log(youtube1.getcommentscount());

youtube1.setViews(3519260);
youtube1.setLikes(19000);
youtube1.setComments(845);
console.log(youtube1.getTitle());
console.log(youtube1.getReleasedate());
console.log(youtube1.getlikes());
console.log(youtube1.getdislikes());
console.log(youtube1.getViews());
console.log(youtube1.getUploadedby());
console.log(youtube1.getSubscribers());
console.log(youtube1.getcommentscount());


