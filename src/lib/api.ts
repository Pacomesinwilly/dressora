import { PropertyListing } from '../domain/entities/types';

const API_BASE_URL = (() => {
  const envUrl = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
  if (envUrl) return envUrl;
  return '/';
})();

function normalizeProperty(raw: any): PropertyListing {
  const price = Number(raw.rentAmount ?? raw.price ?? 0);
  const surface = Number(raw.surface ?? raw.area ?? 0);

  return {
    id: raw._id ?? raw.id ?? String(Date.now()),
    title: raw.title ?? 'Bien immobilier',
    price: Number.isFinite(price) ? price : 0,
    surface: Number.isFinite(surface) ? surface : 0,
    description: raw.description ?? 'Description indisponible.',
    exactAddress: raw.address ?? raw.exactAddress ?? raw.city ?? 'Adresse non disponible',
    city: raw.city ?? 'Ville non disponible',
    images: Array.isArray(raw.photos) && raw.photos.length > 0
      ? raw.photos
      : Array.isArray(raw.images) && raw.images.length > 0
        ? raw.images
        : ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'],
    coverImage: raw.coverImage ?? (Array.isArray(raw.photos) ? raw.photos[0] : undefined) ?? 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    status: raw.status === 'published' ? 'active' : 'active',
    createdDate: raw.createdAt ?? new Date().toISOString(),
  };
}

export async function fetchPublicProperties(): Promise<PropertyListing[] | null> {
  const endpoint = API_BASE_URL === '/' ? '/api/properties/public' : `${API_BASE_URL}/api/properties/public`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      return null;
    }

    const payload = await response.json();
    if (!Array.isArray(payload)) {
      return null;
    }

    return payload.map(normalizeProperty);
  } catch {
    return null;
  }
}
