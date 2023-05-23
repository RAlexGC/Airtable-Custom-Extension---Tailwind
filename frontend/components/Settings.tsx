import { base } from '@airtable/blocks';
import { useGlobalConfig } from '@airtable/blocks/ui';
import React from 'react';
import { Card, Tab, Tabs } from 'react-bootstrap';
import { Sliders } from 'react-bootstrap-icons';
import Header from './Header';

const Settings = () => {
    const globalConfig = useGlobalConfig();

    const tableId = globalConfig.get('selectedTableId') as string;

    const table = base.getTableByIdIfExists(tableId);


    return (
        <>
            <Header title="App Settings" icon={<Sliders color="#FFFFFF" size={20} />} />
            <Tabs defaultActiveKey="about" className="mt-1 mb-0">
                <Tab eventKey="about" title="About" className='bg-white'>
                    <Card className="p-4 h-full">
                        <p>InAir Custom Extension template.</p>
                    </Card>
                </Tab>
                <Tab eventKey="license" title="License">
                    <Card className="p-4 h-full">
                        &copy; {new Date().getFullYear()} InAir Studio
                    </Card>
                </Tab>
            </Tabs>
        </>
    )
}

export default Settings;