import { GenderService } from "../services/gender.service";
import { GenderDto } from "../dtos/gender.dto";
export declare class GenderController {
    private readonly genderService;
    constructor(genderService: GenderService);
    createGrades(payload: GenderDto, req: any): Promise<{
        data: import("..").GenderEntity;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
    getGender(): Promise<{
        data: import("..").GenderEntity[];
        message: string;
    }>;
    getGenderById(id: number): Promise<{
        data: import("..").GenderEntity;
        message: string;
    }>;
    updateGender(id: number, payload: GenderDto, req: any): Promise<{
        data: import("..").GenderEntity;
    } | {
        message: string;
        statusCode: number;
    }>;
    deleteGender(id: number, req: any): Promise<{
        message: string;
        statusCode: number;
        data?: undefined;
    } | {
        data: import("..").GenderEntity;
        message: string;
        statusCode?: undefined;
    }>;
}
