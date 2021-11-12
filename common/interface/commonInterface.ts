export interface IcheckPassword{
    name:string,
    password:string,
}

export class IformGroupAdmin{
    RocketName:string;
    Distance:string;
    Date:string;
    time:string;
    EnterMembers:number;
}

export class CcheckPassword{
    name:string;
    password:string;
}
export class IformGroupSignUp{
Name: string;
LastName:string;
Email:string;
newPassword:string;
confirmPassword: string;
}

export class Ibooking{
        name:string;
       Distance:string;
        amount:number;
        image:string;
}

export class IbookingResult{
    amount:number;
    Name:string;
    address:string;
}

export interface IhttpServe{
    page:number,
    total:number,
    total_pages:number,
    data:Idata
}

export class IformGroup{
    RocketName:string;
    Distance:string;
    Date:string;
    time:string;
    EnterMembers:number;
}

export interface Idata{
    id:number,
    email:string,
    first_name:string,
    last_name:string,
    avatar:string
}