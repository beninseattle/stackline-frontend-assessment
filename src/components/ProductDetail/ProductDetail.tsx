import "./ProductDetail.css"

interface ProductDetailProps {
  title: string
  image: string
  subtitle: string
  tags: string[]
}

export default function ProductDetail({
  title,
  image,
  subtitle,
  tags,
}: ProductDetailProps) {
  return (
    <div className="product_detail card">
      <div className="product_detail_info">
        <img src={image} alt={[title, subtitle].join(" ")} />
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
      <div className="tags">
        {tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  )
}
