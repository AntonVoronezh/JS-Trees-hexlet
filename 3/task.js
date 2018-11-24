if (!argFunc(argTree)) {
  return null;
}
return { ...argTree, children: argTree.children.map(elem => 
        filtered(argFunc, elem)).filter(item => item) };
};

export default filtered;
