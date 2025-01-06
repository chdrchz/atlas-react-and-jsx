import LinkedIn from "../assets/linkedin.svg";
import GitHub from "../assets/github.svg";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://linkedin.com/in/savanna-davis1">
        <img src={LinkedIn} />
      </a>
      <a href="https://github.com/chdrchz/atlas-react-and-jsx">
        <img src={GitHub} />
      </a>
    </div>
  );
}
