const PaginationComponent = () => {
    return (
        <>
            <section className="pagination">
                <button className="prev-btn">Prev</button>
                <ul className="page-list">
                    <li className="page-item">
                        <a href="" className="page-link">
                            1
                        </a>
                    </li>
                    <li className="page-item">
                        <a href="" className="page-link">
                            2
                        </a>
                    </li>
                    <li className="page-item">
                        <a href="" className="page-link">
                            3
                        </a>
                    </li>
                    <li className="page-item">
                        <a href="" className="page-link">
                            4
                        </a>
                    </li>
                    <li className="page-item">
                        <a href="" className="page-link">
                            5
                        </a>
                    </li>
                </ul>
                <button className="next-btn">Next</button>
            </section>

        </>
    )
}

export default PaginationComponent