export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-black text-white">
      <h1 className="text-xl font-bold">SmartDocQ</h1>
      <ul className="flex gap-6">
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Docs</a></li>
        <li><a href="#">Login</a></li>
      </ul>
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-transparent border border-gray-400 rounded">Login</button>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">Sign Up</button>
      </div>
    </nav>
  );
}