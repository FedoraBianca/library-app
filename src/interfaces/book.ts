export interface IBook {
    ISBN: string;
    title: string;
    borrowPrice: number;
    availableItems?: number;
    totalItems?: number;
}
