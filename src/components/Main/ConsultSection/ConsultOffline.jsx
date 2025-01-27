import React from 'react';
import ConsultOfflineCarousel from "./ConsultOfflineCarousel";
import ConsultOfflineInfo from "./ConsultOfflineInfo";

const ConsultOffline = () => {


    return (
        <div>
            <h2 className="text-center pt-6 pb-6 font-medium">Visit our office in Washington</h2>
            <ConsultOfflineInfo/>
            <ConsultOfflineCarousel/>
        </div>
    );
};

export default ConsultOffline;