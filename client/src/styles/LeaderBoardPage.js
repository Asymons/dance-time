import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center; 
`;

export const Title = styled.div`
	font-size: 32px;
	font-weight: 600;
	margin: 10px;
`;

export const TableWrapper = styled.div`
	width: calc(100% - 20px);
	max-width: 720px;
	padding: 0 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const CellWrapper = styled.div`
	width: calc(100% - 20px);
	max-width: 720px;
	padding: 10px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	
	:hover {
	    cursor: pointer;
	    color: #FFD300;
	}
`;

export const PositionText = styled.div`
    width: 100%;
	font-size: 16px;
	font-weight: 600;
	text-align: center;
`;

export const NameText = styled.div`
    width: 100%;
	font-size: 16px;
		text-align: center;
`;

export const ScoreText = styled.div`
    width: 100%;
	font-size: 16px;
		text-align: center;

`;
