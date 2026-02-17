export default function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' }) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<span key={i} className={`text-yellow-400 ${size === 'lg' ? 'text-2xl' : 'text-sm'}`}>★</span>);
    } else if (i === fullStars && hasHalf) {
      stars.push(<span key={i} className={`text-yellow-400 ${size === 'lg' ? 'text-2xl' : 'text-sm'}`}>★</span>);
    } else {
      stars.push(<span key={i} className={`text-gray-300 ${size === 'lg' ? 'text-2xl' : 'text-sm'}`}>★</span>);
    }
  }

  return (
    <div className="flex items-center gap-0.5">
      {stars}
      <span className={`font-semibold text-gray-700 ml-1 ${size === 'lg' ? 'text-xl' : 'text-sm'}`}>{rating}</span>
    </div>
  );
}
