import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-B8EZBSR353'

const Gtag = () => {
    return (
        <div className="container">
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
            </Script>
        </div>
    )
}

export default Gtag
