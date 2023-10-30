import React from "react";
import Recruit from "./Recruit";
import Candidates from "./Candidates";
import FooterComponent from "../Footer";


function MainPage() {
    return (
        <div >
            <Recruit style={{ height: "80vh" }} />
            <Candidates style={{ height: "auto" }} />

            <div>
                <FooterComponent />
            </div>
        </div>
    )
}
export default MainPage