function ProjectItem({ imgSrc, altText, linkUrl }) {
  return (
    <div className="proyecto">
      <img src={imgSrc} alt={altText} onClick={() => window.open(linkUrl)} />
    </div>
  );
}