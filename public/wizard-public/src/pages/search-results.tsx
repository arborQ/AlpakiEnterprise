import { Card, ListLoading } from "alpaki-ui";
import { useEffect, useState } from "react";
import { searchProducts, ProductResultItem } from '@/services/search-service';
import { Link } from "react-router-dom";
import { useQuery } from "@/hooks/useQuery";

export function SearchResults() {
    let query = useQuery();
    const search = query.get('search');

    useEffect(() => {
        searchProducts(search ?? '').then(updateProducts);
    }, [search]);
    const [products, updateProducts] = useState<ProductResultItem[]>([]);

    return (
        <div className="flex place-content-center pt-4">
            <div className="flex flex-col-reverse md:flex-row">
                <div className="md:w-1/4 w-full">
                    <Card>
                        search summary
                    </Card>
                </div>
                <div className="md:w-3/4 w-full ml-6">
                    {
                        products.length === 0
                            ? <ListLoading size={5} />
                            : products.map(p => (
                                <div key={p.id} className="mb-4">
                                    <Card>
                                        <div className="flex">
                                            <img loading="lazy" src={p.image} className="w-32 h-32" alt={p.title} />
                                            <Link to={`/product/${p.id}`}>{p.title}</Link>
                                        </div>
                                    </Card>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    );
}
