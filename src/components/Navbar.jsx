import logo from '../assets/react.svg';

export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? 'dark' : ''}>
            <img src={logo} alt="logo" className='nav--logo'/>
            <h3 className="nav--title">ReactFacts</h3>
            <div className='toggler'>
                <p className='toggler--light'>Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className='toggler--dark'>Dark</p>
            </div>      
        </nav>    
        
    )
}