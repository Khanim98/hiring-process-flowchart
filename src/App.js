import React, { useState, useEffect } from "react";
import Flowchart from "flowchart-react";
import Modal from 'react-modal';
import "./index.css";
import { setNodesAndConnections  } from "./features/flowchartSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [nodes, setNodes] = useState([]);
  const [conns, setConns] = useState([]);
  const [editedNode, setEditedNode] = useState(null);
  const [hasLoadedData, setHasLoadedData] = useState(false); 
  const initialNodes = useSelector(state => state.flowchartData.nodes)
  const initialConns = useSelector(state => state.flowchartData.conns)

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
    setNodes((prevState) => [...prevState, nodeData]);
  }

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("flowchartData"));
    if (savedData) {
      setNodes(savedData.nodes);
      setConns(savedData.conns);
    }else {
      setNodes(initialNodes)
      setConns(initialConns)
    }
    setHasLoadedData(true)
  }, []);

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
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!hasLoadedData) return;
    dispatch(setNodesAndConnections({nodes, conns}))
  }, [nodes, conns]);

  return (
    <>
      <h1>Job Hiring Process Flowchart</h1>
      <Flowchart
        onChange={(nodes, connections) => {
          setNodes(nodes);
          setConns(connections);
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
              setNodes(nodes => {
                return nodes.map(node => node.id === editedNode.id ? editedNode : node);
              })
              closeModal();
              console.log("from click", nodes)
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