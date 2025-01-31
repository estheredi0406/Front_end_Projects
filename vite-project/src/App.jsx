import styled from "@emotion/styled";
import image1 from "./assets/images/icon-facebook.svg";
import image2 from "./assets/images/icon-twitter.svg";
import image3 from "./assets/images/icon-instagram.svg";
import image4 from "./assets/images/icon-youtube.svg";
import { RiArrowDropUpFill } from "react-icons/ri";
import { MdOutlineArrowDropDown } from "react-icons/md";

function App() {
  return (
    <>
      <BodyContainer>
        <HeaderContainer>
          <TitleContainer>
            <Title>Social Media Dashbord</Title>
            <SubTitle>Total Followers:23,004</SubTitle>
          </TitleContainer>

          <IconContainer>
            <Subject>Dark Mode</Subject>
          </IconContainer>
        </HeaderContainer>

        <CardContainer>
          <Card>
            <MediaContainer>
              <Image src={image1} alt="facebook" />
              <MediaContent>@nathanf</MediaContent>
            </MediaContainer>

            <Followers>1987</Followers>
            <FollowersTitle>Followers</FollowersTitle>

            <NewFollower>12 Today</NewFollower>
          </Card>

          <Card2>
            <MediaContainer>
              <Image src={image2} alt="facebook" />
              <MediaContent>@nathanf</MediaContent>
            </MediaContainer>

            <Followers>1044</Followers>
            <FollowersTitle>Followers</FollowersTitle>

            <NewFollower>99 Today</NewFollower>
          </Card2>

          <Card3>
            <MediaContainer>
              <Image src={image3} alt="facebook" />
              <MediaContent>@realnathanf</MediaContent>
            </MediaContainer>

            <Followers>11k</Followers>
            <FollowersTitle>Followers</FollowersTitle>

            <NewFollower>1099 Today</NewFollower>
          </Card3>

          <Card4>
            <MediaContainer>
              <Image src={image4} alt="facebook" />
              <MediaContent>Nathan F</MediaContent>
            </MediaContainer>

            <Followers>8239</Followers>
            <FollowersTitle>Subscribers</FollowersTitle>

            <NewFollower>144 Today</NewFollower>
          </Card4>
        </CardContainer>

        <NewInfo>Overview-Today</NewInfo>

        <InfoContainer>
          <SmallCard>
            <InfoWrapper>
              <Info1>
                <SmallCardTitle>Page Views</SmallCardTitle>
                <Image src={image1} alt="facebook" />
              </Info1>
              <Info2>
                <SmallCardInfo>87</SmallCardInfo>
                <SmallCardInfo2>
                  {" "}
                  <RiArrowDropUpFill />
                  3%
                </SmallCardInfo2>
              </Info2>
            </InfoWrapper>
          </SmallCard>

          <SmallCard2>
            <InfoWrapper>
              <Info1>
                <SmallCardTitle>Page Views</SmallCardTitle>
                <Image src={image1} alt="facebook" />
              </Info1>
              <Info2>
                <SmallCardInfo>52</SmallCardInfo>
                <SmallCardInfo22>
                  {" "}
                  <MdOutlineArrowDropDown />
                  2%
                </SmallCardInfo22>
              </Info2>
            </InfoWrapper>
          </SmallCard2>

          <SmallCard3>
            <InfoWrapper>
              <Info1>
                <SmallCardTitle>Page Views</SmallCardTitle>
                <Image src={image3} alt="facebook" />
              </Info1>
              <Info2>
                <SmallCardInfo>5462</SmallCardInfo>
                <SmallCardInfo2>
                  {" "}
                  <RiArrowDropUpFill />
                  2257%
                </SmallCardInfo2>
              </Info2>
            </InfoWrapper>
          </SmallCard3>

          <SmallCard4>
            <InfoWrapper>
              <Info1>
                <SmallCardTitle>Profile Views</SmallCardTitle>
                <Image src={image3} alt="facebook" />
              </Info1>
              <Info2>
                <SmallCardInfo>52k</SmallCardInfo>
                <SmallCardInfo2>
                  {" "}
                  <RiArrowDropUpFill />
                  1375%
                </SmallCardInfo2>
              </Info2>
            </InfoWrapper>
          </SmallCard4>
        </InfoContainer>

        <InfoContainer>
          <SmallCard>
            <InfoWrapper>
              <Info1>
                <SmallCardTitle>Retweets</SmallCardTitle>
                <Image src={image2} alt="facebook" />
              </Info1>
              <Info2>
                <SmallCardInfo>117</SmallCardInfo>
                <SmallCardInfo2>
                  {" "}
                  <RiArrowDropUpFill />
                  303%
                </SmallCardInfo2>
              </Info2>
            </InfoWrapper>
          </SmallCard>

          <SmallCard2>
            <InfoWrapper>
              <Info1>
                <SmallCardTitle>Likes</SmallCardTitle>
                <Image src={image2} alt="facebook" />
              </Info1>
              <Info2>
                <SmallCardInfo>507</SmallCardInfo>
                <SmallCardInfo22>
                  {" "}
                  <MdOutlineArrowDropDown />
                  553%
                </SmallCardInfo22>
              </Info2>
            </InfoWrapper>
          </SmallCard2>

          <SmallCard3>
            <InfoWrapper>
              <Info1>
                <SmallCardTitle>Page Views</SmallCardTitle>
                <Image src={image4} alt="facebook" />
              </Info1>
              <Info2>
                <SmallCardInfo>107</SmallCardInfo>
                <SmallCardInfo2>
                  {" "}
                  <RiArrowDropUpFill />
                  19%
                </SmallCardInfo2>
              </Info2>
            </InfoWrapper>
          </SmallCard3>

          <SmallCard4>
            <InfoWrapper>
              <Info1>
                <SmallCardTitle>Total Views</SmallCardTitle>
                <Image src={image4} alt="facebook" />
              </Info1>
              <Info2>
                <SmallCardInfo>1407</SmallCardInfo>
                <SmallCardInfo2>
                  {" "}
                  <RiArrowDropUpFill />
                  12%
                </SmallCardInfo2>
              </Info2>
            </InfoWrapper>
          </SmallCard4>
        </InfoContainer>
      </BodyContainer>
    </>
  );
}

