import React from "react";

import CourseBestseller from "./CourseBestseller";

const Bestsellers = () => {
    return (
        <section className="bestsellers">
            <div className="container">
                <h1>Nasze najpopularniejsze szkolenia</h1>
                <div className="courses">
                    <CourseBestseller/>
                </div>
            </div>
        </section>
    )
};

export default Bestsellers;
