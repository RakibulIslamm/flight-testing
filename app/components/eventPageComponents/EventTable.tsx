import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { EventDataInterface } from '../../interfaces/interfaces';
import { data } from '../../data/eventData';


const EventTable = () => {
    const [eventData, setEventData] = useState<EventDataInterface[]>([]);

    useEffect(()=>{
        setEventData(data)
    },[])

    return (
        <div className="border border-gray-200 rounded-md">
            <DataTable value={eventData} globalFilterFields={['task_number']} filterDisplay='row' paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} emptyMessage="No customers found." tableStyle={{ minWidth: '65rem' }} className='xs:text-sm'>
                <Column header="#" headerStyle={{ width: '3%' }} body={(_data, options) => options.rowIndex + 1}></Column>

                <Column field="task_number" header="Task Number" filter filterPlaceholder="Task Number" style={{ width: '30%' }} />

                <Column field="flight_number" header="Flight Number" style={{ width: '25%' }}></Column>
                <Column field="local_dep_date" header="Local Dep. Date" style={{ width: '20%' }}></Column>
                <Column field="event_type" header="Event Type" style={{ width: '11%' }}></Column>
                <Column field="status" header="Status" style={{ width: '11%' }}></Column>
            </DataTable>
        </div>
    );
};

export default EventTable;