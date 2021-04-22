import React from "react";
import styled from 'styled-components';
const IconStyled = styled.svg`

`
const Icon = ({svgIcon}) => {
    return (
      <IconStyled viewBox={svgIcon.viewBox} className="icon">
        <use xlinkHref={svgIcon.url} />
      </IconStyled>
    );
}
export default Icon;