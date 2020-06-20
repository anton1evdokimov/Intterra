import { Assessment } from 'src/models/Operation';

export interface OperationRow {
    assessmentString: string,
    assessment: Assessment,
    culture: string,
    completed: boolean
    rawDate: Date,
    stringDate: string,
    type: string    
}