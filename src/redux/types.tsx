export interface Configuration {
    id: number;
    logo: string;
    mainColor: string;
    hasUserSection: boolean;
}
export interface UserProfile {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    sex: number;
    profilePicture: string;
    position: string;
}
export interface Company {
    name: string;
    logo: string;
    address: {
        country: {
            name: string;
        };
        city: {
            name: string;
        };
        street: string;
        house: string;
        zipCode: string;
        longitude: string;
        latitude: string;
    };
}
export interface commonType {
    id: number;
    name: string;
}

export interface ProductData {
    id: number;
    name: string;
    description: string;
    picture: string;
    type: commonType;
    categories: commonType[];
    implementationEffortText: null;
    investmentEffort: string;
    trl: commonType;
    video: string;
    user: UserProfile;
    company: Company;
    businessModels: commonType[];
}
