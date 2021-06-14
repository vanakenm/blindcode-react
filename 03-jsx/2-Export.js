// Seconde version
// On extrait le composant
// mais le nom est hard codé

function Greetings() {
  let name = "Martin"
  return (
    <Text>Bonjour {name}</Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Greetings />
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