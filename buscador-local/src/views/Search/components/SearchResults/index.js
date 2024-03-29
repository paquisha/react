import SearchresultsItem from "./SearchResultsItems";

export default function SearchResults( { results, isSearching }) {
    return (
        <div style={{
            width: "100%",
            padding: "0rem 2 rem 0rem 2rem"
        }}>
            {!results?.length && isSearching && <p>No existen resultados</p>}
            {results?.map((value) =>{
                return(
                    <SearchresultsItem key={value.id} {...value}/>
                );
            })}
        </div>
    );    
}