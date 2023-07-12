'use client'
import { useEffect, useState, useRef } from "react";
import useEnv from "./context/useEnv";
import { ButtonFormDataInterface } from "./interfaces/ButtonFormDataInterface";
import { buttonAndFormData } from "./data/buttonAndFormData";
import EventButton from "./components/eventPageComponents/EventButton";
import EventForm from "./components/eventPageComponents/EventForm";
import EventTable from "./components/eventPageComponents/EventTable";
import useAuth from "./context/useAuth";
import Login from "./components/Login/Login";
import Loading from "./components/shared/Loading";

const Home = () => {
  const { selectedEnv } = useEnv()
  const [btnFormData, _setBtnFormData] = useState<ButtonFormDataInterface[]>(buttonAndFormData);

  const [eventData, setEventData] = useState<ButtonFormDataInterface | null>(null)
  const formRef = useRef<HTMLFormElement>(null);

  const {isAuthenticated, login, authLoading} = useAuth();
  

  useEffect(() => {
    setEventData(null)
  }, [selectedEnv])

  if(authLoading){
    return <Loading/>
  }

  return (
    <>
      {isAuthenticated?.expireAt && (isAuthenticated?.isLogin && Date.now() < isAuthenticated.expireAt) ?
        <div className="p-10 md:px-6 sm:px-5 xs:px-3">
          <h4 className="text-center text-xl font-medium">Current ENV: {selectedEnv?.title}</h4>
          <div className="my-6 grid grid-cols-5 gap-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
            {selectedEnv?.title === 'QA(UAT)' &&
              btnFormData.map(item => <EventButton key={item.id} data={item} setEventData={setEventData} formRef={formRef} />)
            }
            {selectedEnv?.title === 'SG' &&
              btnFormData.map(item => <EventButton key={item.id} data={item} setEventData={setEventData} formRef={formRef} />)
            }

          </div>

          {eventData && <h4 className="text-xl font-medium mt-8">{eventData?.eventTitle} Event</h4>}
          {eventData && <EventForm env={selectedEnv} eventData={eventData} formRef={formRef} />}
          <br />
          <EventTable />
        </div> :
        <Login login={login} isAuthenticated={isAuthenticated} />
      }
    </>
  );
};

export default Home;