import { useCallback } from 'react';
import { graphqlClient } from '../graphql/client';
import { GET_POST_BY_SLUG_QUERY } from '../graphql/queries';
import { PostDetailResponse } from '../types/blog';

export function useSinglePost() {
  const fetchPostBySlug = useCallback(async (slug: string) => {
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
  }, []);

  return { fetchPostBySlug };
}