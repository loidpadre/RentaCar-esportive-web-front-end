import { useState } from "react"
import { Data } from "../../data/data"
import { Wrapper } from "./style"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
export const Body = () => {

    const [imageIndex, setImageIndex] = useState(0)

    const handleLeft = () => {
        if (imageIndex > 0) {
            setImageIndex(imageIndex - 1)
        }
    }
    const handlRight = () => {
        if (imageIndex <= 0) {
            setImageIndex(imageIndex + 1)
        }
    }

    const { id, url } = Data[imageIndex]
    return (
        <Wrapper>
            <div className="text">
                <h1>TEMOS OS MELHORES CARROS, PARA ALUGARES</h1>
                <button>PEDIR CARRO</button>
            </div>
            <div className="img">
                <div className="btns">
                    <FaArrowLeft size={27} color="red" onClick={handleLeft} />
                    <FaArrowRight size={27} color="red" onClick={handlRight} />
                </div>
                <img key={id} src={url} alt="" />
            </div>
        </Wrapper>
    )
} 