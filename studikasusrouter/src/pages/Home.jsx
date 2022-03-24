import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <h1 className="mb-4 text-xl font-semibold">Hello Users</h1>
			<p className="font-light">Choose one of our programs here ...</p>
            <div class="mt-2 p-4 border rounded-xl font-mono text-sm whitespace-pre-wrap">
                <Link
                    to="/program/Kalkulator"
                    className="block mb-2 text-blue-500 hover:text-blue-400"
                >
                    + Kalkulator online
                </Link>
            </div>
        </div>
    );
}

export default Home;