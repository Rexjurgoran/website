import { Event, EventType} from "./event";
import { faGraduationCap, faBriefcase, faAward, faCode } from "@fortawesome/free-solid-svg-icons";

export const EVENTS: Event[] = [{
    icon: faAward,
    date: new Date(2026,2),
    title: 'Certified Professional for Software Architecture',
    event: 'Achieved certification in Software Architecture',
    type: EventType.Skill
},{
    icon: faCode,
    date: new Date(2025,12),
    title: 'Voxel Engine',
    event: 'I am building a voxel engine to refine my Rust and Computer Graphics skills.',
    type: EventType.Project
},{
    icon: faAward,
    date: new Date(2025,10),
    title: 'PRINCE2 7 Foundation Certificate',
    event: 'Achieved PRINCE2 7 Foundation Certificate in Project Management',
    type: EventType.Skill
},{
    icon: faCode,
    date: new Date(2024,10),
    title: '"Ray Tracing: The Next Week" in Rust',
    event: 'After adapting the "Ray Tracing in One Weekend" turtorial in November \'24, I started to work on the second volume in the turtorial series. This was also done with the Rust programming language.It further deepend my understanding in Rust programming concepts, Ray Tracing and graphics programming in general.',
    type: EventType.Project
},{
    icon: faCode,
    date: new Date(2024,10),
    title: '"Ray Tracing in One Weekend" using Rust',
    event: 'In this project I followed the well-known turtorial/book "Ray Tracing in One Weekend" by Peter Shirley, Trevor David Black and Steve Hollasch. Instead of C++ I used Rust because of personal preference and to better understand concepts and programming in Rust.',
    type: EventType.Project
},{
    icon: faGraduationCap,
    date: new Date(2023,6),
    title: 'Master degree', 
    event:'Achieved master degree in IT-Management', 
    type: EventType.Education
},{
    icon: faCode,
    date: new Date(2023,6),
    title: 'Personal homepage', 
    event:'I am building my own personal homepage with Angular.', 
    type: EventType.Project
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