import React, {createContext, useState} from 'react';
import styled from "styled-components";
import {DragDropContext} from 'react-beautiful-dnd';

import {Canvas, Sidebar, Switch} from "./modules";
import {Display} from "./modules/Sidebar/Display";
import {Symbols} from "./modules/Sidebar/Symbols";
import {Numbers} from "./modules/Sidebar/Numbers";
import {Equals} from "./modules/Sidebar/Equals";

// const initialData = {
//     Sidebar: [<Display/>, <Symbols/>, <Numbers/>, <Equals/>],
//     Canvas: [],
// }

const initialData = {
    components: {
        'Display': {id: 'display'},
        'Symbols': {id: 'symbols'},
        'Numbers': {id: 'numbers'},
        'Equals': {id: 'equals'},
    },
    columns: {
        'sidebar': {
            id: 'sidebar',
            componentIds: ['display', 'symbols', 'numbers', 'equals']
        },
        'canvas': {
            id: 'canvas',
            componentIds: []
        },
    }
}

export const dataContext = createContext(initialData)

function App() {

    const [state, setState] = useState(initialData)

    const onDragStart = (start: any) => {
        console.log('drag start')
    }

    const onDragEnd = (result: any) => {
        console.log('drag end')

        const {destination, source, draggableId} = result

        console.log(result)

        const start = state.columns.sidebar  //получаем колонку из стейта
        const finish = state.columns.canvas

        //Moving from one list to another
        const startComponentIds = Array.from(start.componentIds)  //создаем массив старых taskIds
        startComponentIds.splice(source.index, 1)  //remove dragged taskId from start array
        const newStart = {  //create new start column without newStartTaskIds array
            ...start,
            componentIds: startComponentIds,
        }

        const finishComponentsIds: string[] = Array.from(finish.componentIds)  //create new array for the finish taskIds
        finishComponentsIds.splice(destination.index, 1, draggableId)  //insert draggable
        const newFinish = {
            ...finish,
            componentIds: finishComponentsIds
        }

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            }
        }
        console.log(newState)
        setState(newState)
    }

    return (
        <Container>
            <Content>
                <Switch/>
                <DragDropContext
                    onDragEnd={onDragEnd}
                    onDragStart={onDragStart}
                >
                    <Constructor>
                        <dataContext.Provider value={state}>
                            <Sidebar/>
                            <Canvas/>
                        </dataContext.Provider>
                    </Constructor>
                </DragDropContext>
            </Content>
        </Container>
    );
}

export default App;

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  background: #FFFFFF;
  padding: 80px;
`

const Content = styled.div`
  width: 700px;
  height: 640px;
  margin: 0 auto;
  padding: 38px 80px 86px 76px;
  box-sizing: border-box;
`

const Constructor = styled.div`
  display: flex;
  gap: 56px;
`
