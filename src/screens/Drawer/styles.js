import { PixelRatio, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  containerTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  categoryList: {
    flex:1,
    backgroundColor: '#D6D7DA',
  },
  categoryLabel: {
    fontSize: 15,
    textAlign: 'left',
    left: 10,
    padding: 10,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 0,
    borderWidth: 0,
    borderTopWidth: 1 / PixelRatio.get(),
    borderColor: '#D6D7DA',
    padding: 10,
    alignItems: 'center'
  },
});
