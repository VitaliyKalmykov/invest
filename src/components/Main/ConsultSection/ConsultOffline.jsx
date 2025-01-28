import React from 'react';
import ConsultOfflineCarousel from "./ConsultOfflineCarousel";
import ConsultOfflineInfo from "./ConsultOfflineInfo";

const ConsultOffline = () => {


    return (
        <div>
            <h1 className="text-center font-bold text-2xl">Become our guest today!</h1>
            <h2 className="text-center pt-2 pb-2 font-medium">Visit our office in Washington</h2>
            <ConsultOfflineInfo/>
            <ConsultOfflineCarousel/>
        </div>
    );
};

export default ConsultOffline;