import FieldService from 'src/FieldService';
import Operation, { OperationType, Assessment } from 'src/models/Operation';
const fieldService = new FieldService();
const operations = await fieldService.getOperations();
const firstOperationId = operations[0].id;

const operation = await fieldService.getOperation(firstOperationId);
const newOperation = new Operation({
        id: null,
        type: OperationType.HARVESTING,
        date: { year: 2018, month: 9, day: 25 },
        area: 85.5,
        comment: 'New Test Comment',
        assessment: Assessment.SATISFACTORILY
    });

const savedOperation = await fieldService.saveOperation(newOperation);