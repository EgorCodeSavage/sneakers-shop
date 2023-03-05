import "./style.css"

import favorite from "./img/Favorite.png"
import complete from "./img/complete.png"
import img01 from "./img/img01.png"
import sneaker from "./img/sneaker.png"
import arrowactive from "./img/arrow active.png"
import arrownotactive from "./img/arrow notactive.png"
import locker from "./img/locker.png"
import coment from "./img/coment.png"

const Header = () => {
    return (  
        <div className="home_inner">
            <div className="home_info">
                <div className="home_title">Get your awesome <br/>sneakers.</div>
                <div className="home_text">We offer the best deals in our shop. Check them out now. We have awesome stuff on sale for you.</div>
                <div className="home_buttons">
                    <button>Shop Now</button>
                    <img className="button_favorite--active" src={favorite} alt="favorite"/>
                </div>
                <div className="home_benefites">
                    <div className="free_shipping">
                        <img src={complete} alt="complete" />
                        <p>Free shipping</p>
                    </div>
                    <div className="free_returns">
                        <img src={complete} alt="complete" />
                        <p>Free returns</p>
                    </div>
                </div>
            </div>
            <div className="home_sneaker">
                <div className="sneaker_photo">
                    <img className="bgcimg" src={img01} alt="bgcimg"/>
                    <img className="sneaker" src={sneaker} alt="sneakerimg"/>
                    <button className="locker--notactive">
                        <img src={locker} alt="locker"/>
                    </button>
                    <img className="coment" src={coment} alt="coment" />
                </div>
                <div className="sneaker_sliedr">
                    <button className="sneaker_left">
                        <img className="arrow_left--active" src={arrownotactive} alt="arrow left"/>
                    </button>
                    <button className="sneaker_right">
                        <img className="arrow_right--notactive" src={arrowactive} alt="arrow right" />
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Header;