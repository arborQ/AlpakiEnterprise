import { getProduct, ProductItem } from '@/services/product-service';
import { Card } from 'alpaki-ui'
import { PriceDisplay } from 'domain/price-display';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const [product, updateProduct] = useState<ProductItem>();
    useEffect(() => { 
        getProduct(id).then(updateProduct);
    }, [id]);
    return (
        <div className="flex place-content-center">
            <div className="md:w-4/5 w-full">
                <Card>
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="md:w-3/4 w-full flex">
                            <div className="w-48 h-48 border rounded-md bg-no-repeat bg-cover" style={{ backgroundImage: `url(${product?.image})` }}></div>
                            <div>{product?.title}</div>
                        </div>
                        <div className="md:w-1/4 w-full">
                            <div className="rounded-md border p-4">
                                <PriceDisplay price={123.34324} currency="usd" />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}