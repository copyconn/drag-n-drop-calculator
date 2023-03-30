import React, {useState} from "react";
import styled from "styled-components";

import eyeImg from '../../assets/icons/eye.svg'
import vectorImg from '../../assets/icons/Vector.svg'

export const Switch = () => {
    const [toggle, setToggle] = useState(false)

    const switchToggle = () => {
        setToggle(!toggle)
    }

    return (
        <Container>
            <SwitchBox>
                <Runtime onClick={switchToggle} $toggle={toggle}>
                    <Eye $toggle={toggle} src={eyeImg} alt="eye"/>
                    <Text>Runtime</Text>
                </Runtime>

                <Constructor onClick={switchToggle} $toggle={toggle}>
                    <Vector $toggle={toggle} src={vectorImg} alt="vector"/>
                    <Text>Constructor</Text>
                </Constructor>
            </SwitchBox>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 39px;
  
  &:hover {
    cursor: pointer;
  }
`

const SwitchBox = styled.div`
  height: 38px;
  width: 243px;
  background: #F3F4F6;
  border-radius: 6px;
  padding: 1px;
  display: flex;
`

const Runtime = styled.div<{ $toggle: boolean }>`
  width: 108px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: ${({$toggle}) => ($toggle ? '#FFFFFF' : 'transparent')};
  border: ${({$toggle}) => ($toggle ? '1px solid #E2E3E5' : '1px solid transparent')};
`

const Constructor = styled.div<{ $toggle: boolean }>`
  width: 133px;
  background: ${({$toggle}) => ($toggle ? 'transparent' : '#FFFFFF')};
  border: ${({$toggle}) => ($toggle ? '1px solid transparent' : '1px solid #E2E3E5')};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const Eye = styled.img<{ $toggle: boolean }>`
  width: 20px;
  height: 20px;
  filter: ${({$toggle}) => ($toggle ? 'invert(32%) sepia(80%) saturate(2887%) hue-rotate(230deg) brightness(99%) contrast(90%)' : '')};
`

const Vector = styled.img<{ $toggle: boolean }>`
  width: 20px;
  height: 20px;
  filter: ${({$toggle}) => ($toggle ? '' : 'invert(32%) sepia(80%) saturate(2887%) hue-rotate(230deg) brightness(99%) contrast(90%)')};
`

const Text = styled.span`
  color: #4D5562;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
`