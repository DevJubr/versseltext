// "use client";

import { ConteniR } from "@/lib/style/Containear.jsx";
import { MagnifyingGlass, User } from "@/lib/forIcon/Icon.jsx";
import { Indie_Flower } from "next/font/google";
import {
  Nav,
  Container,
  Logo,
  MenuBar,
  MenuContainer,
  NavButtons,
  IconBg,
} from "./style";

const IndieFlower = Indie_Flower({
  weight: ["400"],
  subsets: ["latin"],
});

const Nevigation = () => {
  return (
    <>
      <ConteniR>
        <Nav>
          <Container>
            <MenuContainer>
              <MenuBar />
              <MenuBar />
              <MenuBar className="small" />
            </MenuContainer>
            <Logo>
              <strong className={IndieFlower.className}>movieun</strong>
            </Logo>
            <NavButtons>
              <MagnifyingGlass size={24} weight="light" />
              <IconBg>
                <User size={24} weight="light" />
              </IconBg>
            </NavButtons>
          </Container>
        </Nav>
      </ConteniR>
    </>
  );
};

export default Nevigation;
