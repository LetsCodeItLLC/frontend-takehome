import CloseIcon from '../assets/close.svg'
import styled from 'styled-components'

const Instructions: FC = () => {
  return (
    <Wrapper>
      <H2>Directions:</H2>
      <InstructionsList>
        Edit the <Code>&lt;Select/&gt;</Code> component, and save to test HMR
        updates. Good luck!
      </InstructionsList>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  font-size: 16px;
  text-align: left;
  margin-bottom: 32px;
`

const Code = styled.code`
  font-size: 12px;
`

const H2 = styled.h2`
  font-size: 18px;
  margin: 0 0 16px;
`

const InstructionsList = styled.div`

`

export default Instructions
