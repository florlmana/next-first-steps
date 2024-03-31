import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing',
    description: 'Pricing Plans for our services.',
    keywords: ['Pricing', 'Plans'],
};

export default function PricingPage(){
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}
