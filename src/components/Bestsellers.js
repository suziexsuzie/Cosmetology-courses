import React from "react";

import CourseBestseller from "./CourseBestseller";

const Bestsellers = () => {
    return (
        <section className="bestsellers">
            <h1>Nasze najpopularniejsze szkolenia</h1>
            <div className="container">

                <div className="content">
                    <CourseBestseller/>
                </div>
            </div>
        </section>
    )
};

export default Bestsellers;
