const Shimmer = () => {
    return (
        <div className="shimmer-container grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 p-4">
            {Array(8)
                .fill("")
                .map((_, index) => (
                    <div
                        key={index}
                        className="shimmer-card w-[200px] h-[250px] bg-gray-300 rounded-lg overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer" />
                    </div>
                ))}
        </div>
    );
};

export default Shimmer;
