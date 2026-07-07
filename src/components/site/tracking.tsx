'use client';

/**
 * Site-wide measurement layer.
 *
 * Loads Google Tag Manager and the Crisp chat widget (both env-gated, so the
 * site runs cleanly without them), and pushes structured dataLayer events that
 * GTM turns into Google Ads + GA4 conversions:
 *
 *   phone_click        any tel: link clicked
 *   email_click        any mailto: link clicked
 *   chat_started       visitor sends their first chat message (per session)
 *   quote_form_submit  quote modal submitted successfully (pushed by quote-modal)
 *
 * Env (set in Vercel):
 *   NEXT_PUBLIC_GTM_ID            GTM-XXXXXXX
 *   NEXT_PUBLIC_CRISP_WEBSITE_ID  Crisp website id (UUID)
 */

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
    interface Window {
        dataLayer?: Record<string, unknown>[];
        $crisp?: unknown[];
        CRISP_WEBSITE_ID?: string;
    }
}

export const pushEvent = (event: string, data: Record<string, unknown> = {}) => {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...data });
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const CRISP_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;

const Tracking = () => {
    // tel: / mailto: click tracking — one delegated listener for the whole site.
    useEffect(() => {
        const onClick = (event: MouseEvent) => {
            const anchor = (event.target as HTMLElement | null)?.closest?.('a[href]');
            if (!anchor) return;
            const href = anchor.getAttribute('href') ?? '';
            if (href.startsWith('tel:')) pushEvent('phone_click', { phone: href.slice(4) });
            else if (href.startsWith('mailto:')) pushEvent('email_click', { email: href.slice(7) });
        };
        document.addEventListener('click', onClick, { capture: true });

        return () => document.removeEventListener('click', onClick, { capture: true });
    }, []);

    // Crisp chat — fire chat_started on the visitor's first message this session.
    useEffect(() => {
        if (!CRISP_ID || window.$crisp) return;
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = CRISP_ID;
        const script = document.createElement('script');
        script.src = 'https://client.crisp.chat/l.js';
        script.async = true;
        document.head.appendChild(script);

        window.$crisp.push([
            'on',
            'message:sent',
            () => {
                if (sessionStorage.getItem('chat_started')) return;
                sessionStorage.setItem('chat_started', '1');
                pushEvent('chat_started');
            }
        ]);
    }, []);

    if (!GTM_ID) return null;

    return (
        <>
            <Script id='gtm' strategy='afterInteractive'>
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
            </Script>
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                    height='0'
                    width='0'
                    style={{ display: 'none', visibility: 'hidden' }}
                />
            </noscript>
        </>
    );
};

export default Tracking;
