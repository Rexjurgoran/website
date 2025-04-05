import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export enum EventType {
    Education = "education",
    Skill = "skill",
    Position = "position"
}
export interface Event{
    icon: IconDefinition,
    date: Date;
    title: string;
    event: string,
    type: EventType
}