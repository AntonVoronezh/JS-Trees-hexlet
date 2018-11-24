const mapping = (argFunc, arg) => {
  const clonedObj = { ...arg };
  
    const dfs = (dfsFunc, argTree) => {
      if (argTree.type === 'directory') {
        return { ...argTree, children: argTree.children.map(elem => dfs(dfsFunc, dfsFunc(elem))) };
      }
      return argFunc(argTree);
    };
    return dfs(argFunc, clonedObj);
  };
  
  export default mapping;
  