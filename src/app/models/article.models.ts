

export interface ArticleModels{
    type_of: string;
    id: number;
    title: string;
    description: string;
    user: {
        name: string;
        profile_image: string;
    }

}