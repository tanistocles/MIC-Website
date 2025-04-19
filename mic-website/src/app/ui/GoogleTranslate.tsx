import Script from 'next/script';

export default function GoogleTranslate() {
  return (
    <div id="google_translate_element">
      {/* 1️⃣  Define the callback first */}
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement(
              {
                pageLanguage: 'en',
                layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
              },
              'google_translate_element'
            );
          }
        `}
      </Script>

      {/* 2️⃣  Load Google’s widget */}
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}
