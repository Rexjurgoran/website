import { Event, EventType} from "./event";
import { faGraduationCap, faBriefcase, faAward } from "@fortawesome/free-solid-svg-icons";

export const EVENTS: Event[] = [{
    icon: faGraduationCap,
    date: new Date(2023,6),
    title: 'Master degree', 
    event:'Achieved master degree in IT-Management', 
    type: EventType.Education
},{
    icon: faBriefcase,
    date: new Date(2020,9),
    title: 'Application Developer @ HARTING Technology Group',
    event: 'Switched position to fulltime developer within HARTING Technology Group. Started also doing web development.',
    type: EventType.Position
},{
    icon: faGraduationCap,
    date: new Date(2020,9),
    title: 'Bachelor degree', 
    event:'Achieved bachelor degree in Business Informatics', 
    type: EventType.Education
},{
    icon: faAward,
    date: new Date(2018,0),
    title: 'ABAP',
    event: 'Learned ABAP for development in SAP during work.',
    type: EventType.Skill
},{
    icon: faBriefcase,
    date: new Date(2017,10),
    title: 'Dual Student @ HARTING Technology Group',
    event: 'Started working as dual student Business Informatics within HARTING Technology Group. Mainly doing SAP development and PLM configuration.',
    type: EventType.Position
},{
    icon: faGraduationCap,
    date: new Date(2017,6),
    title: 'Finished school', 
    event:'Finished school with advanced classes in physics and math', 
    type: EventType.Education
},{
    icon: faAward,
    date: new Date(2013,7),
    title: 'Java',
    event: 'Learned Java in informatics class during later years of school',
    type: EventType.Skill
}];