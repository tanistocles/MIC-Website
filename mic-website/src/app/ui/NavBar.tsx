import Link from 'next/link';
import Image from 'next/image';
import './Shared.css'

function NavBar() {
  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="logo">
          <Image
            src="/logo.jpg"
            width={1000}
            height={760}
            alt="Community Logo"
          />
        </div>
        <ul className="main-menu">
          {/* <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Volunteers</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#" className="donate-btn">Donate</a></li> */}
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/volunteers">Volunteers</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/donate" className="donate-btn">Donate</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
