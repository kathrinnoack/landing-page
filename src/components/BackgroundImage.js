import styled from "styled-components";

const BackgroundImage = styled.img`
  position: absolute;
  top: 0px;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0) saturate(2) brightness(1);
`;

export default BackgroundImage;
