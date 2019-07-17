import Logo from "./Logo";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "../utils/animations.js";

const MainLogo = styled(Logo)`
  width: 100px;
  height: 100px;
  animation: ${fadeIn} 1s ease-out 1 both;
`;

export default MainLogo;
