import Link from "next/link";

const Homebutton: React.FC = () => {
    return (
        <Link href = "/">
            <button>Home</button>
        </Link>
    );
};

export default Homebutton;
