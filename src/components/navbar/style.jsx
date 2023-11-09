import styled from "styled-components"
export const Wrapper = styled.nav`
    padding: 30px;
    position: fixed;
    width: 100%;
    height: 70px;
    top: 0;
    left: 0;
    color: #fff;

    .header-bg{
        background-color: rgba(0, 0, 0, 0.9);
    }
    .logo{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .container{
        transition: 0.5s;
        padding: 30px;
        position: fixed;
        width: 100%;
        height: 70px;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .menu{
            width: 70%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            input{
                width: 100%;
                padding: 10px;
                border-radius: 5px;
                border: none;
            }
            .link ul{
                display: flex;
                gap: 30px;
                li{
                    list-style: none;
                    a{
                        text-transform: uppercase;
                    }
                }
            }
            .singIn button{
                margin-top: 10px;
                
            }
        }
    }

`