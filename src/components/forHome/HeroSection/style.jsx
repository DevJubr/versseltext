"use client";
import styled from "styled-components";

export const Section = styled.section`
  height: calc(100vh - 350px);
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const HeroLeft = styled.div`
  width: calc(100% / 2.5);
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 2rem;
`;

export const HeroRight = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  padding: 0;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  width: 70%;
`;

export const HeroButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;
`;

export const HeroButton = styled.button`
  border: none;
  outline: none;
  background: ${(props) => (props.$gfyudswg == "blu" ? "#0055cc" : "#33415c")};

  color: aliceblue;
  text-transform: capitalize;
  letter-spacing: 1px;
  padding: 0.5rem 1.1rem;
  border-radius: 1.5rem;
  font-family: "__Poppins_0fd924";
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const PostInfos = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 4rem;
  text-transform: capitalize;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  letter-spacing: 1px;
`;
export const SocialMideas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  cursor: pointer;
`;
export const Key = styled.span`
  color: #919bb4;
`;
export const BgforIcon = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => (props.$gfyudswg == "blu" ? "#0063f2" : "#5d6982")};

  padding: 0.4rem 0.9rem;
  border-radius: 1rem;
`;

export const HeroButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const SlideDot = styled.span`
  width: 18px;
  height: 18px;
  background: #33415c;
  border-radius: 50%;

  &.active {
    border: 4px solid #5ca1ff;
  }
`;
