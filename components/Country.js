import { View, Text,Image } from 'react-native'
import React from 'react'

export default function country({country}) {
  return (
    <View>
          <Text style={{fontSize:20}}>country :{country.name.common} </Text>
          <Image
              source={{
                  uri:country.flags.png
              }}
          style={{width:300,height:200,}}
          ></Image>
    </View>
  )
}