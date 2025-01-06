import Links from "../assets/links.json";

export default function LinksList() {
  let year = new Date().getFullYear();

  return (
    <footer>
      <ul>
        {Links.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <p>@ {year} Atlas School</p>
    </footer>
  );
}