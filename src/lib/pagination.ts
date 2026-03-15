export const PAGE_SIZE = 12;

export interface PageResult<T> {
  items: T[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  prevUrl: string | null;
  nextUrl: string | null;
}

/** Returns the canonical URL for page `p` under a base path.
 *  Page 1 is always the base path itself (no /page/1 suffix). */
export function pageUrl(baseUrl: string, p: number): string {
  return p === 1 ? baseUrl : `${baseUrl}/page/${p}`;
}

export function paginate<T>(
  items: T[],
  currentPage: number,
  baseUrl: string,
  pageSize = PAGE_SIZE,
): PageResult<T> {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const page = Math.min(Math.max(1, currentPage), totalPages);
  const start = (page - 1) * pageSize;

  return {
    items: items.slice(start, start + pageSize),
    currentPage: page,
    totalPages,
    totalItems: items.length,
    prevUrl: page > 1 ? pageUrl(baseUrl, page - 1) : null,
    nextUrl: page < totalPages ? pageUrl(baseUrl, page + 1) : null,
  };
}

export function pageRange(current: number, total: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, '...', total];
  if (current >= total - 3) return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
  return [1, '...', current - 1, current, current + 1, '...', total];
}
