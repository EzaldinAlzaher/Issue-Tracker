const Footer = () => {
  return (
    <div className="bg-primary text-secondary py-8 rounded-t-lg">
      <div className="container mx-auto text-center">
        <h3 className="text-base md:text-lg">
          &copy; {new Date().getFullYear()} Issue Tracker. All rights reserved.
        </h3>
        <h4 className="mt-4 text-base md:text-lg">
          Developed by Ezaldin Alzaher
        </h4>
        <p className="mt-2 text-sm md:text-base">
          Contact us on LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/ezaldin-alzaher-874787297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-tertiary hover:text-secondary transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ezaldin Alzaher
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
