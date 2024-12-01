

function pagination(props){
    
    const {prevPage,nextPage,pageNumber}=props;

    return <div className="flex justify-center items-center w-4/6 h-8 bg-gray-300">
        <h1 onClick={prevPage} className="p-10 cursor-pointer">Prev</h1>
        <h1>{pageNumber}</h1>
        <h1 onClick={nextPage} className="p-10 cursor-pointer">Next</h1>
    </div>
}
export default pagination;