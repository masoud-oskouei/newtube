import React from "react";
import styled from "styled-components";
// Need to write component code for StyledCard using styled component by replacing `null` value
export const StyledCard = styled.div`
  margin-bottom: 15px;
  padding: 10px;
`;
// Need to write component code for VideoImage using styled component by replacing `null` value
export const VideoImage = styled.div`
  height: 180px;
  background: url(${(props) => props.src});
  background-size: contain;
`;

// Need to write component code for CardSubtitle using styled component by replacing `null` value
export const CardSubtitle = styled.p`
  margin: 0;
`;

// Need to write component code for CardTitle using styled component by replacing `null` value
export const CardTitle = styled.h3`
  margin: 0;
`;

const Card = ({ onClick, isSelected, src, alt, title, subtitle, children }) => {
  return (
    <StyledCard onClick={onClick}>
      <VideoImage src={src} alt={alt} />
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
      {children}
    </StyledCard>
  );
};

export default Card;
