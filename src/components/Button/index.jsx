import StyledButton from './StyledButton'
import StyledLink from './StyledLink'

function Button(props) {
    let button;

    if (props.type) {
        button = (
            <StyledButton type={props.type} $ghost={props.$ghost}>
                {props.children}
            </StyledButton>
        )
    } else {
        button = (
            <StyledLink to={props.to} $ghost={props.$ghost}>
                {props.children}
            </StyledLink>
        )
    }

    return button
}

export default Button