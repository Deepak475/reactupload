import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="App">
            <div className='navigation'>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>
                    Deployed in Github
                </h2>
            </header>
        </div>
    )
}

export default Home