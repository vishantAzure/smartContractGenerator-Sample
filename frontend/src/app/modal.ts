export class Modal {
    firstname: string;
    lastname : string;
    email: string;
    password : string;
    companyName : string;
    contactName : string;
    phoneNumber : string;
    address : string;
    subscriptionPlan : string;
    user_type : string;
    
        constructor () {} 
}

export interface Customer {
    name: string; 
    addresses: Address[];
}

export interface Address {
    street: string; 
    postcode: string;
}

export class subscriptionPlan {
    packageName: string;
    packagePrice: Number;
    numberOfContract: Number;
    renewalFrequency: Number;
}

export class Templates {
    Template_Name: string;
    User_Type: string;
    CategoryOfServices: string;
}

export class Contract {
    Name: string;
    Description: string;
    Date:Date;
}

export class Template {
    ContractName: string;
    email: string;
    Date:Date;
    Price:number;
}

export class Milestone {
    ID: number;
    StartDate: Date;
    EndDate:Date;
    WorkExecution:string;
    MilestoneName:string;
    Schedule:string;
    Taxes:string;
    Fees:number;
    Penalties:number;
}
