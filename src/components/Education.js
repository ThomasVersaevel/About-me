import React from 'react';
import Article from "./Article";

export default class Education extends React.Component {

    render() {
        return (
            <>
                <div>
                    <h3>Education</h3>
                </div>
                <div>
                    <p>
                        <Article key={0} timespan={"2021 - Present"}
                            title={"Master Computer Science and Engineering"}
                            position={"Eindhoven University of Technology"}
                        />
                    </p>
                    <p>
                        <Article key={0} timespan={"2017 - 2021"}
                            title={"Bachelor Computer Science and Engineering"}
                            position={"Eindhoven University of Technology"}
                        />
                    </p>
                    <p>
                        <Article key={0} timespan={"2011 - 2017"}
                            title={"VWO, Profiel: Natuur en techniek"}
                            position={"Newman College Breda"}
                        />
                    </p>
                </div>
            </>
        );
    }
}