import './history.css';

function History(){
    return(
        <>
        <section>
            <div className="logo">
                <h1>Notifications</h1>
            </div>
            <div className="options"></div>
            <div className="history"><h1>
                History
                </h1>
                <div className="his">
                <div className="title">Good morning</div>
                <button className="del"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  >
                                                    <polyline points="3 6 5 6 21 6" />
                                                    <path d="M19 6L17.5 20a1 1 0 0 1-1 1H7.5a1 1 0 0 1-1-1L5 6" />
                                                    <path d="M10 11v6" />
                                                    <path d="M14 11v6" />
                                                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                                                    </svg></button>
                </div>
                
            </div>
        </section>
        </>
    )
}

export default History;