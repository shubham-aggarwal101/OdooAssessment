import ManageUsers from "./components/ManageUsers";
import RegisterUser from "./components/RegisterUser";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>
        <ManageUsers />
      </div>
      <div style={{ flex: 1 }}>
        <RegisterUser />
      </div>
    </div>
  );
}

export default App;
