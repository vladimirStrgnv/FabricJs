import './styles';

const Header = (props) => {
  return (
        <header className="header">
            <div className="header__container">
                <div className="header__wrapper">
                    <button className='header__get-svg-btn' onClick={()=> console.log(props.canvas.toSVG())}>Get svg code</button>
                </div>
            </div>
        </header>  
    )
}

export default Header;