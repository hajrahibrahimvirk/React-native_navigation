import React from 'react';
import { View, Text, StyleSheet, SectionList, Pressable } from 'react-native';

const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
  ];

  const Item = ({name, price}) =>
    (
    <View style={styles.view2}>
    <Text style={styles.text}>{name}</Text>
    <Text style={styles.text}>{price}</Text>
    </View>)
    const Footer = () => (
        <Text style={styles.footerText}>
          All Rights Reserved by Little Lemon 2022
        </Text>
      );
  
  const itemRender = ({item}) => <Item name={item.name} price = {item.price}/>
  const seperator = () => <View style={styles.seperator}></View>
  const renderSectionHeader = ({section:{title}}) =>(
    <Text style={styles.sectionHeader}>{title}</Text>
  )

  function FlatlistMenuPrices({navigation}) {
    return (
       <View style={styles.view}>
        <SectionList
        keyExtractor={(item, index) => item + index}
        sections={menuItemsToDisplay}
        renderItem={itemRender}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={seperator}
        ListFooterComponent={Footer}
        ></SectionList>
        <Pressable onPress={()=> navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Go back</Text>
      </Pressable>
       </View>
    );
}

const styles = StyleSheet.create({
    view:{
        flex:0.95,
        alignItems:'center',
        
    },
    text:{
        color: '#F4CE14',
        fontSize: 22,
    },

    view2:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: '#333333',
    },
    seperator:{
        borderBottomWidth:1,
        borderColor:'#edefee'
    },
    sectionHeader:{
        color: '#333333',
        fontSize: 34,
        flexWrap: 'wrap',
        textAlign: 'center',
        backgroundColor:'#F4CE14'
    },
    footerText: {
        color: '#EDEFEE',
        fontSize: 20,
        flexWrap: 'wrap',
        textAlign: 'center',
      },
      button:{
        marginTop:30,
        borderWidth:3,
        padding:5,
        borderRadius:10,
        borderColor:'grey',
        backgroundColor:'grey'
    },
    buttonText:{
        fontSize:30,
        color:'#fff'
    }
})

export default FlatlistMenuPrices;