import { MemberJob } from "./member-job.model";

export class Member {
    id: number;
    user_id: number;
    name: string;
    phone: string;
    username: string;
    password: string;
    reset: number;
    number_point: number;
    jobs: MemberJob[];
    jobs_count: number;
    jobs_count_success: number;
    jobs_count_not_save_to_approved: number;
    jobs_count_save_to_not_approved: number;
    jobs_count_not_save_to_not_approved: number;
}