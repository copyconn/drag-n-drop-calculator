import React from "react";
import styled from "styled-components";
import {Draggable} from "react-beautiful-dnd";

export const Equals = (index: any) => {
    return (
        <Draggable draggableId="equals" index={index}>
            {(provided) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    draggable={true}
                >
                    <EqualsBox>=</EqualsBox>
                </Container>
            )}
        </Draggable>
    )
}

const Container = styled.div`
  width: 240px;
  height: 72px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const EqualsBox = styled.div`
  width: 232px;
  height: 64px;
  background: #5D5FEF;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
`