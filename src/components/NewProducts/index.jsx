import Wrapper from './Wrapper'
import Button from '../Button/index'

function NewProducts({ productsList }) {
    return (
        <Wrapper>
            <h2 className="heading">
                New products<br /><span>of the week</span>
            </h2>
            <div className="button-container">
                <Button to="/shop" $ghost $arrow>See more</Button>
            </div>
            <div className="subgrid">{productsList}</div>
        </Wrapper>
    )
}

export default NewProducts