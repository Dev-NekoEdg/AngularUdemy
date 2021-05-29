import { RequestClaimModel } from "./request-claim-model";

export class RequestUserModel {
    public name: string | null = null;
    public lastName: string | null = null;
    public userName: string | null = null;
    public password: string | null = null;
    public roleId: string | null = null;
    public active: boolean = false;
    public claims: RequestClaimModel[] = [];
}
