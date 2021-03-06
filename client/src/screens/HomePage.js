import React, { useState, useEffect, useRef } from 'react';
import {
    AppTitle,
    LeaderboardButton,
    Title,
    UsernameTitle,
    VideoRowWrapper,
    VideoWrapper,
    Wrapper
} from '../styles/HomePage';
import VideoRecorder from 'react-video-recorder';
import UploadVideoService from '../services/UploadVideoService';
import ReactPlayer from 'react-player';
import { Cell, Label, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import dance from '../dance.mp4';
import { leaderboards } from '../helpers/firebase';
import { getRandomName } from '../helpers/randomName';
import { nameToId } from '../helpers/nameHelper';

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

const HomePage = ({history}) => {

    const [userScores, setUserScores] = useState([]);
    const [resultUrl, setResultUrl] = useState('');
    const [coloredCharacter, setColoredCharacter] = useState(0);
    const [outputState, setOutputState] = useState(OUTPUT_STATE.PAUSED);
    const [userName, setUsername] = useState(undefined);
    const videoRef = useRef(null);

    useEffect(() => {
        setInterval(() => {
            setColoredCharacter(c => c < appTitle.length - 1 ? c + 1 : 0);
        }, 1000);
        getRandomName().then(name => {
            setUsername(name);
        });
    }, []);

    const uploadRecording = (blob) => {
        setOutputState(OUTPUT_STATE.RESULT);
        setUserScores(userScores.concat({name: userScores.length, score: 80}));
        UploadVideoService(blob, nameToId(userName)).then(data => {
           // leaderboards.push({name: userName, score: 80});
           // setUserScores(userScores.concat({name: userScores.length, score: 80}));
           // setResultUrl(URL.createObjectURL(data));
        });
    };


    const lastUserScore = userScores.length > 0 ? userScores[userScores.length-1].score : '0';

    return (
        <>
            <AppTitle>{appTitle.split('').map((letter, index) => <span style={{color: index === coloredCharacter ? 'white' : 'black', transition: 'color 0.5s ease'}}>{letter}</span>)}</AppTitle>
            <UsernameTitle>User: {userName}</UsernameTitle>
            <LeaderboardButton onClick={() => history.push('/leaderboard')}>Leaderboard</LeaderboardButton>
    <Wrapper>
        <VideoRowWrapper>
            <VideoWrapper>
                <Title>You</Title>
                <VideoRecorder
                    isOnInitially
                    timeLimit={10000}
                    mimeType="video/webm;codecs=h264"
                    onStartRecording={() => {
                        if(videoRef.current){
                            videoRef.current.seekTo(0);
                        }
                        setTimeout(() => {
                            setOutputState(OUTPUT_STATE.PLAYING);
                        }, 3000)
                    }}
                    onRecordingComplete={uploadRecording}
                />
            </VideoWrapper>
            <VideoWrapper>
                <Title>What you could be</Title>
                <ReactPlayer ref={videoRef} width={480} url={dance} playing={outputState === OUTPUT_STATE.PLAYING}/>
            </VideoWrapper>
        </VideoRowWrapper>
        <VideoRowWrapper>
            <VideoWrapper>
                {
                    userScores.length === 0 && <Title>Start Dancing!</Title>
                }
                {
                    userScores.length >= 1 && <Title>Check back later for your score!</Title>
                }
            </VideoWrapper>
            <VideoWrapper>
                {
                    userScores.length === -1 ? (
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
