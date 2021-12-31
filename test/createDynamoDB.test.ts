import { DynamoDB } from 'aws-sdk';
import { createDynamoDB } from '../src/server/db/createDynamoDB';

const TABLE_NAME = 'petcafe-test-table';
const DYNAMODB_TEST_CONFIG: DynamoDB.ClientConfiguration = {
    credentials: { accessKeyId: 'localhost', secretAccessKey: 'localhost' },
    endpoint: 'http://localhost:8000',
    maxRetries: 0, // disable retries to avoid slowing down tests
    region: 'local',
};

async function recreateTestTable(): Promise<void> {
    const dynamoDBClient = new DynamoDB(DYNAMODB_TEST_CONFIG);
    await dynamoDBClient
        .deleteTable({ TableName: TABLE_NAME })
        .promise()
        .catch(() => null);

    await dynamoDBClient
        .createTable({
            TableName: TABLE_NAME,
            KeySchema: [
                { AttributeName: 'pk', KeyType: 'HASH' },
                { AttributeName: 'sk', KeyType: 'RANGE' },
            ],
            AttributeDefinitions: [
                { AttributeName: 'pk', AttributeType: 'S' },
                { AttributeName: 'sk', AttributeType: 'S' },
            ],
            ProvisionedThroughput: {
                ReadCapacityUnits: 5,
                WriteCapacityUnits: 5,
            },
        })
        .promise();
}

describe('createDynamoDB', () => {
    const dynamoDBClient = new DynamoDB.DocumentClient(DYNAMODB_TEST_CONFIG);
    const db = createDynamoDB(TABLE_NAME, dynamoDBClient);

    beforeEach(() => recreateTestTable());

    describe('getUser', () => {
        it('returns user by user ID', async () => {
            // Create a new user:
            await db.putUser({ id: 'test-user-id', email: 'test-email' });

            const user = await db.getUser('test-user-id');
            expect(user).toEqual({
                id: 'test-user-id',
                email: 'test-email',
            });
        });

        it('returns `null` if user is not found', async () => {
            const user = await db.getUser('nonexistent-user-id');
            expect(user).toBeNull();
        });
    });
});
