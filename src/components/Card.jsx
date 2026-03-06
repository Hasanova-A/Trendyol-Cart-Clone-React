import React, { Component } from 'react'
import myicon from '../assets/images/trendyol.avif'

class Card extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    title: "Trendyolmilla etek, şort",
                    price: 25,
                    stock: 5,
                    sale: 12
                }

            ],
            count: 1,
            stock: 1
        }
    }
    render() {
        return (


            <div className="trendyol-page">
                <div className="trendyol" style={{ "margin-top": "10px", "margin-left": "30px" }}>
                    <div className="seller">
                        <div className="journal">
                            <div className="check" style={{ "margin-left": "10px" }}>
                                <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
                            </div>
                            <div className="check-text" style={{ "margin-left": "10px", "margin-top": "10px" }}>
                                <p>Satıcı:</p>
                                <p>Victorias Journals</p>
                            </div>
                            <div className="green"><p style={{ "margin-top": "10px" }}>9.7</p></div>
                        </div>
                        <div className="sale">
                            <p style={{ "margin-top": "10px" }}>{this.state.count * this.state.data[0].price} AZN'ye {(this.state.data[0].price * this.state.count) - ((this.state.data[0].price - this.state.data[0].sale) * (this.state.count))} AZN indirim</p>
                            <p className="orange" style={{ "margin-top": "10px" }}>Tətbiq olundu!</p>
                        </div>
                    </div>
                    <div className="delivery">
                        <div className="text">
                            <i className="fa-solid fa-square" />
                            <p>Pulsuz çatdırılma!</p>
                        </div>
                    </div>
                    <div className="basket">
                        <div className="items">
                            <div className="check">
                                <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
                            </div>
                            <div className="image">
                                <img width={80} src={myicon} alt />
                            </div>
                            <item-text className="mt-2">
                                <b><p>{this.state.data[0].title}</p></b>
                            </item-text>
                        </div>
                        <div className="dinamic-btn">
                            <button id="minus" onClick={() => {
                                if (this.state.count > 1) {
                                    this.setState({
                                        count: this.state.count - 1,
                                        stock: this.state.stock - 1
                                    })
                                }

                            }}>-</button>
                            <div className="num">{this.state.count}</div>
                            <button id="plus" onClick={() => {
                                this.setState({
                                    count: this.state.count + 1,
                                    stock: this.state.stock + 1
                                })
                            }}>+</button>
                        </div>
                        <div className="money">
                            <small><i className="fa-solid fa-trash me-1" /><small>sil</small></small><br></br>
                            <small className="red">Endirimli məhsul<br /><span className="price">{(this.state.data[0].price - this.state.data[0].sale) * (this.state.count)}<i class="fa-solid fa-manat-sign"></i></span></small>
                            <p className="green-two"><span className="black">Qazancın:</span> <span>{(this.state.data[0].price * this.state.count) - ((this.state.data[0].price - this.state.data[0].sale) * (this.state.count))}<i class="fa-solid fa-manat-sign"></i></span></p>
                        </div>
                    </div>
                </div>
                <div className="basket-page">
                    <h5>Səbət xülasəsi</h5>
                    <div className="basket-text-one d-flex">
                        <small>Aralıq cəm</small>
                        <p>{this.state.count * this.state.data[0].price}<i class="fa-solid fa-manat-sign"></i></p>
                    </div>
                    <div className="basket-text-one d-flex">
                        <small>Çatdırılma məbləği</small>
                        <p>3,99<i class="fa-solid fa-manat-sign"></i></p>
                    </div>
                    <div className="basket-text-one d-flex">
                        <small>Pulsuz Çatdırılma</small>
                        <p>-3,99<i class="fa-solid fa-manat-sign"></i></p>
                    </div>
                    <div className="basket-profit d-flex">
                        <p>Ümumi qazancın</p>
                        <p className='common-sale'>
                            -{(this.state.data[0].price * this.state.count) - ((this.state.data[0].price - this.state.data[0].sale) * (this.state.count))}<i class="fa-solid fa-manat-sign"></i>
                        </p>
                    </div>
                    <div className="line"></div>
                    <div className="basket-text-common d-flex">
                        <h6>Ümumi</h6>
                        <p>{(this.state.data[0].price - this.state.data[0].sale) * (this.state.count)}<i class="fa-solid fa-manat-sign"></i></p>
                    </div>
                    <div className="common">
                        <p>Səbəti Təsdiqlə</p>
                    </div>
                </div>
            </div>

        )
    }
}

export default Card