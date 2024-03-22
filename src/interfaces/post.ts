export default interface Post {
    id: number;
    attributes: {
        title: string;
        publish_date: string;
        cover: string;
        content: string;
    };
}