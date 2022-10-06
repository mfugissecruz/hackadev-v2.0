import './index.css';

export const Cart = () => {

    const handleCloseCart = () => {
        const cart = document.querySelector('#sidebar').classList
        if(!cart.contains('sidebar--isHidden')){
            cart.add('sidebar--isHidden');
        }
    }

    return (
        <div>
            <div className='main'>
                <div id="sidebar" className='sidebar sidebar--isHidden'>
                    <div 
                        className="btn-teste"
                        onClick={handleCloseCart}
                    >
                        Fechar
                    </div>
                </div>
            </div>

        </div>
    )
}