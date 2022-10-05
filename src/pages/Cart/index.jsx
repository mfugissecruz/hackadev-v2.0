// https://www.youtube.com/playlist?list=PL63c_Ws9ecIRnNHCSqmIzfsMAYZrN71L6  COURSE
import  styles from './index.module.css';

export const Cart = () => {








    return (
        <div className={styles.cartContainer}>
            <div className={styles.Cart}>
                {/* Cart Title */}
                <div className={styles.cartTitle}>
                    <span>CARRINHO</span>
                    <span className={styles.cartClosed}>
                        <span>
                            FECHAR
                        </span>
                        <span>
                            X
                        </span>
                    </span>
                </div>

                {/* Cart Item List */}
                <div className={styles.cartList}>

                    <div className={styles.cartItem}>
                        <div className={styles.cartItemDescription}>
                            <div className={styles.cartImageItem}>
                                <img 
                                    src="https://hering.vtexassets.com/arquivos/ids/565217-1200-auto?v=637995639354270000&width=1200&height=auto&aspect=true" 
                                    width={120} height={120}
                                />
                            </div>
                            <div>
                                <span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </span>
                            </div>
                        </div>

                        <div className={styles.cartItemValue}>
                            <div className={styles.cartItemCounter}>
                                <div className={styles.cartItemQuantity}>
                                    <button> - </button>
                                    <div> 1 </div>
                                    <button> + </button>
                                </div>

                                <span>
                                    x R$ 49,99
                                </span>
                            </div>

                            <span>
                                R$ 200,00
                            </span>

                        </div>
                    </div>


                </div>

                {/* Cart Footer */}
                <div className={styles.cartFooter}>
                    <div className={styles.cartSubtotal}>
                        <span>Subtotal:</span>
                        <span>R$ 250,00</span>
                    </div>
                    <div className={styles.cartButton}>
                        <button className={styles.cartBuyButton}>
                            FINALIZAR COMPRA
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}