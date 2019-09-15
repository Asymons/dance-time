import React, { useEffect, useState } from 'react';
import { ContentWrapper, Subtitle, Title, VideoRow, VideoWrapper, Wrapper } from '../styles/ResultPage';
import ReactPlayer from 'react-player';
import { idToName } from '../helpers/nameHelper';
import { leaderboards } from '../helpers/firebase';
import { Cell, Label, Pie, PieChart } from 'recharts';

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
    const similarityScore = [
        {
            name: 'Similarity',
            value: userData.score ? userData.score : 0,
            color: '#FFD300'
        },
        {
            name: 'Improvement',
            value: userData.score ? 100 - userData.score : 100,
            color: '#D1D1D1'
        }
    ];
    return (
      <Wrapper>
          <ContentWrapper>
              <Title>{name}'s Latest Submission</Title>
              <VideoRow>
                  <VideoWrapper>
                      <Subtitle>You</Subtitle>
                      <video style={{width: 480}} id="videoPlayer" controls>
                          <source src={`http://localhost:3000/video/${id}-og.mp4`} type="video/mp4" />
                      </video>
                  </VideoWrapper>
                  <VideoWrapper>
                      <Subtitle>How you move</Subtitle>
                      <video style={{width: 480}} id="videoPlayer" controls>
                          <source src={`http://localhost:3000/video/${id}-skeleton.mp4`} type="video/mp4" />
                      </video>
                  </VideoWrapper>
                  <VideoWrapper>
                      <Subtitle>Soon to be you</Subtitle>
                      <video style={{width: 480}} id="videoPlayer" controls>
                          <source src={`http://localhost:3000/video/${id}-after.mp4`} type="video/mp4" />
                      </video>
                  </VideoWrapper>
              </VideoRow>
              {
                  userData.score && (
                      <PieChart width={300} height={300}>
                          <Pie
                              data={similarityScore}
                              dataKey="value"
                              nameKey="name"
                              cx="50%"
                              cy="50%"
                              innerRadius="60%"
                              outerRadius="80%"
                              startAngle={180}
                              endAngle={-180}
                          >
                              {
                                  similarityScore.map((entry, index) => (
                                      <Cell key={`cell-${index}`} fill={entry.color}/>
                                  ))
                              }
                              <Label width={30} position="center">
                                  { `Similarity Score: ${userData.score}%` }
                              </Label>
                          </Pie>
                      </PieChart>
                  )
              }
          </ContentWrapper>
      </Wrapper>
    );
};

export default ResultPage;
