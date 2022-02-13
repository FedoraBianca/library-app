export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeolocation;
}

export interface IGeolocation {
    lat: string;
    lng: string;
}