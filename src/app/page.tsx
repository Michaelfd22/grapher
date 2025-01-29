import Link from "next/link";
import Project1button from "./project1button";
import Project2button from "./project2button";
import Project3button from "./project3button";

export default function HomePage() {
  return (
    <div>
    <p className="text-sl">Your projects</p>
    <div>
      <Project1button></Project1button>
    <div>
      <Project2button></Project2button>
    <div>
      <Project3button></Project3button>
    </div>
    </div>
    </div>
    </div>
  );
}