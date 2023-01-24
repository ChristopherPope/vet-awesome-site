import { UserRole } from "src/app/enums/user-role";

export interface User {
    name: string,
    id: number,
    roleId: number,
    roleIconName: string
}