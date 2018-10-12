import styled from 'styled-components'

const StyledList = styled.div`
  padding: 4px;
`

const StyledContent = styled.span`
  padding-left: 8px;
`

const StyledIcon = styled.span`
  margin-left: auto;
`

const StyledLabel = styled.div`
  border-bottom: 1px solid grey;
  padding: 0 0 4px 0;
  margin: 0 0 8px 0;
  h3 {
    margin: 0;
  }
`

const StyledItem = styled.div`
  padding: 4px;
  cursor: ${props => (props.multi ? 'pointer' : props.selected ? 'default' : 'pointer')};
  pointer-events: ${props => (props.multi ? 'auto' : props.selected ? 'none' : 'auto')};
  &:hover {
    background: #e3f2fd;
  }
`

const StyledRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: ${props => props.height || '36px'};
`

const StyledContainer = styled.div`
  padding: 48px;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  > * {
    width: 35%;
  }
`

export { StyledList, StyledContent, StyledIcon, StyledLabel, StyledItem, StyledRow, StyledContainer }
