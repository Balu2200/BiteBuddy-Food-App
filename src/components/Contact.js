import React from "react";

const Contact = () => {
    // Contact component to display user details and a form to submit messages.
    return (
        <div className="contact bg-gray-50 shadow-md rounded-lg p-6 max-w-md mx-auto mt-8">
            {/* Display user information */}
            <h2 className="text-xl font-bold text-gray-800 mb-2">
                Name: <span className="font-normal">Balu Pasumarthi</span>
            </h2>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
                Location: <span className="font-normal">Visakhapatnam</span>
            </h2>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
                Mail: 
                <span className="font-normal text-blue-600 underline ml-2">
                    balupasumarthi1@gmail.com
                </span>
            </h3>

            {/* Form for submitting messages */}
            <form className="mt-4">
                <label htmlFor="message" className="block text-gray-800 font-bold mb-2">
                    Your Message:
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Write your message here..."
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
                <button
                    type="submit"
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;

