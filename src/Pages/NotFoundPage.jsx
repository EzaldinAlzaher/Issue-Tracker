import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 md:p-8 lg:p-12 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-tertiary mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to={-1}
          className="bg-primary text-secondary py-2 px-4 rounded hover:bg-secondary hover:text-primary transition-colors duration-300"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
