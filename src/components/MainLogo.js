import Logo from "./Logo";
import { fadeIn } from "../utils/animations.js";
import styled from "styled-components";

export const MainLogo = styled(Logo)`
  width: 100px;
  height: 100px;
  animation: ${fadeIn} 1s ease-out 1 both;
`;

export default MainLogo;
