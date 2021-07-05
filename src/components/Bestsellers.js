import React from "react";
import {useStaticQuery} from "gatsby";

import CourseBestseller from "./CourseBestseller";

const Bestsellers = () => {
    return (
        <section className="bestsellers">
            <div className="container">
<h1>Nasze najpopularniejsze szkolenia</h1>
                <div className="course">
<CourseBestseller />
                    <CourseBestseller />
                    <CourseBestseller />
                </div>
            </div>
        </section>
    )
};

export default Bestsellers;
