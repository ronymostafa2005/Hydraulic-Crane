import villages from "@/data/geo/villages.json";
import { publishedAreas, publishedCities } from "@/data/geo/published";
import { roadSegments } from "@/data/geo/roads";
import { zagazigOfficialLocalUnits } from "@/data/geo/official-units";
import { services } from "@/data/services";
import { guides } from "@/data/guides";
import type { ServiceArea } from "@/data/geo/types";

export const allPublishedAreas: ServiceArea[] = [...publishedAreas, ...publishedCities];

const areaByPath = new Map(allPublishedAreas.map((area) => [area.pathname, area]));
const areaById = new Map(allPublishedAreas.map((area) => [area.id, area]));

export function getAreaByPath(pathname: string): ServiceArea | undefined {
  return areaByPath.get(pathname);
}

export function getAreaById(id: string): ServiceArea | undefined {
  return areaById.get(id);
}

export function getChildAreas(parentId: string): ServiceArea[] {
  return allPublishedAreas
    .filter((area) => area.parentAreaId === parentId && area.isPublished)
    .sort((a, b) => b.priority - a.priority || a.officialNameAr.localeCompare(b.officialNameAr, "ar"));
}

export function getNearbyAreas(area: ServiceArea): ServiceArea[] {
  return area.nearbyIds.map((id) => areaById.get(id)).filter((item): item is ServiceArea => Boolean(item && item.isPublished));
}

export function villagesForCenter(governorate: "sharqia" | "qalyubia", centerNameAr: string): string[] {
  const pack = villages[governorate].byCenter as Record<string, string[]>;
  return pack[centerNameAr] ?? [];
}

export function zagazigUnits() {
  return zagazigOfficialLocalUnits;
}

export function indexablePages() {
  const areas = allPublishedAreas.filter((area) => area.isPublished && area.isIndexable);
  const servicePages = services.filter((service) => service.isAvailable && service.pageStatus === "published");
  return { areas, services: servicePages, guides };
}

export function resolveAreaSlug(segments: string[] | undefined): ServiceArea | "index" | undefined {
  if (!segments || segments.length === 0) return "index";
  const pathname = `/areas/${segments.join("/")}`;
  return areaByPath.get(pathname);
}

export function assertGeoIntegrity(): string[] {
  const errors: string[] = [];
  const slugs = new Map<string, string>();
  const paths = new Map<string, string>();

  for (const area of allPublishedAreas) {
    if (slugs.has(area.id)) errors.push(`duplicate area id ${area.id}`);
    slugs.set(area.id, area.pathname);
    if (paths.has(area.pathname)) errors.push(`duplicate pathname ${area.pathname}`);
    paths.set(area.pathname, area.id);
    if (area.isPublished && area.isIndexable) {
      if (!area.seoTitle || area.seoTitle.length < 10) errors.push(`weak title ${area.pathname}`);
      if (!area.metaDescription || area.metaDescription.length < 50) errors.push(`weak description ${area.pathname}`);
      if (!area.h1) errors.push(`missing h1 ${area.pathname}`);
      if (area.uniqueContent.length < 2) errors.push(`thin content ${area.pathname}`);
      if (area.contentStatus !== "ready") errors.push(`indexable but not ready ${area.pathname}`);
    }
    if (area.parentAreaId && area.parentAreaId !== area.governorateId && area.type !== "road") {
      const parent = areaById.get(area.parentAreaId);
      if (!parent) errors.push(`missing parent ${area.id}`);
    }
    if (area.coordinatePrecision === "none" && (area.latitude !== null || area.longitude !== null)) {
      errors.push(`coordinates without precision ${area.id}`);
    }
  }

  for (const service of services) {
    if (paths.has(service.pathname)) errors.push(`path collision ${service.pathname}`);
    paths.set(service.pathname, service.id);
  }

  const unpublishedIndexed = allPublishedAreas.filter((area) => !area.isPublished && area.isIndexable);
  if (unpublishedIndexed.length) errors.push("unpublished areas marked indexable");

  for (const segment of roadSegments) {
    if (segment.independentPage && !areaById.get(segment.id) && segment.id !== "road-cairo-ismailia") {
      errors.push(`road independent page missing ${segment.id}`);
    }
  }

  return errors;
}

export { villages, roadSegments, services, guides };
