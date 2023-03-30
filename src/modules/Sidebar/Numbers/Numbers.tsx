import React from "react";
import styled from "styled-components";
import {Draggable} from "react-beautiful-dnd";

import {Button} from "../Button";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3]

export const Numbers = (index: any) => {
    return (
        <Draggable draggableId="numbers" index={index}>
            {(provided) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    draggable={true}
                >
                    {numbers.map(item => <Button value={item} width='72px'/>)}
                    <Button value={0} width='152px'/>
                    <Button value=',' width='72px'/>
                </Container>
            )}
        </Draggable>
    )
}

const Container = styled.div`
  width: 240px;
  height: 224px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 4px;
  box-sizing: border-box;
`