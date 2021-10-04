import React, { FC, useState } from 'react'

import styled from 'styled-components'

const Select: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <Wrapper>
      <Code>inputValue: "{inputValue}"</Code>
      <SelectControl>
        <TextInput type="text" onChange={handleChange} value={inputValue} placeholder="Select..." />
      </SelectControl>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: left;
`

const Code = styled.code`
  display: block;
  margin-bottom: 6px;
  font-size: 12px;  
`

const SelectControl = styled.div`
  max-width: 680px;
  width: 100%;
`

const TextInput = styled.input`
  line-height: 26px;
`

export default Select

