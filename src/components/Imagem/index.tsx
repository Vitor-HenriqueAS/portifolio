import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

interface ImagemProps {
  alt: string;
  src: string;
  height: number;
  width: number;
  loadmode: string;
}

const Imagem: React.FC<ImagemProps> = ({
  alt,
  src,
  height,
  width,
  loadmode
}) => {
  return (
    <>
      <Head>
        {loadmode === 'prioridade' && (
          <meta name="next-image-priority" content="true" />
        )}
      </Head>

      <Image 
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loadmode === 'prioridade' ? 'eager' : 'lazy'}
      />
    </>
  );
};

export default Imagem;
