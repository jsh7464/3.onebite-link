export type Folder = { id: string; name: string; count: number };
export type LinkItem = {
  id: string;
  title: string;
  url: string;
  description: string;
  folderId: string;
};

export const folders: Folder[] = [
  { id: "dev", name: "개발", count: 4 },
  { id: "design", name: "디자인", count: 3 },
  { id: "reading", name: "읽을거리", count: 2 },
];

export const links: LinkItem[] = [
  { id: "1", title: "Next.js 공식 문서", url: "https://nextjs.org/docs", description: "React 프레임워크 Next.js의 공식 가이드 문서입니다.", folderId: "dev" },
  { id: "2", title: "Tailwind CSS", url: "https://tailwindcss.com", description: "유틸리티 퍼스트 CSS 프레임워크.", folderId: "dev" },
  { id: "3", title: "MDN Web Docs", url: "https://developer.mozilla.org", description: "웹 기술에 대한 레퍼런스와 튜토리얼.", folderId: "dev" },
  { id: "4", title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs", description: "타입스크립트 공식 핸드북.", folderId: "dev" },
  { id: "5", title: "Figma", url: "https://www.figma.com", description: "협업 기반 UI 디자인 도구.", folderId: "design" },
  { id: "6", title: "Dribbble", url: "https://dribbble.com", description: "디자인 영감을 얻을 수 있는 커뮤니티.", folderId: "design" },
  { id: "7", title: "Refactoring UI", url: "https://www.refactoringui.com", description: "개발자를 위한 실용적인 UI 디자인 팁.", folderId: "design" },
  { id: "8", title: "Hacker News", url: "https://news.ycombinator.com", description: "개발자들이 즐겨 읽는 기술 뉴스.", folderId: "reading" },
  { id: "9", title: "Velog", url: "https://velog.io", description: "개발자 블로그 플랫폼.", folderId: "reading" },
];
