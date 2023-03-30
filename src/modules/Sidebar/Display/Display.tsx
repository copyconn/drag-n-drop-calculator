import React from "react";
import styled from "styled-components";
import {Draggable} from "react-beautiful-dnd";

export const Display = (index: any) => {
    return (
        <Draggable draggableId="display" index={index}>
            {(provided) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <DisplayBox>
                        <Text>0</Text>
                    </DisplayBox>
                </Container>
            )}
        </Draggable>
    )
}

const Container = styled.div`
  width: 240px;
  height: 60px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 4px;
  box-sizing: border-box;
`

const DisplayBox = styled.div`
  padding: 4px 8px;
  //width: 232px;
  //height: 52px;
  background: #F3F4F6;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Text = styled.span`
  width: 26px;
  height: 44px;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 44px;
  color: #111827;
`