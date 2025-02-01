export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white">Issue Tracker</h1>
        <div className="space-x-4">
          <button className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Login
          </button>
          <button className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Register
          </button>
          <button className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
