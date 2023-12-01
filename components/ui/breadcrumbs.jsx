import { clsx } from 'clsx';
import Link from 'next/link';

export default function Breadcrumbs({ breadcrumbs }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol className={clsx('flex text-xl md:text-2xl')}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={clsx(
              breadcrumb.active ? 'text-gray-900' : 'text-gray-500',
            )}
          >
            <Link href={breadcrumb.href} className='text-lg'>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-2 inline-block text-lg">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}



