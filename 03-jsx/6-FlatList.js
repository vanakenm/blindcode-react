function Greetings(props) {
  let name  = props.name
  return (
      <Text >Hello {name}</Text>
  )
}

export default function App() {
  let names = ["Martin", "Bob", "Sarah"]

  return (
    <View style={styles.container}>
      <Text >Bonjour {name}</Text>
      <FlatList data={names} renderItem={({name}) => (<Greetings name={name}/>)} keyExtractor={item => item} />
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