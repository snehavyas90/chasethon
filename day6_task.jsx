function ProfileCard(props) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "12px",
      padding: "20px",
      width: "250px",
      textAlign: "center",
      boxShadow: "0px 2px 6px rgba(0,0,0,0.1)"
    }}>
      <img 
        src={props.image} 
        alt="profile" 
        style={{ width: "100px", borderRadius: "50%" }} 
      />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <ProfileCard 
        name="Harshita" 
        bio="CSE Student | Building Self-Study Tracker 🚀" 
        image="https://via.placeholder.com/100" 
      />
    </div>
  );
}

export default App;
