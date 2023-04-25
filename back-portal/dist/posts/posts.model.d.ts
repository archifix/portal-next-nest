import { Model } from "sequelize-typescript";
import { User } from "src/users/users.model";
export declare class Post extends Model {
    id: number;
    title: string;
    content: string;
    image: string;
    userId: number;
    author: User;
}
