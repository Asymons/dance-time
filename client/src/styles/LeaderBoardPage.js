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
	flex-direction: columnn;
	align-items: center;
`;

export const CellWrapper = styled.div`
	width: calc(100% - 20px);
	max-width: 720px;
	padding: 0 10px;
	display: flex;
	margin: 10px 0;
	justify-content: space-around;
	align-items: center;
`;

export const PositionText = styled.div`
	font-size: 16px;
	font-weight: 600;
`;

export const NameText = styled.div`
	font-size: 16px;
`;

export const ScoreText = styled.div`
	font-size: 16px;
`;