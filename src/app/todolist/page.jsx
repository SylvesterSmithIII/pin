import NavBar from "@/components/NavBar";
import TodoForm from "./todoForm";

export default function TodoList() {
  return (
    <main className="">
      <NavBar />
      <div className="mx-auto max-w-[900px]">
        <h1 className="mt-[8px] mb-[9px] ml-[45px] p-[4px] text-[26px] font-semibold">Today</h1>
      </div>
      <div className=" mx-auto  max-w-[900px] h-screen ">
        <TodoForm />
      </div>
    </main>
  );
}
