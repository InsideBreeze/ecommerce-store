export interface Category {
    id: string;
    name: string;
    storeId: string;
    billboard: Billboard
}

export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
}

export interface Product {
    id: string;
    name: string;
    category: Category,
    price: string;
    size: Size;
    color: Color;
    images: Image[];
    isFeatured: boolean;
}

export interface Size {
    id: string;
    name: string;
    value: string;
}
export interface Color {
    id: string;
    name: string;
    value: string;
}

export interface Image {
    id: string;
    url: string;
}
