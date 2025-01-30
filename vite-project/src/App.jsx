import styled from "@emotion/styled";
import image1 from "./images/icon-supervisor.svg";
import image2 from "./images/icon-calculator.svg";
import image3 from "./images/icon-karma.svg";
import image4 from "./images/icon-team-builder.svg";

function App() {
  return (
    <>
      <Container>
        <TextSection>
          <TextSection1>Reliable, efficient delivery</TextSection1>
          <TextSection2>Powered by Technology</TextSection2>
          <TextSection3>
            Our Artificial Intelligence powered tools use millions of project
            data <br /> points to ensure that your project is successful
          </TextSection3>
        </TextSection>

        <CardSection>
          <LeftSection>
            <Card>
              <Subcard>
                <CardTitle> Supervisor</CardTitle>
                <CardBodyText>
                  Monitors activity to identify project roadblocks
                </CardBodyText>
                <CardImageHolder>
                  <CardImage src={image1}></CardImage>
                </CardImageHolder>
              </Subcard>
            </Card>
          </LeftSection>

          <MiddleSection>
            <Card2>
              <Subcard>
                <CardTitle> Team Builder</CardTitle>
                <CardBodyText>
                  Scans our talent network to create the optimal team for your
                  project
                </CardBodyText>
                <CardImageHolder>
                  <CardImage src={image4}></CardImage>
                </CardImageHolder>
              </Subcard>
            </Card2>

            <Card3>
              <Subcard>
                <CardTitle> Karma</CardTitle>
                <CardBodyText>
                  Regularly evaluates our talent to ensure quality
                </CardBodyText>
                <CardImageHolder>
                  <CardImage src={image3}></CardImage>
                </CardImageHolder>
              </Subcard>
            </Card3>
          </MiddleSection>
          <RightSection>
            <Card4>
              <Subcard>
                <CardTitle> Calculator</CardTitle>
                <CardBodyText>
                  Uses data from past projects to provide better delivery
                  estimates
                </CardBodyText>
                <CardImageHolder>
                  <CardImage src={image2}></CardImage>
                </CardImageHolder>
              </Subcard>
            </Card4>
          </RightSection>
        </CardSection>
      </Container>
    </>
  );
}

export default App;

const CardImage = styled.img``;

const Subcard = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;

const CardImageHolder = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: flex-end;
`;

const CardBodyText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgba(79, 82, 101, 0.5);
  margin-top: 10px;
  flex: 1;
  display: flex;
`;

const CardTitle = styled.div`
  font-weight: 600;
  font-size: 17px;
  color: rgba(79, 82, 101);
`;

const Card = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-top: 5px solid #44d3d2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftSection = styled.div`
  width: 340px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 425px) {
  height: auto;
  margin-bottom: 20px;
`;

const Card2 = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-top: 5px solid #ec5355;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 425px) {
  margin-bottom: 20px;

`;

const Card3 = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-top: 5px solid #fcae4a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MiddleSection = styled.div`
  width: 340px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 425px) {
  height: auto;
  margin-bottom: 20px;
`;

const RightSection = styled.div`
  width: 340px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 425px) {
  height: auto;
  margin-bottom: 20px;
`;

const Card4 = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-top: 5px solid #5e9cdf;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextSection3 = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: rgba(79, 82, 101, 0.5);
  text-align: center;
  margin-top: 20px;

  @media screen and (max-width: 425px) {
    margin-bottom: 50px;
    font-size: 12px;
    width: 80%;
  }
`;

const TextSection2 = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: #4f5265;

  @media screen and (max-width: 425px) {
  font-size: 19px;
`;

const TextSection1 = styled.div`
  font-size: 37px;
  font-weight: 200;
  color: #4f5265;

  @media screen and (max-width: 425px) {
  margin-top: 50px;
  font-size: 20px;
`;

const CardSection = styled.div`
  width: 1100px;
  height: 540px;
  display: flex;
  margin-bottom: 50px;
  justify-content: space-between;

  @media screen and (max-width: 425px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;

const TextSection = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 425px) {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
