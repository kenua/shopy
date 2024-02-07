import StyledButton from './StyledButton'
import StyledLink from './StyledLink'

import RightArrow from '../RightArrow'

function Button(props) {
    let button;
    let arrowIcon = (props.$arrow) ? <RightArrow /> : null; 

    if (props.type) {
        button = (
            <StyledButton type={props.type} $ghost={props.$ghost}>
                {props.children}
                {arrowIcon}
            </StyledButton>
        )
    } else {
        button = (
            <StyledLink to={props.to} $ghost={props.$ghost}>
                {props.children}
                {arrowIcon}
            </StyledLink>
        )
    }

    return button
}

export default Button