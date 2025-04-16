const Footer = ({ isLoaded }) => {
  if (!isLoaded) {
    return <div className="footer">Powered by NextJs - RF 2025</div>;
  } else {
    return <footer>Powered by NextJs - RF 2025</footer>;
  }
};

export default Footer;
