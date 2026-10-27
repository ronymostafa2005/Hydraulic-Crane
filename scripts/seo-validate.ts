import { keywordMatrix } from "../data/keywords";
import { phoneDisplay, phoneDisplay2, phoneTel, phoneTel2 } from "../lib/site";
import { assertGeoIntegrity, indexablePages } from "../lib/geo";
import { absUrl, staticIndexablePaths } from "../lib/seo";
import { services } from "../data/services";
import { guides } from "../data/guides";

const errors = assertGeoIntegrity();
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

const { areas } = indexablePages();
const paths = [
  ...staticIndexablePaths.map((page) => page.pathname),
  ...areas.map((area) => area.pathname),
  ...services.map((service) => service.pathname),
  ...guides.map((guide) => guide.pathname),
];

if (new Set(paths).size !== paths.length) {
  console.error("duplicate sitemap paths");
  process.exit(1);
}

if (phoneDisplay !== "01000106813" || phoneDisplay2 !== "01096402014") {
  console.error("unexpected public phone numbers");
  process.exit(1);
}
if (!phoneTel.endsWith("1000106813") || !phoneTel2.endsWith("1096402014")) {
  console.error("unexpected tel hrefs");
  process.exit(1);
}

for (const row of keywordMatrix) {
  if (!paths.includes(row.targetPath) && row.targetPath !== "/") {
    console.error(`keyword target missing: ${row.primary} -> ${row.targetPath}`);
    process.exit(1);
  }
}

for (const area of areas) {
  if (area.isIndexable && (!area.seoTitle || !area.metaDescription || !area.h1)) {
    console.error(`incomplete metadata ${area.pathname}`);
    process.exit(1);
  }
}

console.log(`OK ${paths.length} indexable paths`);
console.log(`canonical sample ${absUrl("/areas/sharqia")}`);
