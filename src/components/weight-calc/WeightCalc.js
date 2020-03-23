import React, { useState } from 'react';
import './weightcalc.css';

const Calc = () => {
    let [weight, setWeight] = useState(
        {
            maxWeight: 0,
            lt800: 0,
            lt900: 0,
            lt1000: 0,
            remaining: 0,
        }
    );

    const setMaxWeight = value => {
        setWeight({...weight, maxWeight: value, remaining: value - (weight.lt800+weight.lt900+weight.lt1000)});
    }


    const calc800Total = (value) => {
        setWeight({...weight, lt800: value*800, remaining: weight.maxWeight - (value*800+weight.lt900+weight.lt1000)});
    }

    const calc900Total = (value) => {
        setWeight({...weight, lt900: value*900, remaining: weight.maxWeight - (weight.lt800+value*900+weight.lt1000)});
    }

    const calc1000Total = (value) => {
        setWeight({...weight, lt1000: value*1000, remaining: weight.maxWeight - (weight.lt800+weight.lt900+value*1000)});
    }

    return(
        <div className="calc-wrapper">
<           label className="instructions">
                Enter your boats MAX weight - Sailors/Gear:
                <br/>
                e.g. 9500, 15000
            </label> 

            <br/>

            <div className="input-row">
                <label className="ship-weight">Ship Max Weight:</label>
                <input type="number" onInput={(e) => setMaxWeight(e.target.value)}></input>
            </div>

            <br/>

            <label className="instructions">
                Enter the amount of each item you have:
                <br/>
                e.g. 1 800LT item; 4 1000LT items;
            </label> 

            <br/>

            <section className="input-grid">
                <div className="input-row">
                    <label><span>0</span>800LT Items:</label>
                    <input type="number" onInput={(e) => calc800Total(e.target.value)}></input>
                    <label htmlFor="number">Total: {weight.lt800}</label>
                </div>

                <br/>

                <div className="input-row">
                    <label><span>0</span>900LT Items:</label>
                    <input type="number" onInput={(e) => calc900Total(e.target.value)}></input>
                    <label htmlFor="number">Total: {weight.lt900}</label>
                </div>

                <br/>

                <div className="input-row">
                    <label>1000LT Items:</label>
                    <input type="number" onInput={(e) => calc1000Total(e.target.value)}></input>
                    <label htmlFor="number">Total: {weight.lt1000}</label>
                </div>

                <br/>
                <br/>
            </section>

            <h3>Remaining Weight: <span className={weight.remaining <= 0 ? 'overweight' : 'normal'}>{weight.remaining}</span>LT</h3>
        </div>
    );
}

export default Calc;