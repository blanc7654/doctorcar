// sw.js : 최소 버전 (그냥 "나는 PWA다" 표시용)

// 설치 단계
self.addEventListener('install', event => {
  // 바로 활성화되도록
  self.skipWaiting();
});

// 활성화 단계
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// 요청 가로채기 (지금은 아무 것도 안 하고 통과)
self.addEventListener('fetch', event => {
  // 필요하면 나중에 캐시 로직 추가
});
