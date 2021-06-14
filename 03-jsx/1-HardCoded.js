// Première version: via un Text
// et une variable

export default function App() {
  let name = "Martin"
  return (
    <View style={styles.container}>
      <Text>Bonjour {name}</Text>
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
});