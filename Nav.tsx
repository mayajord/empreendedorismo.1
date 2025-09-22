export const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-pink-600 p-4 text-white">
      <div className="flex justify-end space-x-4">
        <button>Home</button>
        <button>Sobre</button>
        <button>Contato</button>
      </div>
    </nav>
  );
};
