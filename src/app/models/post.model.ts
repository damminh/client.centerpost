export class Post {
    id: number;
    user_id: number;
    member_id: number;
    domain_id: number;
    requirement_id: number;
    name: string;
    content: string;
    description: string;
    // is_main: 0 - nhap, 1 - duoc post.
    is_main: number;
}