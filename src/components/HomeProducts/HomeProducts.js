import "./style.css"

import ellipse01 from "./img/Ellipse 1.png"
import ellipse02 from "./img/Ellipse 2.png"
import ellipse03 from "./img/Ellipse 3.png"
import ellipse04 from "./img/Ellipse 4.png"
import snek1 from "./img/snek1.png"
import snek2 from "./img/snek2.png"
import snek3 from "./img/snek3.png"
import snek4 from "./img/snek4.png"
import star1 from "./img/Star 1.png"
import star2 from "./img/Star 2.png"

const HomeProducts = () => {
    return ( 
        <div className="home_products_inner">
            <div className="home_products_title">
                <h2>Featured products</h2>
                <button>{"View all >"}</button>
            </div>
            <ul className="home_products_items">
                <li className="home_products_item">
                    <div className="home_products_item_img">
                        <img className="img_absolut_elips" src={ellipse01} alt="elipse"/>
                        <img className="img_absolut_snek" src={snek1} alt="sneaker"/>
                    </div>
                    <div className="home_products_itme_raiting">
                        <img src={star1} alt="star"/>
                        <img src={star1} alt="star"/>
                        <img src={star1} alt="star"/>
                        <img src={star1} alt="star"/>
                        <img src={star2} alt="star"/>
                    </div>
                    <div className="home_products_item_text">
                        <p>Adidas Falcon Shoes for men - 2021 Edition</p>
                        <h2>$120.50</h2>
                    </div>
                </li>
                <li className="home_products_item">
                    <div className="home_products_item_img">
                        <img className="img_absolut_elips" src={ellipse02} alt="elipse"/>
                        <img className="img_absolut_snek" src={snek2} alt="sneaker"/>
                    </div>
                    <div className="home_products_itme_raiting">
                        <img src={star1} alt="star"/>
                        <img src={star1} alt="star"/>
                        <img src={star1} alt="star"/>
                        <img src={star2} alt="star"/>
                        <img src={star2} alt="star"/>
                    </div>
                    <div className="home_products_item_text">
                        <p>Adidas Falcon Shoes for men - 2021 Edition</p>
                        <h2>$160.99</h2>
                    </div>
                </li>
                <li className="home_products_item">
                    <div className="home_products_item_img">
                        <img className="img_absolut_elips" src={ellipse03} alt="elipse"/>
                        <img className="img_absolut_snek" src={snek3} alt="sneaker"/>
                    </div>
                    <div className="home_products_itme_raiting">
                        <img src={star1} alt="star"/>
                        <img src={star1} alt="star"/>
                        <img src={star1} alt="star"/>
                        <img src={star1} alt="star"/>
                        <img src={star2} alt="star"/>
                    </div>
                    <div className="home_products_item_text">
                        <p>Adidas Falcon Shoes for men - 2021 Edition</p>
                        <h2>$230.50</h2>
                    </div>
                </li>
                <li className="home_products_item">
                    <div className="home_products_item_img">
                        <img className="img_absolut_elips" src={ellipse04} alt="elipse"/>
                        <img className="img_absolut_snek" src={snek4} alt="sneaker"/>
                    </div>
                    <div className="home_products_itme_raiting">
                        <img src={star1} alt="star"/>
                        <img src={star1} alt="star"/>
                        <img src={star2} alt="star"/>
                        <img src={star2} alt="star"/>
                        <img src={star2} alt="star"/>
                    </div>
                    <div className="home_products_item_text">
                        <p>Adidas Falcon Shoes for men - 2021 Edition</p>
                        <h2>$420.00</h2>
                    </div>
                </li>
            </ul>
        </div>
     );
}
 
export default HomeProducts;