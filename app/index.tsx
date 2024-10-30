import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import userData from './data.json'
export default function Index() {
  return (
    <ScrollView>
      {userData.map((data) => {
        return(
          <Card key={data.name} style={styles.container}>
            <Card.Content style={styles.card}>
              <Card.Cover source={{uri: data.photo_url}} style={styles.avatar} />
              <View>
                <Title>{data.name}</Title>
                <Paragraph>{data.email}</Paragraph>
              </View>
            </Card.Content>
          </Card>

          // <View style={styles.container} key={data.name}>
          //   <View style={styles.card}>
          //     <Image source={{uri: data.photo_url}} style={styles.avatar} />
          //     <View>
          //       <Text style={styles.boldText}>{data.name}</Text>
          //       <Text style={styles.boldText}>{data.email}</Text>
          //     </View>
          //   </View>
          // </View>
        )
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    display: "flex",
  },
  card: {
    borderWidth: 1,
    borderBlockColor: "black",
    borderRadius: 8,
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    padding: 8,
    width: 325,
    gap: 8
  },
  avatar: {
    width: 75, 
    height: 75,
    borderRadius: 999
  },
  boldText: {
    fontWeight: "bold",
  },
  description: { 
    width: "100%",
    display: "flex",
    gap: 2
  }
})
