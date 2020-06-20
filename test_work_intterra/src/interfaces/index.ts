import Operation from "@/models/Operation";

export interface ExtendsOperation extends Operation{
    rawDate: Date,
    stringDate: string,
}