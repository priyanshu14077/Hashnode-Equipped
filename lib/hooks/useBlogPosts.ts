import { useCallback } from 'react';
import { graphqlClient } from '../graphql/client';
import { GET_POSTS_QUERY } from '../graphql/queries';
import { PostsResponse } from '../types/blog';

export function useBlogPosts() {
  const fetchPosts = useCallback(async (page = 1, perPage = 6) => {
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
  }, []);

  return { fetchPosts };
}