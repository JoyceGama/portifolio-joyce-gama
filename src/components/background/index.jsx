import { BackgroundStyled } from "./style"

const Background = ({children}) => {

    return (
        <BackgroundStyled>
            {children}
        </BackgroundStyled>
    )

}

export default Background