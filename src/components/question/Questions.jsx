import { Wrapper } from "./style";
import { useState } from "react";
import QuestionItem from "./body/QuestionItem";
const Question = ({ questions }) => {



    // const toggleShow = (id) => {
    //     questions.map((q) => {
    //         if (q.id === id) {
    //             setIsOpen(!isOpen)

    //         }
    //         else {
    //             questions
    //         }
    //     })
    // }
    return (
        <Wrapper>
            <div className="questio">
                {
                    questions.map((question) => {
                        const { title, body, id } = question
                        return (
                            <QuestionItem key={id} title={title} body={body} id={id} />
                        )
                    })
                }
            </div>
        </Wrapper>
    );
}

export default Question;