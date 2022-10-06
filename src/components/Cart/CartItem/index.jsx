import './index.css'

import { VscTrash } from "react-icons/vsc";

import { useDispatch } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeItem} from '../../../redux/ducks/cart/cartSlice'

export const CartItem = ({ item }) => {

    const dispatch = useDispatch()
    return (
        <div className="item-content">
            <div className="card-product-image">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="item-description">
                <div>
                    <div className="product-title">
                        <span>{item.title}</span>

                        <span 
                            style={{ cursor: "pointer" }}
                            onClick={() => dispatch(removeItem(item.id))}
                        ><VscTrash/></span>
                    </div>

                    <div className="product-size">
                        VALOR: R$ { item.price }
                    </div>
                </div>

                <div className='item-quantity'>
                    <div className='box-quantity'>
                        <span 
                            className='btn-icon'
                            onClick={() => dispatch(decrementQuantity(item.id))}   
                        > - </span>
                        <span> {item.quantity} </span>
                        <span 
                            className='btn-icon'
                            onClick={() => dispatch(incrementQuantity(item.id))}   
                        > + </span>
                    </div> 
                    <span> Total: R${item.quantity * item.price}</span>
                </div>
            </div>    
        </div>
    )
}