
/* 
category: "men's clothing"
description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day."
id: 3
image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
price: 55.99
title: "Mens Cotton Jacket"
*/

export interface ProductResultItem {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
}

export async function  searchProducts(search: string) : Promise<ProductResultItem[]> {
    const response = await fetch('https://fakestoreapi.com/products');
    const responseJson = await response.json();
    
    return responseJson as ProductResultItem[];
}