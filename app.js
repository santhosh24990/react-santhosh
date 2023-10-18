const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am a h1 tag"),
    React.createElement("h2", {}, "i am a h2 tag"),
  ]),React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "i am a h3 tag"),
    React.createElement("h4", {}, "i am a h4 tag"),
  ])]
);

console.log(parent); // object or react element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // converts the object to h1 element so browser can understand

// React.createElement(htmlelement,props,children)
// it becomes difficult to use react.createelement so we use jsx
//root.render will replace everything in root div