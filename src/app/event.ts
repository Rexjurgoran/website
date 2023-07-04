export enum EventType {
    Education = "education",
    Skill = "skill",
    Position = "position"
}
export interface Event{
    date: string;
    name: string;
    description: string,
    type: EventType
}