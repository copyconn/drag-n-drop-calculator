import React, {useContext} from "react";
import styled from "styled-components";
import {Droppable} from "react-beautiful-dnd";

import {components} from "../data";

import {dataContext} from "../../App";

export const Sidebar = () => {
    const data = useContext(dataContext)

    return (
        <Droppable droppableId="Sidebar">
            {(provided) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {data.columns.sidebar.componentIds.map((el, index) => {
                        return React.cloneElement(components[el], {index});
                    })}
                    {provided.placeholder}
                </Container>
            )}
        </Droppable>
    )
}

const Container = styled.div`
  width: 243px;
  height: 448px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`