const parent = React.createElement("div",{id:"parent"},
   [
        React.createElement("div",{id:"child1"},
            [
                React.createElement("h1",{}, "Welcome to React"),
                React.createElement("p",{}, "The best way to create interactive UIs")
            ]
        ),
        React.createElement("div",{id:"child2"},
            [
                React.createElement("h2",{}, "Components"),
                React.createElement("p",{}, "Build encapsulated components that manage their state.")
            ]
        ),
   ]
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);