export default App;

const SmallCardInfo2 = styled.div`
  font-size: 12px;
  font-weight: bold;
  align-self: center;
  color: #3aa593;
  margin-top: 10px;
`;

const SmallCardInfo22 = styled.div`
  font-size: 12px;
  font-weight: bold;
  align-self: center;
  color: red;
  margin-top: 10px;
`;

const SmallCardInfo = styled.div`
  font-size: 35px;
  font-weight: bold;
  color: white;
`;

const Info2 = styled.div`
  display: flex;
  margin-top: 25px;
  justify-content: space-between;
`;

const SmallCardTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  text-transform: capitalize;
  color: #949dbe;
`;

const Info1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
`;

const SmallCard = styled.div`
  width: 270px;
  height: 130px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  background-color: #252b43;
  border-radius: 8px;
`;

const SmallCard2 = styled(SmallCard)`
  width: 270px;
  height: 130px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  background-color: #252b43;
  border-radius: 8px;
`;

const SmallCard3 = styled(SmallCard)`
  width: 270px;
  height: 130px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  background-color: #252b43;
  border-radius: 8px;
`;

const SmallCard4 = styled(SmallCard)`
  width: 270px;
  height: 130px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  background-color: #252b43;
  border-radius: 8px;
`;

const InfoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  justify-self: center;
  align-items: center;
  width: 80%;
  height: 150px;
`;

const NewInfo = styled.div`
  font-size: 25px;
  color: white;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 150px;
`;

const NewFollower = styled.div`
  color: #1db489;
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 12px;
  margin-top: 10px;
`;

const FollowersTitle = styled.div`
  font-size: 12px;
  letter-spacing: 2px;
  text-align: center;
  color: #a0a7b8;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

const Followers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 43px;
  font-weight: bold;
`;

const MediaContent = styled.div`
  font-size: 12px;
  margin-left: 5px;
  color: #a0a7b8;
`;

const Image = styled.img`
  height: 20px;
  width: 20px;
`;

const MediaContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  align-items: center;
`;

const Card = styled.div`
  width: 270px;
  height: 210px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #252b43;
  border-radius: 8px;
  border-top: 5px solid blue;
`;

const Card2 = styled(Card)`
  width: 270px;
  height: 210px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #252b43;
  border-radius: 8px;
  border-top: 5px solid blue;
`;

const Card3 = styled(Card)`
  width: 270px;
  height: 210px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #252b43;
  border-radius: 8px;
  border-top: 5px solid #f49579;
`;

const Card4 = styled(Card)`
  width: 270px;
  height: 210px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #252b43;
  border-radius: 8px;
  border-top: 5px solid red;
`;

const CardContainer = styled.div`
  margin-top: -30px;
  display: flex;
  justify-content: space-between;
  justify-self: center;
  align-items: center;
  width: 80%;
  height: 300px;
`;

const Subject = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: white;
  margin-left: auto;
`;
const IconContainer = styled.div`
  width: 40%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.div`
  font-size: 15px;
  color: #a0a7b8;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: white;
`;

const TitleContainer = styled.div`
color:white
width:50%
height:100px`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-around;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  color: white;
`;
const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #20222f;
`;
