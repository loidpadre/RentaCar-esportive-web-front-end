import { Wrapper } from "./style";

const TestCard = ({ TestCard }) => {
    console.log(TestCard)
    return (
        <Wrapper>
            <h1>Testeminial</h1>
            <div className="testemunial">

                {
                    TestCard.map((card) => {
                        const { title, img, id, desc } = card
                        return (
                            <div key={id} className="cards">
                                <img src={img} alt="" />
                                <h4>{title}</h4>
                                <p>{desc}</p>
                                <button>Read More</button>
                            </div>
                        )
                    })
                }
            </div>
        </Wrapper>
    );
}

export default TestCard;