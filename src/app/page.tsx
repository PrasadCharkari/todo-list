
import Navbar from "@/components/navbar";
import "./globals.css";
import { RiTodoLine } from "react-icons/ri";
import AddTodo from "@/components/add-todo";
import { Todos } from "@/components/todos";

const Page = () => {
    return (
      <main>
          <h2><RiTodoLine className="icons" /> THINGS TO DO <RiTodoLine className="icons" /> </h2>
          <Navbar  />
          <AddTodo />
          <Todos />
      </main>
    );
};

export default Page;