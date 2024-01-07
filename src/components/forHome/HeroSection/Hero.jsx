import { ConteniR } from "@/lib/style/Containear";
import Image from "next/image";
import {
  Section,
  Container,
  Description,
  Details,
  HeroButton,
  HeroButtons,
  HeroLeft,
  HeroRight,
  Info,
  Key,
  PostInfos,
  Title,
  BgforIcon,
  HeroButtonsContainer,
  SlideDot,
  SocialMideas,
} from "./style";
import {
  CloudArrowDown,
  Play,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@/lib/forIcon/Icon";
import { Nova_Oval } from "next/font/google";
import OptimizedImage from "@/components/opimaizImg/Image";

const NovaOval = Nova_Oval({
  weight: ["400"],
  subsets: ["latin"],
});

const Hero = () => {
  console.log("ami ekhane");

  return (
    <ConteniR>
      <Section>
        <Container>
          <HeroLeft>
            <HeroButtonsContainer>
              <SlideDot className=" active"></SlideDot>
              <SlideDot></SlideDot>
              <SlideDot></SlideDot>
              <SlideDot></SlideDot>
              <SlideDot></SlideDot>
            </HeroButtonsContainer>
            <div className="hero__img">
              <Image
                src="https://wallpaperbat.com/img/1438256-mmatt-on-x-back-with-another-new-oppenheimer-poster-and-wallpaper-featuring-cillian-murphy-x.jpg"
                alt="hero img"
                width={300}
                height={400}
                style={{ borderRadius: ".5rem" }}
              />
            </div>
          </HeroLeft>
          <HeroRight>
            <Details>
              <Title className={NovaOval.className}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Title>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                blanditiis praesentium, animi, nulla qui quia assumenda modi
                necessitatibus sapiente veritatis nisi commodi molestias
                aspernatur mollitia tenetur aperiam asperiores unde sint!
              </Description>
              <HeroButtons>
                <HeroButton $gfyudswg={"blu"}>
                  download
                  <BgforIcon $gfyudswg={"blu"}>
                    <CloudArrowDown size={21} weight="light" />
                  </BgforIcon>
                </HeroButton>
                <HeroButton>
                  see more
                  <BgforIcon>
                    <Play size={21} weight="light" />
                  </BgforIcon>
                </HeroButton>
              </HeroButtons>
              <PostInfos>
                <Info>
                  <Key>year :</Key>
                  <span className="value"> 2023</span>
                </Info>
                <Info>
                  <Key>genre :</Key>
                  <span className="value"> action, thrilar, biography</span>
                </Info>
                <Info>
                  <Key>rating :</Key>
                  <span className="value"> 9.9</span>
                </Info>
              </PostInfos>
            </Details>

            <SocialMideas>
              <InstagramLogo size={21} weight="light" />
              <FacebookLogo size={21} weight="light" />
              <TwitterLogo size={21} weight="light" />
              <YoutubeLogo size={21} weight="light" />
            </SocialMideas>
          </HeroRight>
        </Container>
      </Section>
    </ConteniR>
  );
};

export default Hero;
