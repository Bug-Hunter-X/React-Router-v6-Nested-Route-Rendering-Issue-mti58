```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactLayout/>}>
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div> }
function About() { return <div>About</div> }

function ContactLayout() {
  return (
    <div>
      <h1>Contact Us</h1>
      <Outlet/>
    </div>
  );
}

function Support() {
  return (
    <div>
      <h2>Support</h2>
    </div>
  );
}

export default App;
```