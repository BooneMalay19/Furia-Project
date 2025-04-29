export default function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <ul className="gallery-list has-scrollbar">
          {[1, 2, 3, 4].map((item) => (
            <li key={item}>
              <figure className="gallery-item">
                <img src={`/assets/images/gallery-img-${item}.jpg`} alt={`Gallery image ${item}`} />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}