const rootElement = document.getElementById("root");
//   const Type = "h1";
//   const props = { className: "greeting", children: "My Name Is Sanjeev!" };
//   const element = React.createElement(Type, props);
const className = "greeting";
const fullName = (user) => user.firstName + " " + user.lastName;
const user = { firstName: "Sanjeev", lastName: "Goud" };
//   const Name = "Sanjeev";
const element = (
  <div>
    <h1 className={className}>Hello World, My name is {fullName(user)}</h1>
    <p className="greetings">Nice To See You</p>
  </div>
);
ReactDOM.render(element, rootElement);
