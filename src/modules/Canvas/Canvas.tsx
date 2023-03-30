import React, {useContext} from "react";
import styled from "styled-components";
import {Droppable} from "react-beautiful-dnd";

import {components} from "../data";

import {dataContext} from "../../App";

import sceneryImg from '../../assets/icons/Group-2.svg'

export const Canvas = () => {
    const data = useContext(dataContext)

    return (
        <Droppable droppableId="Canvas">
            {(provided, snapshot) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    $isDraggingOver={snapshot.isDraggingOver}
                >
                    {data.columns.canvas.componentIds.length >= 1 ?
                        data.columns.canvas.componentIds.map((el, index) => {
                            return React.cloneElement(components[el], {index});
                        })
                        :
                        (<Content>
                            <Image src={sceneryImg} alt="scenery"/>
                            <Label>Перетащите сюда</Label>
                            <Text>любой элемент из левой панели</Text>
                        </Content>)
                    }
                    {/*{provided.placeholder}*/}
                </Container>
            )}
        </Droppable>
    )
}

const Container = styled.div<{ $isDraggingOver: boolean }>`
  width: 243px;
  height: 448px;
  border: 2px dashed #C4C4C4;
  border-radius: 6px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: ${({$isDraggingOver}) => ($isDraggingOver ? '#F0F9FF' : 'transparent')};
  flex-direction: column;
  gap: 12px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`

const Image = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 12px;
`

const Label = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #5D5FEF;
  margin-bottom: 4px;
`

const Text = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #6B7280;
  width: 106px;
  text-align: center;
`