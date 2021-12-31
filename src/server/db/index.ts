export interface DB {
    /** @returns A user by `userId` or `null` if not found. */
    getUser(userId: string): Promise<UserItem | null>;

    /** Create or replace user item. */
    putUser(opts: { id: string; email: string }): Promise<void>;

    // TODO other methods...
}

export interface UserItem {
    id: string;
    email: string;

    // TODO other properties...
}
