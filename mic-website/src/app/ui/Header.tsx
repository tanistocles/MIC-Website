
import './Shared.css'
import Script from 'next/script';

function Header() {
  return (
    <div className="header-top">
      <div className="header-content">
        <div>
        <div id="google_translate_element"></div>
          <Script
            src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            strategy="afterInteractive"
          />
          <Script id="google-translate-init" strategy="afterInteractive">
            {`
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                }, 'google_translate_element');
              }
            `}
          </Script>
        </div>

        <div className="contact-info">
          <span><i className="fas fa-phone"></i> 021 082 71234</span>
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=61567165705117"><i className="fab fa-facebook"></i> <span>Facebook</span></a>
          <a href="#"><i className="fab fa-youtube"></i> <span>YouTube</span></a>
        </div>
      </div> 
    </div>
  );
}

export default Header;
