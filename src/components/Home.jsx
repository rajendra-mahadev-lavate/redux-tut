import React from 'react'
import "./Home.css";

const Home = () => {
    return (
        <>

            <div className="add-to-cart">
                <img src="/assets/basket_icon.png" alt="" />
            </div>

            <h1>Home Component</h1>

            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="/assets/Iphone.webp" alt="" />
                </div>

                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>

                    <span>
                        Price : $1000
                    </span>
                </div>

                <div className="btn-wrapper item">
                    <button>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Home
