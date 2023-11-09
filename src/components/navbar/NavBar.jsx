import { useState } from "react"
import { Wrapper } from "./style"
import { FaCar } from "react-icons/fa"
export const NavBar = () => {

    const [changColor, setChangColor] = useState(false)

    const scrollChang = () => {
        if (window.scrollY >= 70) {
            setChangColor(true)
        } else {
            setChangColor(false)
        }
    }

    window.addEventListener('scroll', scrollChang)
    return (
        <Wrapper>
            <div className={changColor ? "container header-bg" : "container"}>
                <div className="logo">
                    <FaCar size={50} />
                    <h1>RENTACAR</h1>
                </div>
                <div className="menu">
                    <div className="link">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Cars</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Prices</a></li>
                        </ul>
                    </div>
                    <div>
                        <input type="text" placeholder="Search here" />
                    </div>
                    <div className="singIn">
                        <button>LogIn</button>

                    </div>

                </div>
            </div>
        </Wrapper>
    )
} 