import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2">
          <div className="relative w-40 h-40">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <button className="absolute bottom-2 right-2 px-4 py-2 bg-green-500 text-white shadow-lg rounded-lg transition-all duration-300 hover:bg-green-600 hover:scale-105">
              Add +
            </button>
          </div>
          <div className="mt-2">
            <div className="py-2">
              <span className="font-semibold">{item.card.info.name}</span>
              <span className="text-gray-500"> - ₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-xs text-gray-500">{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
