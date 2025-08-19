import type { Metadata, Viewport } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import AOSProvider from '@/components/AOSProvider'

// Optimize font loading
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    preload: true,
    fallback: ['system-ui', 'arial'],
})

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-mono',
    display: 'swap',
    preload: true,
    fallback: ['monospace'],
})

export const metadata: Metadata = {
    title: 'WE Org - AI-Powered Automation for Africa',
    description: 'We create AI-powered automation agents that simplify complex processes for governments and enterprises across Africa.',
    metadataBase: new URL('https://weorg.org'),
    alternates: {
        canonical: '/',
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
            { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
    },
    manifest: '/site.webmanifest',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'WE Org',
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://weorg.org',
        title: 'WE Org - AI-Powered Automation for Africa',
        description: 'We create AI-powered automation agents that simplify complex processes for governments and enterprises across Africa.',
        siteName: 'WE Org',
        images: [
            {
                url: '/weorg.png',
                width: 1200,
                height: 630,
                alt: 'WE Org - AI-Powered Automation for Africa',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'WE Org - AI-Powered Automation for Africa',
        description: 'We create AI-powered automation agents that simplify complex processes for governments and enterprises across Africa.',
        images: ['/weorg.png'],
    },
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    themeColor: '#1e293b',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.className} ${ibmPlexMono.variable}`}>
            <head>
                {/* Preload critical resources */}
                <link rel="preload" href="/logo_full_b.png" as="image" />
                <link rel="preload" href="/logo_full_w.png" as="image" />
                <link rel="dns-prefetch" href="//fonts.googleapis.com" />
                <link rel="dns-prefetch" href="//fonts.gstatic.com" />

                {/* Performance hints */}
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            </head>
            <body className={`${inter.className} ${ibmPlexMono.variable}`}>
                <AOSProvider>
                    {children}
                </AOSProvider>
            </body>
        </html>
    )
}