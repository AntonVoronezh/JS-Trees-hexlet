const du = (argTree) => {
  const calcFilesSize = tree =>
    reduce((acc, node) => (node.type === 'file' ? acc + node.meta.size : acc), tree, 0);
  const result = argTree.children
    .map(item => [item.name, calcFilesSize(item)]).sort((a, b) => a[1] < b[1]);
  return result;
};

export default du;
