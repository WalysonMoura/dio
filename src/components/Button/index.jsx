import React from "react";

import { ButtonContainer } from "./style";

export const Button = ({title, tipoStyle, }) => {
    return(
        <ButtonContainer variant={tipoStyle}>
            {title}
        </ButtonContainer>
    )
}