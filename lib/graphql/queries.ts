import { gql } from 'graphql-request';

export const GET_POSTS_QUERY = gql`
  query GetPosts($publicationId: ObjectId!, $first: Int!, $after: String) {
    publication(id: $publicationId) {
      id
      posts(first: $first, after: $after) {
        edges {
          node {
            id
            title
            slug
            brief
            dateAdded
            coverImage {
              url
            }
            tags {
              name
              slug
            }
            author {
              name
              profilePicture
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;


export const GET_POST_BY_SLUG_QUERY = gql`
  query GetPostBySlug($publicationId: ObjectId!, $slug: String!) {
    publication(id: $publicationId) {
      post(slug: $slug) {
        id
        title
        slug
        dateAdded
        updatedAt
        content {
          markdown
        }
        coverImage {
          url
        }
        tags {
          name
          slug
        }
        author {
          name
          profilePicture
          bio {
            markdown
          }
        }
        seo {
          title
          description
        }
      }
    }
  }
`;


export const GET_ALL_SLUGS_QUERY = gql`
  query GetAllSlugs($publicationId: ObjectId!, $first: Int!, $after: String) {
    publication(id: $publicationId) {
      posts(first: $first, after: $after) {
        edges {
          node {
            slug
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;
