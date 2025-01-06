import Header from "./components/Header";
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";

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
      <Section title="Helpful resources">
        <HelpfulResource link="https://www.youtube.com/watch?v=SqcY0GlETPk&t=163s" label="React for beginners" />
        <HelpfulResource link="https://react.dev/learn" label="React quick start" />
        <HelpfulResource link="https://dev.to/avinashvagh/react-ecosystem-in-2024-418k" label="React ecosystem" />
      </Section>
    </div>
  );
}

export default App;
