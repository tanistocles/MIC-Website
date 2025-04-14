import './shared-style.css'


function Header() {
  return (
    <div className="header-top">
      <div className="header-content">
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
