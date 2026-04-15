interface SearchFormPopupProps {
    isOpenSearch : boolean,
    setIsOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchFormPopup({isOpenSearch, setIsOpenSearch}: SearchFormPopupProps) {
    return (
        <>
            {/*-- Search Form Overlay --*/}
            <div className={`search-bg-overlay ${isOpenSearch ? 'open' : ''}`} id="searchOverlay"></div>

            <div className={`search-form-popup ${isOpenSearch ? 'open' : ''}`}>
                <h2 className="mb-4 fw-semibold">How may I assist you?</h2>
                <button type="button" className="close-btn" id="searchClose" aria-label="Close" onClick={() => setIsOpenSearch(false)}>
                    <i className="ti ti-x"></i>
                </button>
                {/*-- Search Form --*/}
                <form className="search-form">
                    <input type="search" className="form-control" placeholder="Search..."/>
                    <button type="submit" className="btn btn-success d-none"><i className="ti ti-search"></i></button>
                </form>
            </div>
        </>
    )
}