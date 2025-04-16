import { Header, Footer, NavBar, Slider } from './ui';
import News from './home/News';

function Home() {
    return(

        <div>
            <Header/>
            <NavBar/>
            <Slider/>

            <News/>
            <Footer/>
        </div>
    )
}
export default Home;