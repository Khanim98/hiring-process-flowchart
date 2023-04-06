import React, { useState, useEffect } from "react";
import Flowchart from "flowchart-react";
import Modal from 'react-modal';
import "./index.css";
import { setConns, setNodes } from "./features/flowchartSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editedNode, setEditedNode] = useState(null);
  const {conns, nodes} = useSelector(state => state.flowchartData)
  const dispatch = useDispatch();

  const handleDoubleClick = (event, zoom) => {
    const point = {
      x: event.nativeEvent.offsetX / zoom,
      y: event.nativeEvent.offsetY / zoom,
      id: +new Date(),
    };
    let nodeData;
    if (!nodes.find((item) => item.type === "start")) {
      nodeData = {
        type: "start",
        title: "Identify staffing need",
        ...point,
      };
    } else if (!nodes.find((item) => item.type === "end")) {
      nodeData = {
        type: "end",
        title: "End",
        ...point,
      };
    } else {
      nodeData = {
        ...point,
        title: "Enter Your Operation",
        type: "operation",
      };

    }
    dispatch(setNodes([...nodes, nodeData]));
  }

  const customModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <h1>Job Hiring Process Flowchart</h1>
      <Flowchart
        onChange={(nodes, connections) => {
          dispatch(setNodes(nodes));
          dispatch(setConns(connections));
        }}
        style={{ width: 1000, height: 1000, }}
        nodes={nodes}
        connections={conns}
        onDoubleClick={handleDoubleClick}
        onNodeDoubleClick={(node) => {
          setEditedNode(node);
          openModal()
        }}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
      >
        <button onClick={closeModal} className="modalCloseButton">X</button>
        <div className="modalForm">
          <input 
            placeholder="Enter Operation..."
            className="enterNewNodeInput"
            onChange={(e) => setEditedNode(prev => ({...prev, title: e.target.value}))}
          />
          <button 
            onClick={()=>{
              dispatch(setNodes(nodes.map(node => node.id === editedNode.id ? editedNode : node)))
              closeModal();
            }}
            className="addOperation"
          >
            Add Operation
          </button>
        </div>
      </Modal>
    </>
  );
};

export default App;