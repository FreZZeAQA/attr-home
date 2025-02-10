import { ReactNode } from 'react';
import { Providers } from './providers';
import { Cormorant_Garamond, Open_Sans } from 'next/font/google';

import '@/styles/globals.css'
import 'swiper/css';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const cormorantGaramond = Cormorant_Garamond({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin', 'cyrillic'],
});

const openSans = Open_Sans({
    weight: ['300', '400', '500', '600'],
    subsets: ['latin', 'cyrillic'],
});

export const metadata = {
    title: 'Attera Home',
    icons: {
        icon: '/favicon.png',
    },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="uk" className={openSans.className}>
        <body>
        <Providers>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </Providers>
        </body>
        </html>
    );
}