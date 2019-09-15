import React, { useState, useEffect, useRef } from 'react';
import { leaderboards } from '../../helpers/firebase';
import {
    CellWrapper,
    NameText,
    PositionText,
    ScoreText,
    TableWrapper,
    Title,
    Wrapper
} from '../../styles/LeaderBoardPage';

const sortFn = (a,b) => {
    const { score: score1 } = a;
    const { score: score2 } = b;
    if(score1 < score2) {
        return 1;
    }else if(score1 > score2){
        return -1;
    }else{
        return 0;
    }
};

const LeaderBoardPage = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        leaderboards.once('value').then(snapshot => {
            const tempData = snapshot.val();
            const tempDataArray = Object.keys(tempData).map(key => tempData[key]);
            setData(tempDataArray.sort(sortFn).slice(0, 10));
        });
    }, []);
    return (
        <Wrapper>
            <Title>Leaderboard Top 10</Title>
            <TableWrapper>
                {
                    data.map(({name, score}, index) => {
                        return (
                            <CellWrapper>
                                <PositionText>{index+1}</PositionText>
                                <NameText>{name}</NameText>
                                <ScoreText>{score}</ScoreText>
                            </CellWrapper>
                        );
                    })
                }
            </TableWrapper>
        </Wrapper>
    );
};

export default LeaderBoardPage;
