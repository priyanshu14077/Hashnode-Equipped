import { graphqlClient } from '../graphql/client';
import { GET_POST_BY_SLUG_QUERY, GET_POSTS_QUERY, GET_ALL_SLUGS_QUERY } from '../graphql/queries';
import { PostsResponse, PostDetailResponse, AllSlugsResponse } from '../types/blog';

export const postService = {
  async getPostBySlug(slug: string) {
    try {
      const variables = {
        publicationId: process.env.HASHNODE_PUBLICATION_ID,
        slug,
      };

      const data = await graphqlClient.request<PostDetailResponse>(
        GET_POST_BY_SLUG_QUERY,
        variables
      );
      
      return data.publication.post;
    } catch (error) {
      console.error(`Error fetching post with slug ${slug}:`, error);
      throw error;
    }
  },
  
  async getPosts(page = 1, perPage = 6) {
    try {
      const variables = {
        publicationId: process.env.HASHNODE_PUBLICATION_ID,
        first: perPage,
        after: page > 1 ? String((page - 1) * perPage) : null,
      };

      const data = await graphqlClient.request<PostsResponse>(
        GET_POSTS_QUERY,
        variables
      );
      
      return {
        posts: data.publication.posts.edges.map(edge => edge.node),
        pagination: {
          hasNextPage: data.publication.posts.pageInfo.hasNextPage,
          endCursor: data.publication.posts.pageInfo.endCursor,
        }
      };
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      throw error;
    }
  },
  
  async getAllSlugs() {
    try {
      let allSlugs: string[] = [];
      let hasNextPage = true;
      let cursor: string | null = null;
      
      while (hasNextPage) {
        const variables: { publicationId: string | undefined; first: number; after: string | null } = {
          publicationId: process.env.HASHNODE_PUBLICATION_ID,
          first: 100,
          after: cursor,
        };

        const data = await graphqlClient.request<AllSlugsResponse>(
          GET_ALL_SLUGS_QUERY,
          variables
        );
        
        const newSlugs = data.publication.posts.edges.map(edge => edge.node.slug);
        allSlugs = [...allSlugs, ...newSlugs];
        
        hasNextPage = data.publication.posts.pageInfo.hasNextPage;
        cursor = data.publication.posts.pageInfo.endCursor;
      }
      
      return allSlugs;
    } catch (error) {
      console.error('Error fetching slugs:', error);
      throw error;
    }
  }
};