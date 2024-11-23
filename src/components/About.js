import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">About</h1>
            <h2 className="text-2xl text-gray-800 mb-6">This is about my React Food app</h2>
            <h3 className="text-xl text-gray-700 mb-4">Creator profile</h3>

            <div className="bg-white p-4 rounded-xl shadow-lg w-[300px] max-w-full mb-6">
                <User userID="Balu2200" />
            </div>
        </div>
    );
};

export default About;
