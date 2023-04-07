import {Tabs} from "./Tabs";
import {useState} from "react";


const tabs = [
    {id: 'all', title: 'All animals'},
    {id: 'cats', title: 'Cats'},
    {id: 'dogs', title: 'Dogs'},
]

export const Main = () => {
    const [activeTab, setActiveTab] = useState('all');
    return <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
}

