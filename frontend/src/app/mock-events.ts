import { Event, EventType} from "./event";

export const EVENTS: Event[] = [{
    date: new Date(2023,6),
    title: 'Master degree', 
    event:'Achieved master degree in IT-Management', 
    type: EventType.Education
},{
    date: new Date(2020,9),
    title: 'Bachelor degree', 
    event:'Achieved bachelor degree in Business Informatics', 
    type: EventType.Education
},{
    date: new Date(2018,0),
    title: 'ABAP',
    event: 'Learned ABAP for development in SAP during work.',
    type: EventType.Skill
},{
    date: new Date(2017,10),
    title: 'Dual Student @ HARTING Technology Group',
    event: 'Started working as dual student Business Informatics within HARTING Technology Group. Mainly doing SAP development and PLM configuration.',
    type: EventType.Position
},{
    date: new Date(2017,6),
    title: 'Finished school', 
    event:'Finished school with advanced classes in physics and math', 
    type: EventType.Education
},{
    date: new Date(2013),
    title: 'Java',
    event: 'Learned Java in informatics class during later years of school',
    type: EventType.Skill
}];