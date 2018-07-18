class Facebook{

    private Name: string;
    private birthDate: string;
    private EducationDetails: string;
    private Gender: string;
    private LivesIn: string;
    private Native: string;
    private Religion: string;
    private RelationshipStatus: string;
    private WorksAt : string;
    private MobileNumber: number;
    private FriendsList: number;

    constructor(Name:string,birthDate:string, EducationDetails: string, Gender: string, LivesIn: string, Native: string, Religion: string, RelationshipStatus: string, WorksAt : string, MobileNumber: number, FriendsList: number){
        this.Name=Name;
        this.birthDate=birthDate;
        this.EducationDetails=EducationDetails;
        this.Gender=Gender;
        this.LivesIn=LivesIn;
        this.Native=Native;
        this.Religion=Religion;
        this.RelationshipStatus=RelationshipStatus;
        this.WorksAt=WorksAt;
        this.MobileNumber=MobileNumber;
        this.FriendsList=FriendsList;
    }

    getName= (): string =>{
           return this.Name;
    }
    getEducationDetails= (): string =>{
        return this.EducationDetails;
 }
 getbirthDate= (): string =>{
    return this.birthDate;
}
getGender= (): string =>{
    return this.Gender;
}
getLivesIn= () : string =>{
    return this.LivesIn;
}
getNative= (): string =>{
    return this.Native;
}
getReligion= (): string =>{
    return this.Religion;
}
getRelationStatus= (): string =>{
    return this.RelationshipStatus;
}
getWorksat= (): string => {
    return this.WorksAt;
}

getMobileNumber = (): number =>{
    return this.MobileNumber;
}
getFriendsList= (): number =>{
    return this.FriendsList;
}
setLivesIn=(ul:string) =>{
     this.LivesIn=ul;
}
setFriendsList=(uf:number) =>{
    this.FriendsList=uf;
}
setMobileNumber =(um:number)=>{
    this.MobileNumber=um;
}
}// end of the class

let User = new Facebook("Venkatesh","Aug 30 1991", "B.tech","Male","Karnataka","Andhra Pradesh","hindu","Married","Intel",999999999,1000)
console.log(User.getLivesIn());
console.log(User.getFriendsList());
console.log(User.getMobileNumber());

User.setFriendsList(2000);
User.setLivesIn("Chennai");
User.setMobileNumber(8888888888);

console.log(User.getName());
console.log(User.getbirthDate());
console.log(User.getEducationDetails());
console.log(User.getGender());
console.log(User.getLivesIn());
console.log(User.getNative());
console.log(User.getReligion());
console.log(User.getRelationStatus());
console.log(User.getWorksat());
console.log(User.getFriendsList());
console.log(User.getMobileNumber());

