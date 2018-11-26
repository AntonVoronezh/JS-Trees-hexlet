const findFilesByName = (argTree, argStr) => {
  const clonedObj = { ...argTree };
  const pathArr = [];

  const dfs = (argTree, acc) => {
    const newAcc = acc.concat(argTree.name);
    if (argTree.type === 'directory') {
      return { ...argTree, children: argTree.children.map(elem => dfs(elem, newAcc)) };
    }
    if (argTree.name.includes(argStr)) {
      const [first, ...rest] = newAcc;
      pathArr.push('/' + rest.join('/'));
    }
    return { ...argTree };
  };
  dfs(clonedObj, []);
  return pathArr;
};

export default findFilesByName;
