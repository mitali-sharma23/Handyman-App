import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Service1Icon from '../assets/makeup.png';
import Service2Icon from '../assets/barbershop.png';
import Service3Icon from '../assets/mop.png';
import Image1 from '../assets/pexels-john-tekeridis-21837-3212179.jpg';
import Image2 from '../assets/pexels-matilda-wormwood-4098576.jpg';
import Image3 from '../assets/plumber-228010_1280.jpg';
import Image4 from '../assets/pexels-maltelu-1669754.jpg';
import Image5 from '../assets/pexels-zvolskiy-1570807.jpg';
import { Ionicons } from '@expo/vector-icons';
const HomeScreen = () => {
  const navigation = useNavigation(); 
  const categories = [
    { id: '1', name: "Service 1", icon: Service1Icon, services: [
      { id: '1', name: 'Service1.1', image:'image1.1',description: 'Description about service 1.1.',
        rating: 4.5, subservices: [
          {title:'Service1.1',name:'Subservice 1',price: 300},
          {title:'Service1.1',name:'Subservice 2',price: 300},
          {title:'Service1.1',name:'Subservice 3',price: 300},
          {title:'Service1.1',name:'Subservice 4',price: 300}
        ]},
      { id: '2', name: 'Service1.2', image: 'image1.2',description: 'Description about service 1.2.',
        rating: 4.5, subservices: [
          {title:'Service1.2',name:'Subservice 1',price: 300},
          {title:'Service1.2',name:'Subservice 2',price: 300},
          {title:'Service1.2',name:'Subservice 3',price: 300},
          {title:'Service1.2',name:'Subservice 4',price: 300}
        ] },
      { id: '3', name: 'Service1.3', image: 'image1.3',description: 'Description about service 1.3.',
        rating: 4.5,subservices: [
          {title:'Service1.3',name:'Subservice 1',price: 300},
          {title:'Service1.3',name:'Subservice 2',price: 300},
          {title:'Service1.3',name:'Subservice 3',price: 300},
          {title:'Service1.3',name:'Subservice 4',price: 300}
        ] },
      { id: '4', name: 'Service1.4', image: 'image1.4',description: 'Description about service 1.4.',
        rating: 4.5, subservices: [
          {title:'Service1.4',name:'Subservice 1',price: 300},
          {title:'Service1.4',name:'Subservice 2',price: 300},
          {title:'Service1.4',name:'Subservice 3',price: 300},
          {title:'Service1.4',name:'Subservice 4',price: 300}
        ]},
      { id: '5', name: 'Service1.5', image: 'image1.5',description: 'Description about service 1.5.',
        rating: 4.5,subservices: [
          {title:'Service1.5',name:'Subservice 1',price: 300},
          {title:'Service1.5',name:'Subservice 2',price: 300},
          {title:'Service1.5',name:'Subservice 3',price: 300},
          {title:'Service1.5',name:'Subservice 4',price: 300}
        ] }
    ], },
    { id: '2', name: "Service 2", icon: Service2Icon,services: [
      { id: '1', name: 'Service2.1', image:'image2.1' ,description: 'Description about service 2.1.',
        rating: 4.5,subservices: [
          {title:'Service2.1',name:'Subservice 1',price: 300},
          {title:'Service2.1',name:'Subservice 2',price: 300},
          {title:'Service2.1',name:'Subservice 3',price: 300},
          {title:'Service2.1',name:'Subservice 4',price: 300}
        ]},
      { id: '2', name: 'Service2.2', image: 'image2.2',description: 'Description about service 2.2.',
        rating: 4.5,subservices: [
          {title:'Service2.2',name:'Subservice 1',price: 300},
          {title:'Service2.2',name:'Subservice 2',price: 300},
          {title:'Service2.2',name:'Subservice 3',price: 300},
          {title:'Service2.2',name:'Subservice 4',price: 300}
        ] },
      { id: '3', name: 'Service2.3', image: 'image2.3',description: 'Description about service 2.3.',
        rating: 4.5,subservices: [
          {title:'Service2.3',name:'Subservice 1',price: 300},
          {title:'Service2.3',name:'Subservice 2',price: 300},
          {title:'Service2.3',name:'Subservice 3',price: 300},
          {title:'Service2.3',name:'Subservice 4',price: 300}
        ] },
      { id: '4', name: 'Service2.4', image: 'image2.4',description: 'Description about service 2.4.',
        rating: 4.5,subservices: [
          {title:'Service2.4',name:'Subservice 1',price: 300},
          {title:'Service2.4',name:'Subservice 2',price: 300},
          {title:'Service2.4',name:'Subservice 3',price: 300},
          {title:'Service2.4',name:'Subservice 4',price: 300}
        ] },
      { id: '5', name: 'Service2.5', image: 'image2.5',description: 'Description about service 2.5.',
        rating: 4.5,subservices: [
          {title:'Service2.5',name:'Subservice 1',price: 300},
          {title:'Service2.5',name:'Subservice 2',price: 300},
          {title:'Service2.5',name:'Subservice 3',price: 300},
          {title:'Service2.5',name:'Subservice 4',price: 300}
        ] }
    ], },
    { id: '3', name: 'Service 3', icon: Service3Icon, services: [
      { id: '1', name: 'Service3.1', image:'image3.1',description: 'Description about service 3.1.',
        rating: 4.5,subservices: [
          {title:'Service3.1',name:'Subservice 1',price: 300},
          {title:'Service3.1',name:'Subservice 2',price: 300},
          {title:'Service3.1',name:'Subservice 3',price: 300},
          {title:'Service3.1',name:'Subservice 4',price: 300}
        ] },
      { id: '2', name: 'Service3.2', image: 'image3.2',description: 'Description about service 3.2.',
        rating: 4.5,subservices: [
          {title:'Service3.2',name:'Subservice 1',price: 300},
          {title:'Service3.2',name:'Subservice 2',price: 300},
          {title:'Service3.2',name:'Subservice 3',price: 300},
          {title:'Service3.2',name:'Subservice 4',price: 300}
        ] },
      { id: '3', name: 'Service3.3', image: 'image3.3',description: 'Description about service 3.3.',
        rating: 4.5,subservices: [
          {title:'Service3.3',name:'Subservice 1',price: 300},
          {title:'Service3.3',name:'Subservice 2',price: 300},
          {title:'Service3.3',name:'Subservice 3',price: 300},
          {title:'Service3.3',name:'Subservice 4',price: 300}
        ] },
      { id: '4', name: 'Service3.4', image: 'image3.4',description: 'Description about service 3.4.',
        rating: 4.5,subservices: [
          {title:'Service3.4',name:'Subservice 1',price: 300},
          {title:'Service3.4',name:'Subservice 2',price: 300},
          {title:'Service3.4',name:'Subservice 3',price: 300},
          {title:'Service3.4',name:'Subservice 4',price: 300}
        ] },
      { id: '5', name: 'Service3.5', image: 'image3.5',description: 'Description about service 3.5.',
        rating: 4.5, subservices: [
          {title:'Service3.5',name:'Subservice 1',price: 300},
          {title:'Service3.5',name:'Subservice 2',price: 300},
          {title:'Service3.5',name:'Subservice 3',price: 300},
          {title:'Service3.5',name:'Subservice 4',price: 300}
        ] }
    ], },
  ];

  const offers = [
    { id: '1', image: Image1, service: 'Spa and massage',amount:'Rs 1,200' },
    { id: '2', image: Image2, service: 'Bathroom Cleaning',amount:'Rs 499' },
    {id: '3', image: Image3, service: 'Tap Repair',amount:'Rs 40'},
    {id: '4', image: Image4, service: 'Wall Painting',amount:'Rs 49'},
    {id: '5', image: Image5, service: "Man's haircut",amount:'Rs 40'},
  ];
  const handleCategoryPress = (category) => {
    // Example: Navigate to a CategoryDetails screen
    navigation.navigate('servicedetails', {category});
  };

  return (
    <View style={styles.container}>
      {/* Location Selector */}
      <View style={styles.header}>
        <Text style={styles.location}>Location ▼</Text>
      </View>
       {/* Search Bar */}
       <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#FEA700" />
        <TextInput placeholder="Search for services" style={styles.searchInput} />
      </View>

      {/* Categories Section */}
      <View style={styles.section}>
        <View style={styles.sectionheader}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
        </View>
        <FlatList
         horizontal
         data={categories}
         style={styles.listContainer}
         keyExtractor={(item) => item.id}
         renderItem={({ item }) => (
     <TouchableOpacity
      style={[
        styles.categoryCard,
        item.id === '1' ? styles.specialCard1 : // Style for the first category
        item.id === '2' ? styles.specialCard2 : // Style for the second category
        item.id === '3' ? styles.specialCard3 : // Style for the third category
        styles.defaultCard // Default style for other categories
      ]}
      onPress={() => handleCategoryPress(item)}
    >
      <Image 
        source={item.icon} 
        style={[
          styles.categoryIcon,
          item.id === '1' ? styles.specialIcon1 : // Style for first icon
          item.id === '2' ? styles.specialIcon2 : // Style for second icon
          item.id === '3' ? styles.specialIcon3 : // Style for third icon
          styles.defaultIcon // Default icon style
        ]}
      />
      <Text 
        style={[
          styles.categoryText,
          item.id === '1' ? styles.specialText1 : // Style for first text
          item.id === '2' ? styles.specialText2 : // Style for second text
          item.id === '3' ? styles.specialText3 : // Style for third text
          styles.defaultText // Default text style
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  )}
  contentContainerStyle={styles.flatListContainer}
  showsHorizontalScrollIndicator={false}
/>
</View>

      {/* mostbook Section */}
      <View style={styles.sectionheader}>
        <Text style={styles.sectionTitle}>Most Booked Service</Text>
      </View>
      <FlatList
        horizontal
        data={offers}
        keyExtractor={(item) => item.id}
        style = {{backgroundColor:'#2E4D72', borderRadius:8 }}
        renderItem={({ item }) => (
            <View style={styles.itemContainer}>
            <View style={styles.offerImage}>
              {item.image ? <Image source={item.image} style={styles.image} /> : null}
            </View>
            <Text style={styles.offerText}>{item.service}</Text>
            <Text style={styles.offerText}>{item.amount}</Text>
            </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={()=> navigation.navigate('mybooking')}>
          <Text>📋</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('profile')}>
          <Text>👤</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>❓</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 16, paddingVertical:16, fontFamily:'Open Sans Regular'},
  header: { flexDirection: 'row', alignItems: 'center', marginVertical: 16 },
  location: {  flex: 1,
    marginLeft: 5,
    marginTop:25,
    fontSize: 16,
    fontWeight: 'bold',
     color: 'rgb(80, 80, 80)' },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  searchInput:  {flex: 1,
  marginLeft: 8,
  fontSize: 14},
  sectionheader: { flexDirection: 'row',justifyContent:'space-between', alignItems: 'center',
    marginBottom: 12, marginTop: 8, },
  sectionTitle: { fontSize: 18, fontWeight: 'bold',  color: 'rgb(80, 80, 80)' },
  seeAll: { fontSize: 15, color: '#FEA700' },
  flatListContainer: {
    paddingLeft: 0,
    paddingRight: 8,
  },
  categoryCard: {  flex: 1,
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
    width:140,
    height:150,
    margin: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginLeft: 0 ,
    elevation: 8,},
  specialCard1: {
    backgroundColor: '#2E4D72',
  },
  specialCard2: {
    backgroundColor: '#FEA700',
    marginLeft: 10,
  },
  specialCard3: {
    backgroundColor: '#4FA2F0',
    marginLeft: 10,
  },
  categoryIcon: { width: 60, height: 60, borderRadius: 50, backgroundColor: '#ccc', marginTop:10},
  categoryText: { marginTop: 8, fontSize: 14, color: '#fff',fontWeight: 'bold' },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10, 
    width: 150,
  },
  offerImage: { width: 140 ,height: 170, marginBottom: 8 ,justifyContent:'center',alignItems:'center' },
  image: { width: '100%', height: '100%' ,borderRadius: 20, justifyContent:'space-between', alignItems: 'center' , boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.7)',
   },
  offerText: { fontSize: 13, textAlign: 'center', color: '#FFFFFF',fontWeight:'bold' },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
    marginTop: 16,
  },
  navItem: { alignItems: 'center' },
  flatListContent: { paddingBottom: 16 },
});

export default HomeScreen;


