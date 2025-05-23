import { useCallback } from 'react';
import { graphqlClient } from '../graphql/client';
import { GET_ALL_SLUGS_QUERY } from '../graphql/queries';
import { AllSlugsResponse } from '../types/blog';

export function useSlugs() {
  const fetchAllSlugs = useCallback(async () => {
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
  }, []);

  return { fetchAllSlugs };
}