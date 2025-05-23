export interface Author {
    name: string;
    profilePicture: string;
    bio?: {
      markdown: string;
    };
  }
  
  export interface Tag {
    name: string;
    slug: string;
  }
  
  export interface CoverImage {
    url: string;
  }
  
  export interface Post {
    id: string;
    title: string;
    slug: string;
    brief: string;
    dateAdded: string;
    coverImage: CoverImage;
    tags: Tag[];
    author: Author;
  }
  
  export interface PostDetail extends Omit<Post, 'brief'> {
    brief: string;
    content: {
      markdown: string;
    };
    updatedAt: string;
    seo: {
      title: string;
      description: string;
    };
  }
  
  export interface PostsResponse {
    publication: {
      id: string;
      posts: {
        edges: Array<{
          node: Post;
        }>;
        pageInfo: {
          hasNextPage: boolean;
          endCursor: string;
        };
      };
    };
  }
  
  export interface PostDetailResponse {
    publication: {
      post: PostDetail;
    };
  }
  
  export interface AllSlugsResponse {
    publication: {
      posts: {
        edges: Array<{
          node: {
            slug: string;
          };
        }>;
        pageInfo: {
          hasNextPage: boolean;
          endCursor: string;
        };
      };
    };
  }