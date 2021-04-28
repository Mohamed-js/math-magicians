module.exports = () => {
  const presets = [
    '@babel/preset-react',
    '@babel/preset-env',
    '@babel/preset-flow',
  ];
  const plugins = [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-jsx',
  ];

  return {
    presets,
    plugins,
  };
};
