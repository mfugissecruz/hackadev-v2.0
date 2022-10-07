import './index.css';
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem';

import { VscChromeClose } from 'react-icons/vsc'

export const Cart = () => {
 
    const valueFormated = (value) =>{
        return new Intl.NumberFormat(
            'pt-BR', 
            { style: 'currency', currency: 'BRL' }).format(value)
    }
    
    const handleCloseCart = () => {
        const cart = document.querySelector('#sidebar').classList
        if(!cart.contains('sidebar--isHidden')){
            cart.add('sidebar--isHidden');
        }
    }
    
    const itemInfo = useSelector(state => state.cart.cart)

    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        itemInfo.forEach(item => {
            totalQuantity+=item.quantity;
            totalPrice+= (item.price).slice(1) * item.quantity
        })
        return {totalPrice, totalQuantity}
    }

    return (
        <div>
            <div className='container'>
                <div id="sidebar" className='sidebar sidebar--isHidden'>
                    <div className='sidebar-content'>
                        
                        <div className='header'>
                            <span>carrinho</span>
                            <span
                                className='sidebar--header-icon'
                                style={{ cursor: "pointer"  }}
                                onClick={handleCloseCart}    
                            >
                            <span>fechar</span> <VscChromeClose />
                            </span>
                        </div>
                        
                        <div className="main">
                            {
                                itemInfo?.map(item => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                    />
                                ))
                            }
                        </div>
                        
                        <div className='footer'>
                            <div className="subtotal">
                                <span>subtotal: ({
                                    getTotal().totalQuantity === 1 ?
                                        getTotal().totalQuantity + ' item' 
                                    : 
                                        getTotal().totalQuantity+' items'})
                                </span>

                
                                
                                <span>{valueFormated(getTotal().totalPrice)}</span>
                            </div>
                            <div className='btn-buy'>
                                finalizar compra
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}