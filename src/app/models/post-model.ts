export class PostModel {
    postId!:any;
    profilePicture!:File;
    fullName!:string;
    content!:string;
    created !:Date;
    isLiked:boolean;
    likesCount: number;
}
