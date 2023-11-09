import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"
const QuestionItem = ({ title, body, id }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="quest">
            <div className="text">
                <div className="title">
                    <h1>{title}</h1>
                    <div className="btnShow" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaMinus /> : <FaPlus />}
                    </div>
                </div>
                <div className="body">
                    {isOpen && <p>{body}</p>}
                </div>
            </div>


        </div>
    );
}

export default QuestionItem;