import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://img.freepik.com/premium-vector/hanami-japanese-flower-logo-design-cherry-blossom-vector-illustration_691652-143.jpg"
          alt=""
        ></img>
      </header>
      <nav className="nav">
        <div>
          <a href="/"> Profile</a>
        </div>
        <div>
          <a href="/">Messages</a>
        </div>
        <div>
          <a href="/">News</a>
        </div>
        <div>
          <a href="/">Music</a>
        </div>
        <div>
          <a href="/">Settings</a>
        </div>
      </nav>
      <div className="content">
        <img
          src="https://habrastorage.org/getpro/habr/upload_files/8e9/63c/507/8e963c50758de1ed63c11e1e8dcfe916.jpg"
          alt="Япония"
        ></img>
      </div>
    </div>
  );
}

export default App;
