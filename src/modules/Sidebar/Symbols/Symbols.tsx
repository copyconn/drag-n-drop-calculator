import React from "react";
import styled from "styled-components";
import {Draggable} from "react-beautiful-dnd";

import {Button} from "../Button";

const symbols = ['/', 'x', '-', '+']

export const Symbols = (index: any) => {
    return (
        <Draggable draggableId="symbols" index={index}>
            {(provided) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    draggable={true}
                >
                    {symbols.map(item => (
                        <Button value={item} width='52px'/>
                    ))}
                </Container>
            )}
        </Draggable>
    )
}

const Container = styled.div`
  width: 240px;
  height: 56px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`