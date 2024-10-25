import { FcTodoList } from "react-icons/fc";
import SearchTask from "../tasks/SearchTask";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50">
      <div className=" space-y-8 md:space-y-0  md:flex md:items-center md:justify-between px-8 py-8 shadow-lg ">
        <div>
          <a href="#" className="flex items-center space-x-4 text-4xl">
            <FcTodoList />
            <span>Task Manager</span>
          </a>
        </div>
        <div>
          <SearchTask />
        </div>
      </div>
    </header>
  );
};

export default Header;
