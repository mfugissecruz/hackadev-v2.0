import styles from "./index.module.css";

import { Navbar } from "../../components/Navbar"
import Footer  from "../../components/Footer/Footer"


export function Checkout() {
  return (
    <div style={{ position: "relative"}}>
        <Navbar/>
        <div className={styles.checkout}>
            <div className={styles.row}>
                    <div className={styles.col75}>
                        <div className={styles.container}>
                            <form>
                                <div className={styles.row}>
                                <div className={styles.col50}>
                                    <h3>Billing Address</h3>
                                    <label htmlFor="fname">
                                    <i className="fa fa-user"></i> Full Name
                                    </label>
                                    <input
                                    type="text"
                                    id="fname"
                                    name="firstname"
                                    placeholder="John M. Doe"
                                    />
                                    <label htmlFor="email">
                                    <i className="fa fa-envelope"></i> Email
                                    </label>
                                    <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    />
                                    <label htmlFor="adr">
                                    <i className="fa fa-address-card-o"></i> Address
                                    </label>
                                    <input
                                    type="text"
                                    id="adr"
                                    name="address"
                                    placeholder="542 W. 15th Street"
                                    />
                                    <label htmlFor="city">
                                    <i className="fa fa-institution"></i> City
                                    </label>
                                    <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    placeholder="New York"
                                    />

                                    <div className={styles.row}>
                                    <div className={styles.col50}>
                                        <label htmlFor="state">State</label>
                                        <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        placeholder="NY"
                                        />
                                    </div>
                                    <div className={styles.col50}>
                                        <label htmlFor="zip">Zip</label>
                                        <input
                                        type="text"
                                        id="zip"
                                        name="zip"
                                        placeholder="10001"
                                        />
                                    </div>
                                    </div>
                                </div>

                                <div className={styles.col50}>
                                    <h3>Payment</h3>
                                    <label htmlFor="fname">Accepted Cards</label>
                                    <div className="icon - container">
                                    <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
                                    <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
                                    <i className="fa fa-cc-mastercard" style={{ color: "red" }}></i>
                                    <i className="fa fa-cc-discover" style={{ color: "orange" }}></i>
                                    </div>
                                    <label htmlFor="cname">Name on Card</label>
                                    <input
                                    type="text"
                                    id="cname"
                                    name="cardname"
                                    placeholder="John More Doe"
                                    />
                                    <label htmlFor="ccnum">Credit card number</label>
                                    <input
                                    type="text"
                                    id="ccnum"
                                    name="cardnumber"
                                    placeholder="1111-2222-3333-4444"
                                    />
                                    <label htmlFor="expmonth">Exp Month</label>
                                    <input
                                    type="text"
                                    id="expmonth"
                                    name="expmonth"
                                    placeholder="September"
                                    />

                                    <div className={styles.row}>
                                    <div className={styles.col50}>
                                        <label htmlFor="expyear">Exp Year</label>
                                        <input
                                        type="text"
                                        id="expyear"
                                        name="expyear"
                                        placeholder="2018"
                                        />
                                    </div>
                                    <div className={styles.col50}>
                                        <label htmlFor="cvv">CVV</label>
                                        <input type="text" id="cvv" name="cvv" placeholder="352" />
                                    </div>
                                    </div>
                                </div>
                                </div>

                                <label htmlFor="sameadr"></label>
                                <input type="checkbox" checked="checked" name="sameadr" />
                                Shipping address same as billing
                                <input type="submit" value="Continue to checkout" className="btn" />
                            </form>
                            </div>
                        </div>

            <div className={styles.col25}>
                <div className={styles.container}>
                <h4>
                    Cart
                    <span className={styles.price} style={{ color: "black" }}>
                    <i className="fa fa-shopping-cart"></i>
                    <b>4</b>
                    </span>
                </h4>
                <p>
                    <a href="produto1">Product 1</a>{" "}
                    <span className={styles.price}>$15</span>
                </p>
                <p>
                    <a href="produto2">Product 2</a>{" "}
                    <span className={styles.price}>$5</span>
                </p>
                <p>
                    <a href="produto3">Product 3</a>{" "}
                    <span className={styles.price}>$8</span>
                </p>
                <p>
                    <a href="produto4">Product 4</a>{" "}
                    <span className={styles.price}>$2</span>
                </p>
                <hr />
                <p>
                    Total{" "}
                    <span className={styles.price} style={{ color: "black" }}>
                    <b>$30</b>
                    </span>
                </p>
                </div>
            </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

// export default Header;
