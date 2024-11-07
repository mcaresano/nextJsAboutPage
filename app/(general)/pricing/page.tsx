import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Pricing',
 description: 'Pricing Description',
 keywords: ['pricing by', 'pricing to']
};

export default function Pricing() {
    return(
        <span className="text-7xl"> Pricing page</span>
    )
}