import { useState } from "react";
import './Selectionapp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

const Selectionapp = () => {

    const [count, setCount] = useState(1);

    const [advice, setAdvices] = useState([
        "Always Stick to One Task at a Time.",
        "Don't Be Afraid to Ask for Help or to Help People Back.",
        "Different People Find Different Things Easy."
    ])

    const handleButtonClick = (direction) => {
        if (direction === "next" && count < 3) {
            setCount(prev => prev + 1);
        } else if (direction === "prev" && count > 1) {
            setCount(prev => prev - 1);
        }
    }

    const icons = [faAnglesLeft, faAnglesRight];

    const buttons = Array.from({ length: 2 }).map((x, index) => (
        <button key={index} className="btn" onClick={() => handleButtonClick(index === 0 ? "prev" : "next")}>
            <FontAwesomeIcon icon={icons[index]} />
        </button>
    ));


    return (
        <div className="centerBox">
            <div className="selection">
                <div className="selectionCounter">
                    {
                        Array.from([1, 2, 3], x => (
                            <div className="counters" style={{backgroundColor: count >= x ? "#0077ff" : "#abb1b9"}}>
                                {
                                    x
                                }
                            </div>
                        ))
                    }
                </div>
                <p className="selectionText">
                    {
                        advice[count -1]
                    }
                </p>
                <div className="selectionButtons">
                    {buttons}
                </div>
            </div>
        </div>
    )
}


export default Selectionapp;