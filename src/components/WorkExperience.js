import React from 'react';
import Article from "./Article";
import '../bootstrap/css/bootstrap-grid.css';

export default class WorkExperience extends React.Component {

    render() {
        return (
            <>
                <div className="col-md-9">
                    <div>
                        <h3>Work Experience</h3>
                    </div>
                    <div>
                        <p>
                            <Article key={0} timespan={"2023 - Present"}
                                title={"Appsemble Internship"}
                                position={"Software Engineer"}
                            />
                        </p>
                        <p>
                            <Article key={0} timespan={"2021 - Present"}
                                title={"Pathe Eindhoven"}
                                position={"Service Employee"}
                            />
                        </p>
                        <p>
                            <Article key={0} timespan={"2020 - 2021"}
                                title={"Prodrive-Technologies"}
                                position={"Software Engineer"}

                            />
                        </p>
                        <p>
                            <Article key={0} timespan={"2018 - 2020"}
                                title={"PSFM Samsung"}
                                position={"Sales Promotor"}

                            />
                        </p>
                    </div>
                </div>
            </>
        );
    }
}