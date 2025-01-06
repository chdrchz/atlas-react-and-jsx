import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div className="app">
      <Header />
      <Section title="What is react?">
        React is a JavaScript library for building user interfaces. It allows
        developers to create reusable components and manage dynamic data
        efficiently.
      </Section>
      <Section title="Benefits of react">
        <ul>
          <li>Component-Based Architecture</li>
          <li>Cross-Platform Development</li>
          <li>Strong Ecosystem and Community Support</li>
          <li>Easy To Scale</li>
          <li>Reusable Code</li>
        </ul>
      </Section>
    </div>
  );
}

export default App;
