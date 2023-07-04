import { Event, EventType} from "./event";

export const EVENTS: Event[] = [{
    date: '2023',
    name: 'Master degree', 
    description:'Achieved master degree in IT-Management', 
    type: EventType.Education
},{
    date: '2020',
    name: 'Bachelor degree', 
    description:'Achieved bachelor degree in Business Informatics', 
    type: EventType.Education
},{
    date: '2018',
    name: 'ABAP',
    description: 'Learned ABAP for development in SAP during work.',
    type: EventType.Skill
},{
    date: '2017-10',
    name: 'Dual Student @ HARTING Technology Group',
    description: 'Started working as dual student Business Informatics within HARTING Technology Group. Mainly doing SAP development and PLM configuration.',
    type: EventType.Position
},{
    date: '2017-06',
    name: 'Finished school', 
    description:'Finished school with advanced classes in physics and math', 
    type: EventType.Education
},{
    date: '2013',
    name: 'Java',
    description: 'Learned Java in informatics class during later years of school',
    type: EventType.Skill
}];