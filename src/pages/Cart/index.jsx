import React, { useState } from 'react'

import produto1 from './img/product1.jpeg'
import produto2 from './img/product2.jpeg'
import './index.css'

import { Navbar } from '../../components/Navbar'
import Footer from '../../components/Footer/Footer'

export const Cart = () => {
  const [Quantidade, setQuantidade] = useState()

  const optionSize = [
    { label: 'P', value: 'Pequeno' },
    { label: 'M', value: 'Médio' },
    { label: 'G', value: 'Grande' },
    { label: 'XG', value: 'Extra Grande' }
  ]
  const [size, setSize] = useState('Tam')

  const handleSizeChange = event => {
    setSize(event.target.value)
  }

  return (
    <>
      <Navbar/>
          <div className="basket">
            <div className="basket-module">
              <label htmlFor="promo-code">Insira o código promocional</label>
              <input
                id="promo-code"
                type="text"
                name="promo-code"
                maxlength="5"
                className="promo-code-field"
              />
              <button className="promo-code-cta">Inserir</button>
            </div>
            <div className="basket-labels">
              <ul>
                <li className="item item-heading">Item</li>
                <li className="price">Preço</li>
                <li className="quantity">Quantidade</li>
                <li className="subtotal">Subtotal</li>
              </ul>
            </div>
            <div className="basket-product">
              <div className="item">
                <div className="product-image">
                  <img src={produto1} />
                </div>
                <div className="product-details">
                  <h1>
                    <strong>
                      <span className="item-quantity"> </span> x Eliza J
                    </strong>{' '}
                    Lace Sleeve Cuff Dress
                  </h1>
                  <select
                    className="size-field"
                    value={size}
                    onChange={handleSizeChange}
                  >
                    {optionSize.map(option => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="price">26.00</div>
              <div className="size"></div>
              <div className="quantity">
                <input
                  type="number"
                  value={Quantidade}
                  min="1"
                  className="quantity-field"
                ></input>
              </div>
              <div className="subtotal">104.00</div>
              <div className="remove">
                <button>Remover</button>
              </div>
            </div>
            <div className="basket-product">
              <div className="item">
                <div className="product-image">
                  <img src={produto2} />
                </div>
                <div className="product-details">
                  <h1>
                    <strong>
                      <span className="item-quantity">{setQuantidade}</span> x
                      Whistles
                    </strong>{' '}
                    Amella Lace Midi Dress
                  </h1>
                  <p>
                    <strong>Navy, Size 10</strong>
                  </p>
                  <p>Product Code - 232321939</p>
                </div>
              </div>
              <div className="price">26.00</div>
              <div className="size">
                <select name="size-options" className="size-field">
                  <option value="0" selected="selected">
                    Tamanho
                  </option>
                  <option value="Pequeno">P</option>
                  <option value="Medio">M</option>
                  <option value="Grande">G</option>
                  <option value="Extra-grande">XG</option>
                </select>
              </div>
              <div className="quantity">
                <input
                  // onChange={e => setQuantidade(e.target.value)}
                  type="number"
                  value={Quantidade}
                  min="1"
                  className="quantity-field"
                ></input>
              </div>
              <div className="subtotal">26.00</div>
              <div className="remove">
                <button>Remover</button>
              </div>
            </div>
          </div>
          <aside>
            <div className="summary">
              <div className="summary-total-items">
                <span className="total-items"></span> Itens no seu Carrinho
              </div>
              <div className="summary-subtotal">
                <div className="subtotal-title">Subtotal</div>
                <div className="subtotal-value final-value" id="basket-subtotal">
                  130.00
                </div>
                <div className="summary-promo hide">
                  <div className="promo-title">Promotion</div>
                  <div
                    className="promo-value final-value"
                    id="basket-promo"
                  ></div>
                </div>
              </div>
              <div className="summary-delivery">
                <select
                  name="delivery-collection"
                  className="summary-delivery-selection"
                >
                  <option value="0" selected="selected">
                    Selecione retirar ou tipo de envio
                  </option>
                  <option value="collection">Retirar</option>
                  <option value="signed-for">Correios Mini Envios</option>
                  <option value="first-className">Correios PAC</option>
                  <option value="second-className">Correios Sedex</option>
                  <option value="third-className">Correios Sedex 10</option>
                  <option value="fourth-className">Correios Sedex Hoje</option>
                </select>
              </div>
              <div className="summary-total">
                <div className="total-title">Total</div>
                <div className="total-value final-value" id="basket-total">
                  130.00
                </div>
              </div>
              <div className="summary-checkout">
                <button className="checkout-cta">
                  <a href="Ir para Compra Segura"></a>
                </button>
              </div>
            </div>
          </aside>
    </>
  )
}