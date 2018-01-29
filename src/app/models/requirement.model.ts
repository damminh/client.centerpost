export class Requirement {
    id: number;
    user_id: number;
    member_id: number;
    domain_id: number;
    name: string;
    start_date: string;
    end_date: string;
    // type: 0 - khong lap ; 1 - lap
    type: number;
    // nullalbe() - ngay
    time_repeat: number;
    priority: number;
    description: string;
}