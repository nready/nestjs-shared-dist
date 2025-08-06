export interface User {
    id: string;
    mobile?: string;
    email?: string;
    name?: string;
    groups?: Array<{
        id: string;
        name: string;
        category?: string;
        level?: number;
    }>;
    roles: string[];
    permissions: string[];
    scope?: string[];
}
export interface RequestWithUser extends Request {
    user: User;
}
