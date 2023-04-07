import styled from 'styled-components';
import {useState} from "react";

const StyledTabs = styled.div`
    display: flex;
`
const StyledTab = styled.div`
  color: ${props => props.active ? 'red' : 'black' };
  margin: 5px;
`

export const Tabs = ({tabs, activeTab, onTabChange}) => {
    const [localActiveTab, setLocalActiveTab] = useState(activeTab);


    const handleTabChange = (id) => {
        setLocalActiveTab(id);
        onTabChange(id);
    }
    return <StyledTabs>{tabs.map((tab) => <StyledTab active={localActiveTab === tab.id} onClick={() => handleTabChange(tab.id)} key={tab.id}>{tab.title}</StyledTab>)}</StyledTabs>
}