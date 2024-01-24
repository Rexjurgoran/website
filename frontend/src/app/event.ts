export enum EventType {
    Education = "education",
    Skill = "skill",
    Position = "position"
}
export interface Event{
    date: Date;
    title: string;
    event: string,
    type: EventType
}