import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 20px);
    max-width: 1080px;
    padding: 0 10px;
`;

export const Title = styled.div`
    font-size: 32px;
    font-weight: 600;
    margin: 10px;
`;

export const VideoRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const VideoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
`;

export const Subtitle = styled.div`
    font-size: 24px;
    font-weight: 600;
    margin: 10px;
`;

export const ResultRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
