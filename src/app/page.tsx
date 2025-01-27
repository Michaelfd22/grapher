import Link from "next/link";
import Project1button from "./project1button";

export default function HomePage() {
  return (
    <div>
    <p className="text-sl">Your projects</p>
    <div>
      <Project1button></Project1button>
    </div>
    </div>
  );
}