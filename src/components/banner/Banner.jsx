import { Wrapper } from "./style"

const url = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
export const Banner = () => {
    return (
        <Wrapper style={{ backgroundImage: `url(${url})`, width: "100%", height: "600px", objectFit: "cover" }}>
            <div className="text">
                <h1>ENCONTRE O SEU CARRO AGORA!</h1>
                <p >Está pronto para uma jornada inesquecível? Agarre as chaves da aventura e experimente a liberdade de explorar novos horizontes com nosso serviço de aluguel de carros!</p>
                <button>ALUGAR CARRO</button>
            </div>
        </Wrapper>
    )
} 