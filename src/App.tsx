import Instructions from './Instructions'
import Select from './Select'
import styled from 'styled-components'

function App() {
  return (
    <Wrapper>
      <Content>
        <Instructions />
        <Select />
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  background-color: #282c34;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  code: {
    font-family: source-code-pro, monospace,
  }
`

const Content = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 8px;
`

export default App
