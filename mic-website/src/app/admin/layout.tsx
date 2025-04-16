import './Style.css';
import Navbar from './Navbar';
import MainPage from './MainPage';
function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <MainPage />
      {children}
    </>
  );
}
export default Layout;
