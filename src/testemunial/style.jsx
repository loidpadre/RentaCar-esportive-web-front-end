import styled from "styled-components";
export const Wrapper = styled.div`
        margin: 100px 180px;
        h1{
            font-size: 40px;
            text-transform: uppercase;
            color: #23232e;
            margin-bottom: 40px;
        }

        .testemunial{
            display: flex;
            gap: 10px;
            justify-content: space-around;
            text-align: center;
            .cards{
                background-color: #000000;
                border-radius: 0px 20px 0px 20px;
                padding: 40px;
                color: #fff;
                h4{
                    font-size: 20px;
                    margin-bottom: 10px;
                }
            }
            
            img{
                width: 100px;
                height: 100px;
                border-radius: 50%;
                object-fit: cover;
                margin-bottom: 20px;
            }
        }
`