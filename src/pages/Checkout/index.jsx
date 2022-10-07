import './index.css'

export const CheckoutModal = () => {
    return (

        <div className="checkout">
            <form 
                className="checkout-form"
                method='POST'
                action='#'
            >
                <div className="checkout-container">

                    <div className="listProducts">
                        <ul>
                            <li>produto 1</li>
                            <li>produto 2</li>
                            <li>produto 3</li>
                        </ul>
                    </div>

                    <div className="userdata">
                        <div className='form-username'>
                            <label htmlFor="first_name" className='usernama-label'>Nome:</label>
                            <input id="first_name" name="first_name" type="text" placeholder="Jhon" />
                            <label htmlFor="last_name">Sobrenome:</label>
                            <input id="last_name" name="last_name" type="text" placeholder='Doe'/>
                        </div>

                    </div>
                    
                </div>
            </form>

        </div>
    )
}
