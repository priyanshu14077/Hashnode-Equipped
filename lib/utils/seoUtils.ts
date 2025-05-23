export function createSeoTags(title: string, description: string, url: string, imageUrl?: string) {
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url,
        images: imageUrl ? [{ url: imageUrl }] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: imageUrl ? [imageUrl] : undefined,
      },
    };
  }