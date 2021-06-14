// Troisième (et "finale") version
// Le composant recoit le nom en paramètre et l'utilise
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