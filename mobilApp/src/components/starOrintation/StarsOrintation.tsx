import React from 'react';
import { Dimensions } from 'react-native';
import { ScrollView, View } from 'react-native';
import { Image, Text } from 'react-native-elements';

export default function StarsOrintation() {
  const screenWidth = Dimensions.get('window').width;

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: screenWidth,
        padding: 25,
      }}
    >
      <View
        style={{
          margin: 10,
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontWeight: '900', marginBottom: 15 }}>
          Ориентирование по Солнцу
        </Text>
        
        <Image
          source={{
            uri: 'https://vijivaka.com/wp-content/uploads/2018/02/orientirovanie-po-solncu-1.jpg',
          }}
          style={{ width: 400 , height: 200, resizeMode: 'contain' }}
        />

        

      </View>

      <View
        style={{
          margin: 10,
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontWeight: '900', marginBottom: 15 }}>
          Гипотенузе двух теней одинаковой длины
        </Text>

        <Text style={{ fontWeight: 'normal', marginBottom: 15 }}>
          Этот метод основан на понимании того, что траектория Солнца от востока
          до направления север-юг зеркальна траектории от направления север-юг
          до запада.
        </Text>

        <Text style={{ fontWeight: 'normal', marginBottom: 15 }}>
          Для того чтобы определить истинный меридиан и сориентироваться в
          пространстве, нужно отметить конец тени гномона в любой момент времени
          в утренние часы и измерить ее длину, после чего дождаться, когда в
          вечернее время тень окажется той же длины, и снова сделать пометку.
          Биссектриса, проведенная от гномона к центру отрезка, соединяющего две
          пометки, укажет направление на юг или север в зависимости от широты
          местности и времени года.
        </Text>

        <Image
          source={{
            uri: 'https://vijivaka.com/wp-content/uploads/2018/02/orientirovanie-po-solncu-6.jpg',
          }}
          style={{ width: 400, height: 200, resizeMode: 'contain' }}
        />
      </View>
      <View
        style={{
          margin: 10,
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontWeight: '900', marginBottom: 15 }}>
          По конечным точкам двух теней
        </Text>

        <Text style={{ fontWeight: 'normal', marginBottom: 15 }}>
          В основе этого метода лежит понимание того, что Солнце всегда движется
          с востока на запад, а значит тень будет двигаться с запада на восток.
          Если отметить два положения конца тени гномона с промежутком в 15–20
          минут, а затем соединить две сделанные отметки, полученный отрезок
          расположится в направлении запад—восток.
        </Text>

        <Image
          source={{
            uri: 'https://vijivaka.com/wp-content/uploads/2018/02/orientirovanie-po-solncu-7.jpg',
          }}
          style={{ width: 400, height: 200, resizeMode: 'contain' }}
        />
      </View>
    </ScrollView>
  );
}
