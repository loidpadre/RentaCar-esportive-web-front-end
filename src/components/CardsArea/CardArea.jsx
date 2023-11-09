import { Wrapper } from "./style";
const CardArea = ({ cards }) => {
    return (
        <Wrapper>
            <h1>CARS FOR RENT</h1>
            <div className="card">
                {
                    cards.map((card) => {
                        const { img, id } = card
                        return <img key={id} src={img} alt="card-image" />
                    })
                }
            </div>
        </Wrapper>
    );
}

export default CardArea;