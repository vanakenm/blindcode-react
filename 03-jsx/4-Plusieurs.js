// Quatrième version
// Pareil mais on voit que l'on peut utiliser plusieurs composants
function Greetings(props) {
  let name  = props.name
  return (
    <Text>Bonjour {name}</Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Greetings name="Martin"/>
      <Greetings name="Khadija"/>
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