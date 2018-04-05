// You can override Material icons with one of the following:
// - material-community,
// - font-awesome,
// - octicon,
// - ionicon,
// - foundation,
// - simple-line-icon,
// - zocial,
// - entypo,
// ref: https://react-native-training.github.io/react-native-elements/docs/icon.html
const FONTS = {
  MaterialIcons: 'Material Icons',
  // MaterialCommunityIcons: 'Material Design Icons',
  // FontAwesome: 'FontAwesome',
  // Octicons: 'Octions',
  // Ionicons: 'Ionicons',
  // Foundation: 'Foundation',
  // SimpleLineIcons: 'SimpleLineIcons',
  // Zocial: 'Zocial',
  // Entypo: 'Entypo',
};

const inject = ($style, name, family) => {
  const font = require(`react-native-vector-icons/Fonts/${name}.ttf`);
  const fontStyles = `@font-face { src: url(${font}); font-family: ${family}; }`;

  $style.type = "text/css";

  if ($style.styleSheet) {
    $style.styleSheet.cssText = fontStyles;
  } else {
    $style.appendChild(document.createTextNode(fontStyles));
  }

  return $style;
};

const injectFonts = () => {
  let style = document.createElement("style");
  Object.keys(FONTS).reduce((style, key) => inject(style, key, FONTS[key]), style);
  document.head.appendChild(style);
};

injectFonts();
