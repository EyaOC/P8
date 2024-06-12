export default function Banner({ texte, image }) {
  return (
    <div className="banner_home">
      <div className="img_container">
        <img src={image} alt="Banner" className="banner_image" />
        <p className="text_banner_home">{texte}</p>
      </div>
    </div>
  );
}
