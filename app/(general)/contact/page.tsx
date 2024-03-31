import type { Metadata } from "next";

export const mtadata: Metadata = {
    title: 'Contact Us',
    description: 'Contact us for any queries or feedback.',
    keywords: ['Contact Us', 'Page'],
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}
