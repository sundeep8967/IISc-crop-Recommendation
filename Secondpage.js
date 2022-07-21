import { SafeAreaView, StyleSheet, Text, View , FlatList} from 'react-native'
import React, {useEffect} from 'react';
import { cropsData } from './data'

export default function Secondpage({route, navigation}) {
    const {season, crop} = route.params;
    useEffect(() => {
      console.log()
    }, [])


  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.subhead}>Type of Crop: {season.toString().charAt(0).toUpperCase()+season.slice(1, season.length)}</Text>
        <Text style={styles.head}>{crop.toString().charAt(0).toUpperCase()+crop.slice(1, season.length)}</Text>
      </View>
      {cropsData[season][crop] ?
        <View style={styles.dataContainer}>
        <View style={styles.dataHead}>
          <Text style={styles.headText}>Sowing months:</Text>
        </View>
        <View style={styles.dataBody}>
          <FlatList
            data={cropsData[season][crop]["months"]["sowing"]}
            renderItem={({item}) => (<Text>{item}</Text>)}
            keyExtractor={(item) => item}
          />
        </View>

        <View style={styles.dataHead}>
          <Text style={styles.headText}>Harvesting months:</Text>
        </View>
        <View style={styles.dataBody}>
          <FlatList
            data={cropsData[season][crop]["months"]["harvest"]}
            renderItem={({item}) => (<Text>{item}</Text>)}
            keyExtractor={(item) => item}
          />
        </View>

        <View style={styles.dataHead}>
          <Text style={styles.headText}>Expenditure:</Text>
        </View>
        <View style={styles.dataBody}>
        <Text>{cropsData[season][crop]["money"]["expenditure"]}</Text>
        </View>

        <View style={styles.dataHead}>
          <Text style={styles.headText}>Profit :</Text>
        </View>
        <View style={styles.dataBody}>
        <Text>{cropsData[season][crop]["money"]["profit"]}</Text>
        </View>
      </View>
      :
      <View style={styles.dataContainer}>
      <Text>This crop doesnt belong in this type</Text>
      </View>
      }
      
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroundColor: '#ddffdd'
  },
  heading:{
    flex: 1,
  },
  subhead: {
    fontSize: 20,
  },
  head:{
    fontSize: 40,
    fontWeight: 'bold'
  },
  dataContainer: {
    flex: 6,
  },
  dataHead: {
    backgroundColor: '#22AA22',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 10,
    marginTop: 5,
  },

  headText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  dataBody: {
    backgroundColor: '#77ee77',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 10,
    marginBottom: 5
  }
})