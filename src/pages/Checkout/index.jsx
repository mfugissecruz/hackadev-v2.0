import './index.css'
import { useSelector } from 'react-redux';

export const CheckoutModal = () => {
    const items = useSelector(state => state.cart.cart);
    // console.log(items);
    
    const valueFormated = (value) =>{
        return new Intl.NumberFormat(
            'pt-BR', 
            { style: 'currency', currency: 'BRL' }).format(value)
    }
    
    return (

        <div className="checkout">
            <div 
                className="checkout-content"
                method='POST'
                action='#'
            >
                <div className="checkout-container">

                    <div className="listProducts">
                        <ul className='items-list'>
                            {
                                items.map(item => (
                                    <li key={item.id}>
                                        <div className='item-cart'>
                                            <img 
                                                className='item-image'
                                                src={item.image} 
                                                alt={item.produto} 
                                                width={80} 
                                                height={80} 
                                            />
                                            <div className='item-cart-description'>
                                                <span>{item.title}</span>
                                                <span>{valueFormated(item.quantity * item.price?.slice(1))}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <hr />
                    </div>

                    <form className="userdata">
                        <div className='form-username'>
                            <label htmlFor="first_name" className='usernama-label'>Nome:</label>
                            <input id="first_name" name="first_name" type="text" placeholder="Jhon" required/>
                            <label htmlFor="last_name">Sobrenome:</label>
                            <input id="last_name" name="last_name" type="text" placeholder='Doe' required/>
                            <label htmlFor="email">Email:</label>
                            <input id="email" name="email" type="email" placeholder='jhondoe@email.com' required/>
                            <label htmlFor="phone">Telefone:</label>
                            <input id="phone" name="phone" type="phone" placeholder='(99)99999-9999' required/>
                            <label htmlFor="cpf">CPF:</label>
                            <input id="cpf" name="cpf" type="cpf" placeholder='123.456.789-00' required/>
                        </div>
                        <hr/>
                        <div className="form-user-addres">
                            <label htmlFor="zip_code">CEP:</label>
                            <input id="zip_code" name="zip_code" type="text" placeholder='123.456.789-00' required/>
                            <label htmlFor="street" className='usernama-label'>Rua:</label>
                            <input id="street" name="street" type="text" placeholder="Jhon" required/>
                            <label htmlFor="address_number">Número:</label>
                            <input id="address_number" name="address_number" type="text" placeholder='Doe' required/>
                            <label htmlFor="complement">Complemento:</label>
                            <input id="complement" name="complement" type="text" placeholder='jhondoe@email.com' required/>
                            <label htmlFor="neighborhood">Bairro:</label>
                            <input id="neighborhood" name="neighborhood" type="text" placeholder='(99)99999-9999' required/>
                            <label htmlFor="city">Cidade:</label>
                            <input id="city" name="city" type="text" placeholder='123.456.789-00' required/>
                        </div>
                        <hr/>
                        <div className='btn-field'>
                            <button
                                className='btn-payment-form'
                                type='submit'
                                disabled
                            >Salvar Dados</button>
                        </div>
                    </form>
                    
                    
                </div>
            </div>

        </div>
    )
}
