import Link from "next/link";
import Project1button from "./project1button";
import MyButton from "./MyButton";

export default function HomePage() {
  return (
    <div>
    <p className="text-sl">Your projects</p>
    <div>
      <Project1button></Project1button>
    </div>
    </div>
    <div>
      <div>
        <p>Your Projects</p>
      </div>
      <MyButton></MyButton>
    </div>
  );
}