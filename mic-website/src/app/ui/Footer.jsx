import './shared-style.css'

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            Physical Address<br />
            2 Peck Street, Taita, Lower Hutt
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Volunteer Opportunities</a>
            <a href="#">Latest News</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-social-links">
            <a href="https://www.facebook.com/profile.php?id=61567165705117">Facebook<i className="fab fa-facebook"></i></a>
            <a href="#">Youtube<i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
