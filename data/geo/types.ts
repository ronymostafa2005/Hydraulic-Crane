export type AreaType =
  | "governorate"
  | "center"
  | "city"
  | "district"
  | "village"
  | "hamlet"
  | "industrial_zone"
  | "road"
  | "street"
  | "junction"
  | "local_unit";

export type VerificationStatus = "verified" | "needs_review" | "unavailable" | "compiled";

export type ContentStatus = "ready" | "listed_only" | "draft";

export interface ServiceArea {
  id: string;
  officialNameAr: string;
  commonNameAr: string;
  nameEn: string;
  slug: string;
  pathname: string;
  aliases: string[];
  type: AreaType;
  governorateId: string | null;
  parentAreaId: string | null;
  nearbyIds: string[];
  latitude: number | null;
  longitude: number | null;
  coordinatePrecision: "none" | "approximate" | "verified";
  sourceUrl: string;
  sourceNote: string;
  sourceVerifiedAt: string;
  verificationStatus: VerificationStatus;
  isServiceAvailable: boolean;
  isPublished: boolean;
  isIndexable: boolean;
  priority: number;
  contentStatus: ContentStatus;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  uniqueContent: string[];
  coverageNotes: string[];
  relatedRoads: string[];
  faqs: { q: string; a: string }[];
  lastModified: string;
}

export interface ServiceRecord {
  id: string;
  nameAr: string;
  slug: string;
  pathname: string;
  description: string;
  isAvailable: boolean;
  relatedAreaIds: string[];
  relevantKeywords: string[];
  seoTitle: string;
  metaDescription: string;
  h1: string;
  uniqueContent: string[];
  faqs: { q: string; a: string }[];
  pageStatus: "published";
  lastModified: string;
}

export interface KeywordRow {
  primary: string;
  secondary: string[];
  intent: "transactional" | "commercial" | "informational" | "local";
  targetPath: string;
  geographicScope: string;
  estimatedDemand: string;
  competition: string;
  evidenceSource: string;
  contentRequirements: string;
  conversionAction: "phone_click" | "whatsapp_click" | "lead_submit";
}

export interface RoadSegment {
  id: string;
  roadName: string;
  roadType: "highway" | "regional" | "urban" | "link" | "street" | "junction";
  governorateId: string | null;
  startLabel: string;
  endLabel: string;
  nearbyAreaIds: string[];
  verifiedSource: string;
  serviceAvailable: boolean;
  independentPage: boolean;
  verificationStatus: VerificationStatus;
  notes: string;
}

export interface GuideRecord {
  slug: string;
  pathname: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  relatedServiceIds: string[];
  relatedAreaIds: string[];
  uniqueContent: string[];
  lastModified: string;
}

export interface SeoAuditIssue {
  id: string;
  pathname: string;
  issueType: string;
  severity: "high" | "medium" | "low";
  discoveredAt: string;
  resolvedAt: string | null;
  resolutionNotes: string;
}
