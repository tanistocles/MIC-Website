import { Header, Footer, NavBar, Slider } from './ui';
import News from './home/News';

function Home() {
    return(

        <div>
            <Header/>
            <Slider/>
            <NavBar/>
            <News/>
            <Footer/>
        </div>
    )
}
export default Home;