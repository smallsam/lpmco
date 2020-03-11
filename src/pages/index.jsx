import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'react-emotion';
import { Flex } from 'grid-emotion';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import GridItem from '../components/GridItem';
import LPMCoLogo from '../images/LPMCO_Inline_Logo_NoTag_OL.svg'
import AmongNature from '../images/among_nature.svg'
import WalkingOutside from '../images/walking_outside.svg'
import WorldIsMine from '../images/the_world_is_mine.svg'
import ConceptualIdea from '../images/conceptual_idea.svg'

import '../fonts/fonts.css'

const Header = styled.header`
  width: 100%;
  height: 900px;
  position: relative;
  padding: 1.75rem;
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    height: 700px;
  }
`;

const Logo = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0 1.75rem;
  margin-top: 50px;
`;


const LogoImg = styled.div`
  flex-basis: calc(99.9% * 4 / 7 - 5rem);
  max-width: calc(99.9% * 4 / 7 - 5rem);
  width: calc(99.9% * 4 / 7 - 5rem);
  text-align: center;
  img {
    width: 30%;
    margin-bottom: 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    img {
      width: 50%;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    img {
      width: 75%;
    }
  }
`;

const Hero = styled(Flex)`
  height: 100%;
  text-align: center;
  h1 {
    letter-spacing: 0.2rem;
    line-height: 4.5rem;
  }
  h3 {
    margin-top: 2rem;
    font-size: 1.85rem;
    font-weight: 400;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    h1 {
      line-height: 3.5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    h1 {
      line-height: 2.5rem;
    }
    h3 {
      font-size: 1.3rem;
    }
  }
`;

const Wrapper = styled(Flex)`
  max-width: ${props => props.theme.maxWidth};
`;

const PrimaryBG = styled.section`
  background: ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.textInvert};
  h1,
  h2,
  h3,
  h4 {
    color: ${props => props.theme.colors.textInvert};
  }
`;

const ServiceImage = styled.div`
  flex-basis: calc(99.9% * 4 / 7 - 5rem);
  max-width: calc(99.9% * 4 / 7 - 5rem);
  width: calc(99.9% * 4 / 7 - 5rem);
  text-align: center;
  img {
    width: 90%;
    margin-bottom: 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    img {
      width: 50%;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    img {
      width: 75%;
    }
  }
`;

// const CompanyLogo = graphql`
// {
//   imageSharp {
//     fluid(maxHeight: 120, quality: 90, traceSVG: { color: "#021212" }) {
//       ...GatsbyImageSharpFluid_withWebp_tracedSVG
//     }
//     resize(maxHeight: 120, fit: OUTSIDE) {
//       src
//     }
//   }
// }
// `;

const ServiceText = styled.div`
  flex-basis: calc(99.9% * 3 / 7 - 5rem);
  max-width: calc(99.9% * 3 / 7 - 5rem);
  width: calc(99.9% * 3 / 7 - 5rem);
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
  ol,
  ul {
    list-style: none;
    margin-left: 0;
  }
  li:before {
    content: '－';
    padding-right: 8px;
  }

`;

const Contact = styled(Wrapper)`
  margin: 0 auto;
  h1,
  h2,
  h3 {
    color: ${props => props.theme.colors.text};
  }
  h3 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 1rem;
    font-size: 1.85rem;
    font-weight: 400;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    font-size: 1.5rem;
  }
`;

const IndexPage = ({
  data: {
    caseStudies: { edges },
  },
}) => (
    <Layout>
      <Header>
        <LogoImg><img src={LPMCoLogo} alt="LPMCo" /></LogoImg>
        <Hero justifyContent="center" alignItems="center" flexDirection="column">
          <h1>
            Managing projects <br />for social good
        </h1>
          <h3>We support women founders and women-led organisations<br /> who are passionate about creating social change.</h3>
        </Hero>
      </Header>

      <PrimaryBG>
      <Wrapper flexDirection="column" p={4} mt={7} mb={4} mx="auto">

        <Flex w={1} py={5} justifyContent="space-between" flexWrap="wrap">
          <ServiceText><h2>Are you delivering a program and want to maximise your impact?</h2></ServiceText>
          <ServiceText><h2>Do you want to create a new social impact program?</h2></ServiceText>
        </Flex>

      </Wrapper>
      </PrimaryBG>
      <Wrapper flexDirection="column" p={4} mx="auto">

        <Flex w={1} py={5} justifyContent="space-between" flexWrap="wrap">
          <ServiceImage>
            <img src={ConceptualIdea} alt="Conceptual Idea" />
          </ServiceImage>
          <ServiceText>

            <h2>What we do</h2>
            <ul>
              <li>Help you gain clarity on what is working or not in your project</li>
              <li>Maximise your impact by designing or redesigning your social impact program</li>
              <li>Develop clear and manageable actions to realise your vision</li>
              <li>Create sustainability through organic growth and funding opportunities</li>
            </ul>


          </ServiceText>

        </Flex>

        <Flex w={1} py={5} justifyContent="space-between" flexDirection="row-reverse" flexWrap="wrap">
          <ServiceImage>
            <img src={WalkingOutside} alt="walking Outside" />
          </ServiceImage>
          <ServiceText>
            <h2>Is this you?</h2>
            <ul>
              <li>You have an established business</li>
              <li>You are passionate about what you do</li>
              <li>You want your vision to be realised</li>
              <li>You want to support more clients</li>
              <li>You want to have a greater impact</li>
              <li>You want to be a leader in innovation</li>
              <li> You want to collaborate with others</li>
              <li>You want sustainability and peace of mind</li>
              <li>You want your program to make a difference</li>
            </ul>

          </ServiceText>
        </Flex>

        <Flex w={1} py={5} justifyContent="space-between" flexWrap="wrap">
          <ServiceImage>
            <img src={AmongNature} alt="Among Nature" />
          </ServiceImage>
          <ServiceText>
            <h2>About Carolyn</h2>
            <p>Carolyn is a Project Strategist and a Social Impact Designer. She is also a business process nerd and secretly loves spreadsheets.</p>
            <p>Carolyn has worked around the world designing and managing community and international development programs. From managing an independent media agency in Iraq to designing a project addressing capital flight in Africa, she loves seeing the project roll out from start to finish. Carolyn supports projects from project design, funding acquisition, project oversight through to reporting.</p>
            <p>In Australia, she assisted the transition of the National Disability Insurance Scheme into Queensland and now works with organisations who want to create greater social impact. Her passion is creating local community action and enjoys working with local organisations to make big differences in people’s lives.</p>
            <p>Carolyn holds a Masters in International and Community Development, a Bachelor of Business and is a Certified Practicing Accountant.</p>
            <p>She lives in Brisbane, Australia and has two young boys, a vintage caravan and a backyard orchard.</p>
          </ServiceText>
        </Flex>
      </Wrapper>

      <Wrapper p={4} mb={[4, 4, 2]} mx="auto" justifyContent="space-between" flexWrap="wrap" >
        {edges.map(c => (
          <GridItem
            uid={c.node.uid}
            key={c.node.uid}
            image={c.node.data.header_image.localFile.childImageSharp.fluid}
            alt={c.node.data.title.text}
            title={c.node.data.title.text}
            subtitle={c.node.data.subtitle.text}
          />
        ))}
      </Wrapper>
      <Contact px={4} py={6} justifyContent="center" alignItems="center" flexDirection="column">
        <h1>Say hi!</h1>
        <h3>carolyn@lpmcompany.com.au</h3>
      </Contact>
      <Footer />
    </Layout>
  );

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    caseStudies: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    caseStudies: allPrismicCaseStudy(sort: { fields: [last_publication_date], order: DESC }) {
      edges {
        node {
          uid
          data {
            header_image {
              localFile {
                childImageSharp {
                  fluid(
                    maxWidth: 900
                    maxHeight: 900
                    quality: 90
                    traceSVG: { color: "#021212" }
                    cropFocus: ENTROPY
                  ) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            title {
              text
            }
            subtitle {
              text
            }
          }
        }
      }
    }
  }
`;
