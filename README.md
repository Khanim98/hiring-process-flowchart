# Project Title: Job Hiring Process Flowchart

## Project Description

Welcome to our job hiring process flowchart! We've designed this flowchart to help you visualize our hiring process and understand the different steps involved.

We understand that every company's hiring process is unique, so we've made this flowchart customizable to meet your needs. You can easily add, delete, or edit nodes to reflect your company's hiring process.

And to make it even more convenient, we've added a feature that automatically saves your changes to localStorage. This means that even if you refresh the page or come back to it later, your customized flowchart will be exactly the same as you left it.
We hope that you find this flowchart helpful in understanding our hiring process.

## Instalation

 ### Clone the repository:

git clone https://github.com/Khanim98/hiring-process-flowchart.git

Install dependencies:

npm install

### Start the server:

npm start

### Navigate to http://localhost:3000 in your web browser.

## Usage:

You can move nodes in any order you want, simply by clicking and dragging them to the desired location. And if you want to reorganize the connections between nodes, you can do so by dragging from the edges of one node to the edges of another.

Creating new nodes is easy too - just double-click on the screen and a new node will be created with default text. To edit the text of a node, double-click on the node to open a modal window, where you can edit the text and save it by clicking "Add Operation". Your changes will be reflected in the node's text immediately.

And to make things even more convenient, we've added a feature that automatically saves your changes to localStorage. So if you refresh the page or come back to it later, your customized flowchart will be exactly as you left it, with all your changes and node positions preserved.


## Code explanation: 

In my code, I leveraged the power of the "flowchart-react" library to create an interactive and customizable flowchart tool. To enable users to add new nodes to the flowchart, I utilized the onDoubleClick function, which listens for a double-click event on the chart area and creates a new node.

To ensure that all user data is saved and can be retrieved across different sessions, I implemented a storage solution using both the Redux Toolkit store and the localStorage API. Whenever a new node is created or a node's text is edited, I update the state using the setNodes function and dispatch an action to update the Redux store. I also call the localStorage.setItem function to store the updated node data in the browser's localStorage.

To retrieve the stored data when the user returns to the flowchart, I used the useEffect hook to fetch the data from the localStorage and update the state accordingly. This allows the user to resume where they left off, with all their changes and additions intact.

When a user wants to edit a node's text, they simply double-click on the node, which triggers the onNodeDoubleClick function. This function retrieves the node that was clicked on and sets it to the editedNode state, which opens a modal window for editing the node's text. Upon clicking the "Add Operation" button, the editedNode state is mapped over the nodes array, so that the node with the matching id is updated with the new text, while all other nodes remain the same.

Overall, I aimed to create a seamless and intuitive user experience with my flowchart tool, making it easy for users to customize their charts, save their progress, and pick up right where they left off.
