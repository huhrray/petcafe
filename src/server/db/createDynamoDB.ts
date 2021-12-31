import type { DynamoDB } from 'aws-sdk';
import type { DB } from '.';

export function createDynamoDB(
    tableName: string,
    dynamoDBClient: DynamoDB.DocumentClient
): DB {
    return {
        getUser: async (userId) => {
            const { Item } = await dynamoDBClient
                .get({
                    Key: { pk: userId, sk: '0' },
                    TableName: tableName,
                })
                .promise();

            if (!Item) {
                return null;
            }

            return { id: Item.pk, email: Item.email };
        },

        putUser: async (opts) => {
            await dynamoDBClient
                .put({
                    TableName: tableName,
                    Item: {
                        pk: opts.id,
                        sk: '0',
                        email: opts.email,
                    },
                })
                .promise();
        },
    };
}
