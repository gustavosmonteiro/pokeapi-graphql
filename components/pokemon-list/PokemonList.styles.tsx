import styled from 'styled-components';

export const StyledUl = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	justify-items: center;
	grid-gap: 20px;
`;

export const StyledLi = styled.li`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	padding: 20px;

	border: 1px solid var(--grey);
	border-radius: 5px;
`;
