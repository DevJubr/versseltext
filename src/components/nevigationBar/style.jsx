"use client";
import styled from "styled-components";

export const MenuBar = styled.span`
  width: 30px;
  height: 2.5px;
  background: aliceblue;
  border-radius: 1rem;
  @media (max-width: 400px) {
    width: 20px;
  }
  &.small {
    width: 24px;
    @media (max-width: 400px) {
      width: 15px;
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.4rem;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 400px) {
    gap: 1rem;

    svg {
      width: 20px !important;
      height: 20px !important;
    }
  }
`;

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  strong {
    text-transform: capitalize;
    letter-spacing: 1px;
    font-size: 2.2rem;
    @media (max-width: 400px) {
      font-size: 1.2rem;
    }
  }
`;
export const IconBg = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50px;

  background: linear-gradient(
    90deg,
    rgb(15 27 41) 20%,
    rgb(229 229 255 / 28%) 100%
  );
  box-shadow: 6px 6px 12px #070e15, -6px -6px 12px #09121d;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: flex;

  @media screen and (max-width: 400px) {
    width: 32px;
    height: 32px;
    display: none;
  }
`;
