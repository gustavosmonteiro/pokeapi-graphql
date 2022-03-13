import styled from 'styled-components';

export const StyledUl = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
	justify-items: center;
	grid-gap: 20px;
`;

export const StyledLi = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
