import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const srcRoot = src.replace('.jpg', '');
  const avifSrcSet = `${srcRoot}.avif 1x, ${srcRoot}@2x.avif 2x, ${srcRoot}@3x.avif 3x`;
  const jpgSrcSet = `${srcRoot}.jpg 1x, ${srcRoot}@2x.jpg 2x, ${srcRoot}@3x.jpg 3x`;
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcSet={avifSrcSet}
          />
          <source
            type="image/jpg"
            srcSet={jpgSrcSet}
          />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>
            {/* <TagContent> */}
              {tag}
              {/* </TagContent> */}
              </Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  white-space: nowrap;
  overflow: hidden;
`;

const Tag = styled.li`
  display: inline-box;
  overflow: hidden;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  :not(:last-child) {
    margin-right: 8px;
  }
`;

const TagContent = styled.span`
  text-overflow: ellipses;
`;

export default PhotoGridItem;
