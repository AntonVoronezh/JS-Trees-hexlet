const downcaseFileNames = (arg) => {

  var clonedObj = { ...arg };

  const dfs = (argTree) => {
    if (argTree.type === 'directory') {
      return { ...argTree, children: argTree.children.map(elem => dfs(elem)) };
    }
    return { ...argTree, name: argTree.name.toLowerCase() };
  };
  return dfs(clonedObj);
};

export default downcaseFileNames;
