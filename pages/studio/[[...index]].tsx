import { NextStudio } from 'next-sanity/studio'
import config from '../../sanity.config'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ekdağ | Admin",
  description: "Ekdağ Tesislerini Keşfedin",
  // other metadata
};

export default function StudioPage() {
  return (
    <>
      <NextStudio config={config} />
    </>
  )
}