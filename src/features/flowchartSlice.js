import { createSlice } from '@reduxjs/toolkit';
import rawInitialState from "../features/initialState";
import {LOCALSTORAGE_NODES_KEY, LOCALSTORAGE_CONNS_KEY} from "../constants"
import {readFromStorage, saveToStorage} from "../utils/storage"

const initialState = {
  conns: readFromStorage(LOCALSTORAGE_CONNS_KEY) || rawInitialState.conns,
  nodes: readFromStorage(LOCALSTORAGE_NODES_KEY) || rawInitialState.nodes,
}

export const flowchartSlice = createSlice({
  name: 'flowchartData',
  initialState,
  reducers: {
    setNodes: (state, action) => {
      const data = action.payload
      state.nodes = data;
      saveToStorage(LOCALSTORAGE_NODES_KEY, data);
    },
    setConns: (state, action) => {
      const data = action.payload
      state.conns = data;
      saveToStorage(LOCALSTORAGE_CONNS_KEY, data);
    },
  },
})

export const { setNodes, setConns } = flowchartSlice.actions;
export default flowchartSlice.reducer;