export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'MiCROVISIONWEBSITE' };
}

export const layout = () => {
  return {
    layout: false, 
    headerRender: false, 
    menuRender: false,
    footerRender: false,
    menuHeaderRender: false,
    // hideChildrenInMenu=true,
    // hideInMenu=true,
    // hideInBreadcrumb=true
  };
};
