import { Link } from 'react-router-dom';

type Crumb = { label: string; to?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="breadcrumb" className="w-full py-4">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center">
            {item.to ? (
              <Link to={item.to} className="text-gray-300 hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span className="text-white font-medium">{item.label}</span>
            )}
            {idx < items.length - 1 && <span className="mx-2 text-gray-500">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
