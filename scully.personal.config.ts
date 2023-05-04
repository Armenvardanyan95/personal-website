import { HandledRoute, registerPlugin, ScullyConfig } from '@scullyio/scully';

function blogPostsPlugin(route: string = '', config = {}): Promise<HandledRoute[]> {
  return Promise.resolve([
    { route: '/blog/where-is-angular-headed' },
    { route: '/blog/should-you-know-javascript-before-learning-a-framework' },
  ]);
}

const validator = async conf => [];

registerPlugin('router', 'blogPosts', blogPostsPlugin, validator);

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "personal",
  spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'blogPosts',
    },
  }
};