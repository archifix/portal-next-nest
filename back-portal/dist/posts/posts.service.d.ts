import { CreatePostDto } from './dto/create-post.dto';
export declare class PostsService {
    create(dto: CreatePostDto, image: any): Promise<void>;
}
