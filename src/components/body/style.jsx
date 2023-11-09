import styled from "styled-components"
export const Wrapper = styled.nav`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 60px;
        max-width: 1000px;
        width: 100%;
        margin: 80px auto;
        .text{
            h1{
                font-size: 70px;
                color: #141418;
            }
        }
        .img{
            img{
                width: 300px;
            }
            .btns {
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
            }
        }
`