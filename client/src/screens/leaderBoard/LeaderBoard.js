import React, { useState, useEffect, useRef } from 'react';

const LeaderBoardPage = (props) => {
    const snapshot = await leaderboards.once('value');
    const value = snapshot.val();
    const keys = Object.keys(value);
    return (
        <Wrapper>
            <Title>Leaderboard</Title>
            <TableWrapper>
                {
                    keys.map((key, index) => {
                        const { name, score } = value[key];
                        return (
                            <CellWrapper>
                                <PositionText> {index+1} </PositionText>
                                <NameText> {name} </NameText>
                                <ScoreText> {score} </ScoreText>
                            </CellWrapper>
                        );
                    })
                }
            </TableWrapper>
        </Wrapper>
    );
};

export default LeaderBoardPage;
