import React from "react";
import {
    DataSourcesCard, 
    EditButton,
    DeleteButton,
    TextHeader,
    UList,
    Logo,
    } from './DataSources.style';
import { IconWindowCogs } from '../../../assets/images/icons/IconWindowCogs.svg';


function DataSourcesCard(){ 
    <Logo src={IconWindowCogs} alt="Logo" />
    <EditButton>Edit</EditButton> <br />
    <DeleteButton>Delete</DeleteButton> <br />
    <TextHeader>{card.json.datasourceType}</TextHeader>
    <UList>



<List>{Object.keys(card.json)}: <Span>{card.json.command}</Span></List>
              <List>Datasource Type: <Span>{card.json.datasourceType}</Span></List>
              <List>Host: <Span>{card.json.host}</Span></List>
              <List>ID: <Span>{card.json.id}</Span></List>
              <List>Password: <Span>{card.json.password}</Span></List>
              <List>Port: <Span>{card.json.port}</Span></List>
              <List>SQLDatabase: <Span>{card.json.sqlDatabaseType}</Span></List>
              <List>User: <Span>{card.json.user}</Span></List>      
    </UList>
}

export default DataSourcesCard