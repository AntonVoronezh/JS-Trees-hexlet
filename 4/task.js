const reducer = (argFunc, argTree, argAcc) => {
  const newAcc = argFunc(argAcc, argTree);
  const {children} = argTree;
  if (argTree.type === 'directory') {
     return children.reduce((acc, elem) => reducer(argFunc, elem, acc), newAcc);
    }
    return newAcc;
  };
  
  export default reducer;
  