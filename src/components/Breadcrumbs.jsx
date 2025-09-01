import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// Simple reusable breadcrumb component using the current pathname
// Optionally accepts an override 'items' prop for custom labels/paths
const Breadcrumbs = ({ items }) => {
  const location = useLocation();

  const computed = React.useMemo(() => {
    if (items && items.length) return items;
    const parts = location.pathname.split('/').filter(Boolean);
    const crumbs = [{ label: 'Home', to: '/' }];
    let pathAcc = '';
    parts.forEach((part) => {
      pathAcc += `/${part}`;
      const label = part
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (m) => m.toUpperCase());
      crumbs.push({ label, to: pathAcc });
    });
    return crumbs;
  }, [items, location.pathname]);

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1 text-gray-600">
        {computed.map((c, i) => {
          const isLast = i === computed.length - 1;
          return (
            <li key={i} className="flex items-center">
              {i !== 0 && (
                <ChevronRight size={14} className="mx-1 text-gray-400" />
              )}
              {isLast ? (
                <span className="text-gray-800 font-semibold">{c.label}</span>
              ) : (
                <Link to={c.to} className="hover:text-primary-600 transition-colors">
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;