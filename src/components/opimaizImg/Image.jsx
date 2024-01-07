const OptimizedImage = ({ url }) => {
  return (
    <img
      src={url}
      alt="hero img"
      loading="lazy"
      width="1200" // Set the actual width of the image
      height="800" // Set the actual height of the image
      sizes="(max-width: 600px) 480px, (max-width: 768px) 720px, 1200px" // Adjust according to your design
      srcSet={`
        ${url} 1200w,
         ${url} 720w,
         ${url} 480w
      `}
    />
  );
};

export default OptimizedImage;
