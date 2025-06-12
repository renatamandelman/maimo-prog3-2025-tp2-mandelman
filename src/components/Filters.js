const Filters = ({ filters }) => {
    return (
        filters.map(filter => (
            <>
            <div> 
            <button type="button" className="btn btn-primary " >{filter}</button>
               </div>
            </>
        ))
    )
};

export default Filters