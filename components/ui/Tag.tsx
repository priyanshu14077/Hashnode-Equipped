import React from 'react';
import Link from 'next/link';
import { Tag as TagType } from '@/lib/types/blog';

interface TagProps {
  tag: TagType;
}

export default function Tag({ tag }: TagProps) {
  return (
    <Link href={`/tags/${tag.slug}`}>
      <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-200 transition-colors">
        #{tag.name}
      </span>
    </Link>
  );
}