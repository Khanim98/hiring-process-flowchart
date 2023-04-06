const initialState = {
  nodes: [
    {
      type: "start",
      title: "Identify staffing need",
      x: 30,
      y: 20,
      id: 1,
    },
    {
      x: 30,
      y: 100,
      id: 2,
      title: "Write up job description",
      type: "operation",
    },
    {
      x: 30,
      y: 180,
      id: 3,
      title: "Send personal request form to HR",
      type: "operation",
    },
    {
      x: 30,
      y: 270,
      id: 4,
      title: "Determine classification",
      type: "operation",
    },
    {
      x: 30,
      y: 360,
      id: 5,
      title: "Regular Hire",
      type: "decision",
    },
    {
      type: "end",
      title: "End",
      x: 30,
      y: 450,
      id: 6,
    },
    {
      x: 200,
      y: 20,
      id: 7,
      title: "Post job internally",
      type: "operation",
    },
    {
      x: 200,
      y: 100,
      id: 8,
      title: "Suitable candidate",
      type: "decision",
    },
    {
      x: 200,
      y: 180,
      id: 9,
      title: "Examine resume on file",
      type: "operation",
    },
    {
      x: 200,
      y: 270,
      id: 10,
      title: "Suitable candidate",
      type: "decision",
    },
    {
      x: 200,
      y: 360,
      id: 11,
      title: "Develop recuriment strategy",
      type: "operation",
    },
    {
      x: 200,
      y: 450,
      id: 12,
      title: "Place adds",
      type: "operation",
    },
    {
      x: 200,
      y: 540,
      id: 13,
      title: "Gather resumes",
      type: "operation",
    },
    {
      x: 200,
      y: 630,
      id: 14,
      title: "Resume qualified",
      type: "decision",
    },
    {
      x: 400,
      y: 100,
      id: 15,
      title: "Arrange meeting with candidate",
      type: "operation",
    },
    {
      x: 400,
      y: 180,
      id: 16,
      title: "Conduct preliminary interview",
      type: "operation",
    },
    {
      x: 400,
      y: 270,
      id: 17,
      title: "Develop interview questions",
      type: "operation",
    },
    {
      x: 400,
      y: 360,
      id: 18,
      title: "Conduct interview",
      type: "operation",
    },
    {
      x: 400,
      y: 450,
      id: 19,
      title: "Refference ok",
      type: "decision",
    },
    {
      x: 600,
      y: 360,
      id: 20,
      title: "Select candidate",
      type: "operation",
    },
    {
      x: 600,
      y: 450,
      id: 21,
      title: "Determine pat range",
      type: "operation",
    },
    {
      x: 600,
      y: 540,
      id: 22,
      title: "Make employment",
      type: "operation",
    },
    {
      x: 600,
      y: 630,
      id: 23,
      title: "Candidate accepts",
      type: "decision",
    },
    {
      x: 600,
      y: 750,
      id: 24,
      title: "Hire candidate",
      type: "end",
    },

  ],
  conns: [
    {
      source: { id: 1, position: "bottom" },
      destination: { id: 2, position: "top" },
      type: "success",
    },
    {
      source: { id: 2, position: "bottom" },
      destination: { id: 3, position: "top" },
      type: "success",
    },
    {
      source: { id: 3, position: "bottom" },
      destination: { id: 4, position: "top" },
      type: "success",
    },
    {
      source: { id: 4, position: "bottom" },
      destination: { id: 5, position: "top" },
      type: "success",
    },
    {
      source: { id: 5, position: "bottom" },
      destination: { id: 6, position: "top" },
      type: "fail",
      title: "No"
    },
    {
      source: { id: 5, position: "right" },
      destination: { id: 7, position: "left" },
      type: "success",
      title: "Yes"
    },
    {
      source: { id: 7, position: "bottom" },
      destination: { id: 8, position: "top" },
      type: "success",
    },
    {
      source: { id: 8, position: "bottom" },
      destination: { id: 9, position: "top" },
      type: "fail",
      title: "No"
    },
    {
      source: { id: 9, position: "bottom" },
      destination: { id: 10, position: "top" },
      type: "success",
    },
    {
      source: { id: 10, position: "bottom" },
      destination: { id: 11, position: "top" },
      type: "fail",
      title: "No"
    },
    {
      source: { id: 11, position: "bottom" },
      destination: { id: 12, position: "top" },
      type: "success",
    },
    {
      source: { id: 12, position: "bottom" },
      destination: { id: 13, position: "top" },
      type: "success",
    },
    {
      source: { id: 13, position: "bottom" },
      destination: { id: 14, position: "top" },
      type: "success",
    },
    {
      source: { id: 8, position: "right" },
      destination: { id: 15, position: "left" },
      type: "success",
      title: "Yes"
    },
    {
      source: { id: 10, position: "right" },
      destination: { id: 15, position: "left" },
      type: "success",
      title: "Yes"
    },
    {
      source: { id: 14, position: "right" },
      destination: { id: 15, position: "left" },
      type: "success",
      title: "Yes"
    },
    {
      source: { id: 15, position: "bottom" },
      destination: { id: 16, position: "top" },
      type: "success",
    },
    {
      source: { id: 16, position: "bottom" },
      destination: { id: 17, position: "top" },
      type: "success",
    },
    {
      source: { id: 17, position: "bottom" },
      destination: { id: 18, position: "top" },
      type: "success",
    },
    {
      source: { id: 18, position: "bottom" },
      destination: { id: 19, position: "top" },
      type: "success",
    },
    {
      source: { id: 19, position: "right" },
      destination: { id: 20, position: "left" },
      type: "success",
      title: "Yes"
    },
    {
      source: { id: 20, position: "bottom" },
      destination: { id: 21, position: "top" },
      type: "success",
    },
    {
      source: { id: 21, position: "bottom" },
      destination: { id: 22, position: "top" },
      type: "success",
    },
    {
      source: { id: 22, position: "bottom" },
      destination: { id: 23, position: "top" },
      type: "success",
    },
    {
      source: { id: 23, position: "bottom" },
      destination: { id: 24, position: "top" },
      type: "success",
      title: "Yes"
    },
    {
      source: { id: 14, position: "bottom" },
      destination: { id: 13, position: "left" },
      type: "fail",
      title: "No"
    },
    {
      source: { id: 19, position: "bottom" },
      destination: { id: 13, position: "right" },
      type: "fail",
      title: "No"
    },
    {
      source: { id: 23, position: "left" },
      destination: { id: 13, position: "right" },
      type: "fail",
      title: "No"
    },
    
  ],
};
  export default initialState;
  