import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Orbitron, Share_Tech_Mono } from "next/font/google"

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-share-tech-mono",
})

export const metadata: Metadata = {
  title: "GPT Cadu Black Funnel",
  description: "Protocolo Black de Dominação Digital",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${orbitron.variable} ${shareTechMono.variable} antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1100161635665622');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1100161635665622&ev=PageView&noscript=1"
          />
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function loadTrackingScripts() {
                  if (window.trackingLoaded) return;
                  window.trackingLoaded = true;
                  
                  // Utmify Pixel
                  window.pixelId = "685f46621679cf005cf5b4df";
                  var utmifyPixel = document.createElement("script");
                  utmifyPixel.async = true;
                  utmifyPixel.defer = true;
                  utmifyPixel.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
                  document.head.appendChild(utmifyPixel);
                  
                  // Utmify UTMs
                  var utmifyUtms = document.createElement("script");
                  utmifyUtms.async = true;
                  utmifyUtms.defer = true;
                  utmifyUtms.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
                  utmifyUtms.setAttribute("data-utmify-prevent-xcod-sck", "");
                  utmifyUtms.setAttribute("data-utmify-prevent-subids", "");
                  document.head.appendChild(utmifyUtms);
                  
                  // Microsoft Clarity
                  (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                  })(window, document, "clarity", "script", "t01j14z9yi");
                }
                
                // Load after user interaction or 3 second delay
                var events = ['click', 'scroll', 'keydown', 'touchstart'];
                var loaded = false;
                
                function initTracking() {
                  if (!loaded) {
                    loaded = true;
                    loadTrackingScripts();
                    events.forEach(function(event) {
                      document.removeEventListener(event, initTracking);
                    });
                  }
                }
                
                // Wait for page to be interactive
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', function() {
                    events.forEach(function(event) {
                      document.addEventListener(event, initTracking, { passive: true });
                    });
                    setTimeout(initTracking, 3000);
                  });
                } else {
                  events.forEach(function(event) {
                    document.addEventListener(event, initTracking, { passive: true });
                  });
                  setTimeout(initTracking, 3000);
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-mono">{children}</body>
    </html>
  )
}
