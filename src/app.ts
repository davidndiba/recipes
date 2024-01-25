// // 运行时配置

// // 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// // 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
// export async function getInitialState(): Promise<{ name: string }>{
//  return { name: 'RecipesCorn'}
// }

// export const layout = () => {
//   return {
//     logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6t9bwUGbQKqnl851ItOiEGGtSw6_zlJ4gyfvcnvbGPbL6-Spn',
//     menu: {
//       layout: false,
//     },
//   };
// };
// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'RecipesCorn' };
}

export const layout = () => {
  return {
      layout: false, 
    headerRender: false, 
    menuRender: false,
  };
};
