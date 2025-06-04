import React from 'react';
import {HeroChiSiamo} from "./components/HeroChiSiamo";
import DiconoDiNoi from "@shared/DiconoDiNoi";
import Convenzioni from "@shared/Convenzioni";
/* import {LeNostreConvenzioni} from "../home/components/LeNostreConvenzioni"; */

interface VisionProps {
}

const Vision: React.FC<VisionProps> = () => {
 
    return(
        <>
            <HeroChiSiamo/>
            <DiconoDiNoi/>
            <Convenzioni/>
        </>

    )

}
export default Vision