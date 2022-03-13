import styled from 'styled-components';

export const StyledUl = styled.ul`
	display: flex;
	gap: 2px;
`;

export const StyledLi = styled.li<{ type: string }>`
	background-color: ${(props) => 'var(--' + props.type + ')'};
	color: var(--white);
	padding: 1px 5px;
	border-radius: 5px;
	text-align: center;
	min-width: 70px;
`;
