import { Article } from "@pages/home/HomeTypes";

const sampleSummary =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const sampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat ac augue at ultrices. Phasellus molestie odio eget elementum vestibulum. Sed ultrices ligula nec sem eleifend, et aliquam dui maximus. Phasellus condimentum a massa ut dictum. Quisque pulvinar semper turpis, sit amet laoreet arcu pretium at. Suspendisse volutpat vel neque eu rutrum. Donec in sem erat. Fusce tempus accumsan sapien, eget ornare dui consequat nec. Phasellus id ipsum cursus nibh hendrerit dapibus. Nam ac erat ut leo dictum gravida. Sed imperdiet velit sit amet venenatis feugiat. Morbi quis erat ex.

Etiam blandit mauris turpis, vitae interdum mi euismod non. Aenean a nunc a augue lobortis interdum. Aenean ac pellentesque sapien. Vestibulum vel tempus erat, in varius purus. Aenean laoreet purus in ipsum porta vestibulum. Fusce nec dui pulvinar nulla iaculis aliquet eu sit amet mauris. Aliquam maximus, purus sed facilisis molestie, metus mauris fermentum diam, vitae laoreet mauris tellus finibus risus. Morbi ut aliquet orci, at vestibulum sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce orci neque, iaculis sit amet nunc sed, blandit varius lorem.

Morbi in erat purus. Vestibulum laoreet lorem a ligula convallis dictum. Duis pulvinar nulla vitae odio ultricies lobortis. Aliquam erat volutpat. Etiam et eleifend felis. Suspendisse pharetra, erat in aliquet interdum, metus ligula aliquam ex, quis vehicula orci sapien vel tortor. Nunc mollis non elit in sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ac nisi nec est euismod porttitor. Donec sit amet augue at lectus convallis tempus eu nec velit. Pellentesque sagittis mauris in nibh viverra convallis. Duis sit amet nulla quam. Ut cursus quam nisi, sed malesuada mi gravida nec. Sed ut pellentesque diam, nec rutrum ipsum. Suspendisse dignissim eget ex quis gravida.

Pellentesque sapien lectus, convallis vel diam at, porttitor eleifend massa. Quisque at tortor dapibus, pharetra est vitae, eleifend augue. Suspendisse eu quam id ante tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et congue nisl, nec malesuada nisi. Vivamus ultrices nisi in metus iaculis, vel pharetra turpis cursus. Proin neque diam, mollis ac iaculis a, hendrerit sit amet libero. Cras porttitor mi mauris, ut eleifend massa tincidunt interdum. Suspendisse semper sagittis lectus eget tincidunt. Donec at pulvinar nunc. Aliquam erat volutpat. Nam quam purus, molestie id scelerisque a, ornare at lacus. Nulla facilisi. Sed congue tincidunt quam in posuere.

Aliquam eu massa at diam pretium facilisis vel quis massa. Mauris venenatis iaculis est, non suscipit enim egestas ut. Donec lacinia eleifend scelerisque. Pellentesque mattis metus nec erat lobortis facilisis. Sed eleifend luctus magna, vel convallis metus imperdiet ut. Sed eget purus dictum, eleifend nunc quis, cursus turpis. Sed sodales venenatis turpis, eu bibendum mauris. In sed posuere massa. Pellentesque bibendum felis vel leo pharetra, sed laoreet arcu ultrices. Nam at turpis rutrum, volutpat nulla ut, feugiat turpis. Maecenas ut fermentum nisl. Cras sollicitudin velit risus, et venenatis nisl placerat quis. Pellentesque quis sapien faucibus, sodales velit id, tincidunt odio.
`;
const getRandomDate = (withinPastDays: number) =>
  new Date(
    new Date().getTime() - Math.random() * 8.64e7 * withinPastDays,
  ).toISOString();

export const articleMockData: Article[] = [...Array(15)].map((_, i) => ({
  id: i,
  title: `Article ${i + 1}`,
  isCritical: i < 5,
  isFavorite: false,
  summary: sampleSummary,
  text: sampleText,
  createdBy: "Author",
  createdDate: getRandomDate(7),
  updatedDate: getRandomDate(0.08),
}));

export const criticalArticleMockData = articleMockData.filter(
  (article) => article.isCritical,
);
export const nonCriticalArticleMockData = articleMockData.filter(
  (article) => !article.isCritical,
);
