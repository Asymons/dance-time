import React, { useState, useEffect, useRef } from 'react';
import { AppTitle, Title, UsernameTitle, VideoRowWrapper, VideoWrapper, Wrapper } from '../styles/HomePage';
import VideoRecorder from 'react-video-recorder';
import UploadVideoService from '../services/UploadVideoService';
import ReactPlayer from 'react-player';
import { CartesianGrid, Cell, Label, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import blackpink from '../blackpink.mp4';
import { leaderboards } from '../helpers/firebase';
import { getRandomName } from '../helpers/randomName';

const similarityScore = [
    {
        name: 'Similarity',
        value: 80,
        color: '#FFD300'
    },
    {
        name: 'Improvement',
        value: 20,
        color: '#D1D1D1'
    }
];

const appTitle = 'DANCE TIME';

const OUTPUT_STATE = {
    PAUSED: 1,
    PLAYING: 2,
    RESULT: 3
};

const HomePage = (props) => {

    const [userScores, setUserScores] = useState([]);
    const [url, setUrl] = useState('https://www.youtube.com/watch?v=vzhZVhZLtZA');
    const [coloredCharacter, setColoredCharacter] = useState(0);
    const [outputState, setOutputState] = useState(OUTPUT_STATE.PAUSED);
    const [userName, setUsername] = useState(undefined);
    const videoRef = useRef(null);

    useEffect(() => {
        setInterval(() => {
            setColoredCharacter(c => c < appTitle.length - 1 ? c + 1 : 0);
        }, 1000);
        const randomName = getRandomName().then(name => {
            setUsername(name);
        });
    }, []);

    const uploadRecording = (blob) => {
        setOutputState(OUTPUT_STATE.RESULT);
        setUserScores(userScores.concat({name: userScores.length, score: 70 + Math.ceil(Math.random() * 20)}));
        UploadVideoService(blob).then(data => {
           leaderboards.push({name: userName, score: 80});
           setUserScores(userScores.concat({name: userScores.length, score: 80}))
        });
    };

    const lastUserScore = userScores.length > 0 ? userScores[userScores.length-1].score : '0';

    return (
        <>
            <AppTitle>{appTitle.split('').map((letter, index) => <span style={{color: index === coloredCharacter ? 'white' : 'black', transition: 'color 0.5s ease'}}>{letter}</span>)}</AppTitle>
            <UsernameTitle>User: {userName}</UsernameTitle>
    <Wrapper>
        <VideoRowWrapper>
            <VideoWrapper>
                <Title>You</Title>
                <VideoRecorder
                    isOnInitially
                    mimeType="video/webm;codecs=h264"
                    countdownTime={0}
                    onStartRecording={() => {
                        if(videoRef.current){
                            videoRef.current.seekTo(0);
                        }
                        setTimeout(() => {
                            setOutputState(OUTPUT_STATE.PLAYING);
                        }, 0)
                    }}
                    onRecordingComplete={uploadRecording}
                />
            </VideoWrapper>
            <VideoWrapper>
                <Title>What you could be</Title>
                <ReactPlayer ref={videoRef} width={480} url={blackpink} playing={outputState === OUTPUT_STATE.PLAYING}/>
            </VideoWrapper>
        </VideoRowWrapper>
        <VideoRowWrapper>
            <VideoWrapper>
                {
                    userScores.length === 0 && <Title>Start Dancing!</Title>
                }
                {
                    userScores.length === 1 && <Title>Last Similarity Score: {lastUserScore}%</Title>
                }
                {
                    userScores.length > 1 && (
                        <LineChart width={480} height={280} data={userScores}>
                            <CartesianGrid stroke="#F3F3F3"/>
                            <XAxis dataKey="name" stroke="#F3F3F3" />
                            <YAxis stroke="#F3F3F3"/>
                            <Legend />
                            <Line type="monotone" dataKey="score" stroke="#F3F3F3" />
                        </LineChart>
                    )
                }
            </VideoWrapper>
            <VideoWrapper>
                {
                    userScores.length > 0 ? (
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
                                    { `Similarity Score: ${lastUserScore}%` }
                                </Label>
                            </Pie>
                        </PieChart>
                    ) : <div/>
                }
            </VideoWrapper>
        </VideoRowWrapper>
    </Wrapper>
            </>
)};

export default HomePage;
