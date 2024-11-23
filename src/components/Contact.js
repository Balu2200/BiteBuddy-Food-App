const Contact = () => {
    return (
        <div className="contact bg-gray-50 shadow-md rounded-lg p-6 max-w-md mx-auto mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
                Name: <span className="font-normal">Balu Pasumarthi</span>
            </h2>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
                Location: <span className="font-normal">Visakhapatnam</span>
            </h2>
            <h3 className="text-lg font-bold text-gray-800">
                Mail: 
                <span className="font-normal text-blue-600 underline ml-2">
                    balupasumarthi1@gmail.com
                </span>
            </h3>
        </div>
    );
};

export default Contact;
