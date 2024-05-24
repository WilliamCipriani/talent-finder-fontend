export default function SearchJob() {
    return  (
      <div className="flex flex-col items-center my-10 py-2">
        <div className="bg-gray-300 p-4 rounded-xl shadow-lg w-3/4 max-w-4xl">
          <h1 className="font-bold text-lg mb-4">Buscar el trabajo</h1>
          <form className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Encuentra el trabajo, título, keyword"
              className="flex-1 p-2 border border-gray-300 rounded"
            />
            <select className="p-2 border border-gray-300 rounded">
              <option>Full time</option>
              <option>Part time</option>
              <option>Internship</option>
            </select>
            <button type="submit" className="bg-gray-800 text-white p-2 rounded">
              Buscar
            </button>
          </form>
        </div>
      </div>
    )
}