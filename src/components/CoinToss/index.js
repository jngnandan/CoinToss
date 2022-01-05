// Write your code here

import React, { Component } from 'react'

export class CoinToss extends Component {
    state = {
        tossStatus: true,
        totalCount: 0,
        Heads: 0,
        Tails: 0,
    }

    tossCoin = () => {
        const { tossStatus } = this.state
        const random = Boolean(Math.round(Math.random()));
        this.setState({ tossStatus: random })
        {
            random ?
                this.setState(prevState => ({
                    tossStatus: false,
                    totalCount: prevState.totalCount + 1,
                    Heads: prevState.Heads + 1
                })) :
                this.setState(prevState => ({
                    tossStatus: true,
                    totalCount: prevState.totalCount + 1,
                    Tails: prevState.Heads + 1
                }))
        }
    }

    render(props) {
        const { tossStatus } = this.state
        return (
            <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-r from-yellow-300 to-orange-300 px-20'>
                <div className='flex flex-col justify-center items-center card row bg-white shadow w-min rounded py-20 w-80'>
                    <h1 className='text-orange-700 text-2xl font-bold'>Coin Toss Game</h1>
                    <p className='pt-2'>Heads (or) Tails</p>

                    <div>
                        {tossStatus ? <img className='w-40 h-40' src="https://assets.ccbp.in/frontend/react-js/heads-img.png" /> :
                            <img className='w-40 h-40' src="https://assets.ccbp.in/frontend/react-js/tails-img.png" />}
                    </div>

                    <button onClick={this.tossCoin} className='bg-gradient-to-r from-orange-300 to-yellow-500 text-white font-bold py-2 px-6 rounded shadow'>Toss Coin</button>

                    <div className='flex flex-row justify-center items-center'>
                        <p className='w-20 pt-4'>Total:{this.state.totalCount}</p>
                        <p className='w-20 pt-4'>Heads:{this.state.Heads}</p>
                        <p className='w-20 pt-4'>Tails:{this.state.Tails}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoinToss
