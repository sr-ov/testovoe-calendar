import styled from 'styled-components'

export const CellsWrapper = styled.div`
	display: grid;
	grid-template-columns: 50px 1fr;
	padding-left: 10px;
	margin-bottom: 5px;
`

export const Cells = styled.div`
	overflow: hidden;
`

export const CellsContent = styled.div`
	margin: -1px;
`

export const CellsRow = styled.div`
	display: flex;
`

export const CellContent = styled.span`
	display: block;
	height: 100%;
	transition: background-color 0.2s;
`

export const Cell = styled.button<{ isActive?: boolean; isNotEmpty: boolean }>`
	height: 40px;
	border: 0.1px solid #e7e7e7;
	flex: 1;
	padding: 2px;

	${CellContent} {
		background-color: ${(props) =>
			(props.isActive && '#60a5fa') || (props.isNotEmpty && '#bfdbfe') || '#fff'};
	} ;
`

export const Hours = styled.ul`
	background-color: #fff;
	position: relative;
	z-index: 10;
	display: grid;
	font-size: 14px;
`

export const HoursItem = styled.li`
	color: gray;
	line-height: 1;
	height: 40px;
	display: flex;
	align-items: flex-end;
`
