import Open from "../assets/open.svg";

export default function OpenLink({ link }) {
  return (
    <a href={link} target="_blank">
      <img src={Open} />
    </a>
  );
}
