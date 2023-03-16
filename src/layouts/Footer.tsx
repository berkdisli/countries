import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const creatorLinks = [
    {
      name: "Berk Disli",
      link: "https://github.com/berkdisli",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-left flex-centered">
        <Link to="/">
          <FaHome className="icon" />
        </Link>
      </div>
      <div className="footer-center flex-centered">
        Created by:{" "}
        {creatorLinks.map((creator) => (
          <a
            href={creator.link}
            key={creator.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {creator.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
