import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FlightDataInterface } from '@/app/interfaces/FlightData';

interface propsInterface{
    setSelectedEvent: React.Dispatch<React.SetStateAction<FlightDataInterface | null>>;
    flightData: FlightDataInterface[];
}

const FlightDomainTable = (props:propsInterface) => {
    const { setSelectedEvent, flightData } = props
    const [filteredData, setFilteredData] = useState<FlightDataInterface[]>([])

    useEffect(() => {
        setFilteredData(flightData)
    }, [flightData])

    const modifiedData = filteredData.map((data) => {
        return {
            ...data,
            flightType: data.ScheduledFlightLeg[0]?.FlightType
        };
    });

    return (
        <div className="border border-gray-200 rounded-md mt-16 xs:text-sm">
            <DataTable value={modifiedData} globalFilterFields={['flightType', 'FlightNumber']} filterDisplay='row'  paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} emptyMessage="No data found." selectionMode="single" onSelectionChange={(e) => setSelectedEvent(e.value as FlightDataInterface)} dataKey="id" tableStyle={{ minWidth: '65rem' }}>
                <Column header="#" headerStyle={{ width: '3' }} body={(_data, options) => options.rowIndex + 1}></Column>

                <Column field="flightType" header="Flight Type" filter filterPlaceholder="Flight Type" style={{ width: '25%' }} body={(rowData) => rowData.ScheduledFlightLeg[0]?.FlightType} />

                <Column field="FlightNumber" header="Flight Number" filter filterPlaceholder="Flight Number" style={{ width: '25%' }} />
                
                <Column field="FlightOriginLocalDate" header="Flight Origin Local Date" style={{ width: '25%' }}></Column>

                <Column field="CurrentFlightLeg" header="CAT" style={{ width: '11%' }} body={(rowData) => rowData.ScheduledFlightLeg[0]?.CurrentFlightLeg.CurrentArrivalTerminal}></Column>

                <Column field="ScheduledFlightLeg" header="Status" style={{ width: '11%' }} body={(rowData) => rowData.ScheduledFlightLeg[0]?.Status}></Column>
            </DataTable>
        </div>
    );
};

export default FlightDomainTable;