import React, { useEffect, useState } from 'react';
import { ContentWrapper, Subtitle, Title, VideoRow, VideoWrapper, Wrapper } from '../styles/ResultPage';
import ReactPlayer from 'react-player';
import { idToName } from '../helpers/nameHelper';
import { leaderboards } from '../helpers/firebase';

const ResultPage = ({ match }) => {
    const [userData, setUserData] = useState({});
    const { id } = match.params;
    const name = idToName(id);
    useEffect(() => {
        leaderboards.once('value').then(snapshot => {
            const data = snapshot.val();
            const user = data[Object.keys(data).filter((key) => data[key].name === name)[0]];
            console.log(user);
            setUserData(user);
        })
    }, []);
    return (
      <Wrapper>
          <ContentWrapper>
              <Title>{name}'s Latest Submission</Title>
              <VideoRow>
                  <VideoWrapper>
                      <Subtitle>You</Subtitle>
                      <video id="videoPlayer" controls>
                          <source src={`http://localhost:3000/video/${id}-before.mp4`} type="video/mp4" />
                      </video>
                  </VideoWrapper>
                  <VideoWrapper>
                      <Subtitle>Soon to be you</Subtitle>
                      <video id="videoPlayer" controls>
                          <source src={`http://localhost:3000/video/${id}-after.mp4`} type="video/mp4" />
                      </video>
                  </VideoWrapper>
              </VideoRow>
              {
                  userData.score && (
                      <Subtitle>Similarity Score: {userData.score}%</Subtitle>
                  )
              }
          </ContentWrapper>
      </Wrapper>
    );
};

export default ResultPage;
