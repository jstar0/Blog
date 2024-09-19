export const seo = {
  title: 'JStar0 iMyself | 计算机科学、学习中、苦旅者、沉静内省',
  description:
    '我叫 JStar0，一名开发者，设计师，细节控，同时也是佐玩创始人，目前带领着佐玩致力于创造一个充满创造力的工作环境，同时鼓励团队创造影响世界的产品。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://i.jstar.vip'
      : 'http://localhost:3000'
  ),
} as const
