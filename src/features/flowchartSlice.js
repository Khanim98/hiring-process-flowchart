import { createSlice } from '@reduxjs/toolkit';
import initialState from "../features/initialState";

export const flowchartSlice = createSlice({
  name: 'flowchartData',
  initialState,
  reducers: {
    setNodesAndConnections: (state, action) => {
      state.nodes = action.payload.nodes;
      state.conns = action.payload.conns;
      const data = JSON.stringify({ 
        nodes: action.payload.nodes,
        conns: action.payload.conns, 
      });
      localStorage.setItem("flowchartData", data);
    },
  },
})

export const { setNodesAndConnections } = flowchartSlice.actions;
export default flowchartSlice.reducer;