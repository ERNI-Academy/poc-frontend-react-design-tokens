import styled, {css} from 'styled-components'

export const Wrapper = styled.div`
  max-width: 640px;
  margin: 10px auto;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.radius.sm};
  box-shadow: ${props => props.theme.shadows.sm};
  background-color: ${props => props.theme.colors.neutral.percent20};

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column;
  }
  
  p.text {
    font-size: ${props => props.theme.typography.body.normal.fontSize};
    font-family: ${props => props.theme.typography.body.normal.fontFamily};
    font-weight: ${props => props.theme.typography.body.normal.fontWeight};
    color: ${props => props.theme.colors.primary.dark};
  }
  @media (max-width: 768px) {
    max-width: none;
    color: red;
  }

  ${props => 
    props.container &&
    css`
      max-width: none;
      width: 90vw;
      display: flex;
      flex-wrap: nowrap;
    `}

  ${props =>
    !props.container &&
    css`
      background-color: ${props => props.theme.colors.neutral.percent00};
    `}
`
