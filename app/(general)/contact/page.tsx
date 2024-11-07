import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Contact info',
 description: 'SEO Title',
 keywords: ['contact by', 'Contact for']
};

export default function Contact() {
    return(
        <span className="text-7xl"> Contact page</span>

    )
    
}