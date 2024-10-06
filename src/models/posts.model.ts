export interface PostInterface {
    id: number;
    title: string;
    body: string;
    userId: number;
    views: number;
    reactions: {
        likes: number,
        dislikes: number
    },
    tags: string[]
}