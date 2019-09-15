import React from 'react';
import { ContentWrapper, Subtitle, Title, VideoRow, VideoWrapper, Wrapper } from '../styles/ResultPage';
import ReactPlayer from 'react-player';
import { idToName } from '../helpers/nameHelper';

const ResultPage = ({ match }) => {
    const { id } = match.params;
    const name = idToName(id);
    return (
      <Wrapper>
          <ContentWrapper>
              <Title>{name}'s Latest Submission</Title>
              <VideoRow>
                  <VideoWrapper>
                      <Subtitle>You</Subtitle>
                      <ReactPlayer width={480} url={'https://www.youtube.com/watch?v=0Kj3wWKjMSQ'} controls/>
                  </VideoWrapper>
                  <VideoWrapper>
                      <Subtitle>Soon to be you</Subtitle>
                      <ReactPlayer width={480} url={'https://www.youtube.com/watch?v=0Kj3wWKjMSQ'} controls/>
                  </VideoWrapper>
              </VideoRow>
              <Subtitle>Similarity Score: 80%</Subtitle>
          </ContentWrapper>
      </Wrapper>
    );
};

export default ResultPage;
