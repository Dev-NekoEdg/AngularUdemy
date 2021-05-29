// creación de usuarios nuevos.
import { CustomClaimModel } from "./custom-claim-model";

export class UserModel {
    public userId: string | null = null;
    public name: string | null = null;
    public lastName: string | null = null;
    public userName: string | null = null;
    public createAt: Date | null = null;
    public roleId: string | null = null;
    public role: string | null = null;
    public active: boolean = false;
    public claims: CustomClaimModel[] = [];
}
