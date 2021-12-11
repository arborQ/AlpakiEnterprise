
export interface ProductItem {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
}

export async function  getProduct(id: string) : Promise<ProductItem> {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const responseJson = await response.json();
    
    return responseJson as ProductItem;
}