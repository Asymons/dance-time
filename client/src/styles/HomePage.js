import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: linear-gradient(90deg, #FFD300 50%, #F3F3F3 50%);
    overflow: hidden;
`;

export const VideoRowWrapper = styled.div`
    max-width: 1080px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const VideoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 480px;
    width: 100%;
    margin-top: 10px;
`;

export const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    margin: 10px;
`;

export const AppTitle  = styled.div`
    position: fixed;
    top: 300px;
    left: -160px;
    letter-spacing: 20px;
    font-size: 36px;
    font-weight: 600;
    transform: rotate(-90deg);
`;

export const UsernameTitle = styled.div`
    position: fixed;
    right: 10px;
    top: 10px;
    font-size: 16px;
    font-weight: 600;
`;
