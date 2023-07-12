'use client'
import { useState } from "react";
import useEnv from "../context/useEnv";
import { EventDataInterface } from "../interfaces/interfaces";
import SearchingForms from "../components/FlightDomainPageComponents/SearchingForms";
import FlightDomainTable from "../components/FlightDomainPageComponents/FlightDomainTable";
import ViewJson from "../components/FlightDomainPageComponents/ViewJson";
import { FlightDataInterface } from "../interfaces/FlightData";
import Login from "../components/Login/Login";
import useAuth from "../context/useAuth";
import Loading from "../components/shared/Loading";

const FlightDomain = () => {
    const { selectedEnv } = useEnv()
    const [flightData, setFlightData] = useState<FlightDataInterface[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<FlightDataInterface | null>(null);

    const { isAuthenticated, login, authLoading } = useAuth();

    if (authLoading) {
        return <Loading />
    }

    return (
        <>
            {isAuthenticated?.expireAt && (isAuthenticated?.isLogin && Date.now() < isAuthenticated.expireAt) ?
                <div className="p-10 min-h-screen md:px-6 sm:px-5 xs:px-3">
                    <h4 className="text-center text-xl font-medium mb-5">
                        Current: {selectedEnv?.title}
                    </h4>
                    <SearchingForms setFlightData={setFlightData} />
                    <FlightDomainTable
                        setSelectedEvent={setSelectedEvent}
                        flightData={flightData}
                    />
                    <ViewJson code={selectedEvent} />
                </div> :
                <Login login={login} isAuthenticated={isAuthenticated} />
            }
        </>
    );
};

export default FlightDomain;
