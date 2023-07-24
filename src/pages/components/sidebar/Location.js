
function Location({locationQuery, handleLocationChange }) {


  return (
    <div className="flex flex-col w-[90%] ">
      <input type="text" name="location" id="location" 
        value={locationQuery}
        onChange={handleLocationChange}
        placeholder='Search By Location...'
        className="dark:bg-white rounded-full pl-4 p-3"
      />
    </div>
  );
}

export default Location;