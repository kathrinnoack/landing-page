import styled from "styled-components";
import Headline from "./Headline";
import { fadeIn } from "../utils/animations";

const MainHeadline = styled(Headline)`
  animation: ${fadeIn} 3s ease-out 1 both;
  animation-delay: 2s;
`;
export default MainHeadline;
