import type { Metadata } from "next";

//mrc + tab to create a metadata 
export const metadata: Metadata = {
    title: 'About Us',
    description: 'Know about us and our team.',
    keywords: ['About Us', 'Page'],
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}
