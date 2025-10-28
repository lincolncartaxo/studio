import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';

const imagesById = PlaceHolderImages.reduce((acc, img) => {
  acc[img.id] = img;
  return acc;
}, {} as Record<string, ImagePlaceholder>);

export function getImage(id: string): ImagePlaceholder {
  const image = imagesById[id];
  if (!image) {
    // This is a fallback for development, in a real app you might want better error handling
    return {
      id: 'not-found',
      description: 'Image not found',
      imageUrl: `https://picsum.photos/seed/error/600/400`,
      imageHint: 'placeholder',
    };
  }
  return image;
}
