
export interface PriceDisplayProps {
    price: number;
    currency: string;
}

export function PriceDisplay(props: PriceDisplayProps) {
    const { price, currency } = props;
    const priceValueToDisplay = price.toFixed(2);

    return (
        <span className="font-bold text-lg">
            <span>{priceValueToDisplay}</span>
            <span className="uppercase pl-3">{currency}</span>
        </span>
    );
}