export class Modal {
    userName: string;
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
