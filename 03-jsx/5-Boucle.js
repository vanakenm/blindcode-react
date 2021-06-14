// Cinquième version
// Un tableau avec les noms à afficher
// et "map" pour itérer dessus

function Greetings(props) {
  let name  = props.name
  return (
      <Text >Hello {name}</Text>
  )
}

export default function App() {
  let names = ["Martin", "Khadija", "Sarah"]
  return (
    <View style={styles.container}>
      <Text >Bonjour {name}</Text>
      {
        names.map((name) => 
          <Greetings name={name}/>
        )
      }
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