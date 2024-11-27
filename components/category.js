import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const CategoriesScreen = ({ navigation }) => {
  const categories = [
    { id: '1', name: 'Category 1', icon: require('../assets/makeup.png'), services: [
      { id: '1', name: 'Service1.1', image:'image1.1' , description: 'Description about service 1.1.',
        rating: 4.5,subservices: [
          {title:'Service1.1',name:'Subservice 1',price: 300},
          {title:'Service1.1',name:'Subservice 2',price: 300},
          {title:'Service1.1',name:'Subservice 3',price: 300},
          {title:'Service1.1',name:'Subservice 4',price: 300}
        ]},
      { id: '2', name: 'Service1.2', image: 'image1.2' ,description: 'Description about service 1.2.',
        rating: 4.5,subservices: [
          {title:'Service1.2',name:'Subservice 1',price: 300},
          {title:'Service1.2',name:'Subservice 2',price: 300},
          {title:'Service1.2',name:'Subservice 3',price: 300},
          {title:'Service1.2',name:'Subservice 4',price: 300}
        ]},
      { id: '3', name: 'Service1.3', image: 'image1.3',description: 'Description about service 1.3.',
        rating: 4.5,subservices: [
          {title:'Service1.3',name:'Subservice 1',price: 300},
          {title:'Service1.3',name:'Subservice 2',price: 300},
          {title:'Service1.3',name:'Subservice 3',price: 300},
          {title:'Service1.3',name:'Subservice 4',price: 300}
        ] },
      { id: '4', name: 'Service1.4', image: 'image1.4',description: 'Description about service 1.4.',
        rating: 4.5,subservices: [
          {title:'Service1.4',name:'Subservice 1',price: 300},
          {title:'Service1.4',name:'Subservice 2',price: 300},
          {title:'Service1.4',name:'Subservice 3',price: 300},
          {title:'Service1.4',name:'Subservice 4',price: 300}
        ] },
      { id: '5', name: 'Service1.5', image: 'image1.5',description: 'Description about service 1.5.',
        rating: 4.5,subservices: [
          {title:'Service1.5',name:'Subservice 1',price: 300},
          {title:'Service1.5',name:'Subservice 2',price: 300},
          {title:'Service1.5',name:'Subservice 3',price: 300},
          {title:'Service1.5',name:'Subservice 4',price: 300}
        ] }
    ], },
    { id: '2', name: 'Category 2', icon: require('../assets/barbershop.png'),services: [
      { id: '1', name: 'Service2.1', image:'image2.1',description: 'Description about service 2.1.',
        rating: 4.5,subservices: [
          {title:'Service2.1',name:'Subservice 1',price: 300},
          {title:'Service2.1',name:'Subservice 2',price: 300},
          {title:'Service2.1',name:'Subservice 3',price: 300},
          {title:'Service2.1',name:'Subservice 4',price: 300}
        ] },
      { id: '2', name: 'Service2.2', image: 'image2.2',description: 'Description about service 2.2.',
        rating: 4.5, subservices: [
          {title:'Service2.2',name:'Subservice 1',price: 300},
          {title:'Service2.2',name:'Subservice 2',price: 300},
          {title:'Service2.2',name:'Subservice 3',price: 300},
          {title:'Service2.2',name:'Subservice 4',price: 300}
        ]},
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
        ]  },
      { id: '5', name: 'Service2.5', image: 'image2.5',description: 'Description about service 2.5.',
        rating: 4.5,subservices: [
          {title:'Service2.5',name:'Subservice 1',price: 300},
          {title:'Service2.5',name:'Subservice 2',price: 300},
          {title:'Service2.5',name:'Subservice 3',price: 300},
          {title:'Service2.5',name:'Subservice 4',price: 300}
        ]  }
    ],  },
    { id: '3', name: 'Category 3', icon: require('../assets/air-conditioner.png'),services: [
      { id: '1', name: 'Service3.1', image:'image3.1',description: 'Description about service 3.1.',
        rating: 4.5,subservices: [
          {title:'Service3.1',name:'Subservice 1',price: 300},
          {title:'Service3.1',name:'Subservice 2',price: 300},
          {title:'Service3.1',name:'Subservice 3',price: 300},
          {title:'Service3.1',name:'Subservice 4',price: 300}
        ]  },
      { id: '2', name: 'Service3.2', image: 'image3.2',description: 'Description about service 3.2.',
        rating: 4.5,subservices: [
          {title:'Service3.2',name:'Subservice 1',price: 300},
          {title:'Service3.2',name:'Subservice 2',price: 300},
          {title:'Service3.2',name:'Subservice 3',price: 300},
          {title:'Service3.2',name:'Subservice 4',price: 300}
        ]  },
      { id: '3', name: 'Service3.3', image: 'image3.3',description: 'Description about service3.3.',
        rating: 4.5,subservices: [
          {title:'Service3.3',name:'Subservice 1',price: 300},
          {title:'Service3.3',name:'Subservice 2',price: 300},
          {title:'Service3.3',name:'Subservice 3',price: 300},
          {title:'Service3.3',name:'Subservice 4',price: 300}
        ]  },
      { id: '4', name: 'Service3.4', image: 'image3.4',description: 'Description about service 3.4.',
        rating: 4.5,subservices: [
          {title:'Service3.4',name:'Subservice 1',price: 300},
          {title:'Service3.4',name:'Subservice 2',price: 300},
          {title:'Service3.4',name:'Subservice 3',price: 300},
          {title:'Service3.4',name:'Subservice 4',price: 300}
        ]  },
      { id: '5', name: 'Service3.5', image: 'image3.5',description: 'Description about service 3.5.',
        rating: 4.5,subservices: [
          {title:'Service3.5',name:'Subservice 1',price: 300},
          {title:'Service3.5',name:'Subservice 2',price: 300},
          {title:'Service3.5',name:'Subservice 3',price: 300},
          {title:'Service3.5',name:'Subservice 4',price: 300}
        ]  }
    ], },
    { id: '4', name: 'Category 4', icon: require('../assets/mop.png'),services: [
      { id: '1', name: 'Service4.1', image:'image4.1',description: 'Description about service 4.1.',
        rating: 4.5,subservices: [
          {title:'Service4.1',name:'Subservice 1',price: 300},
          {title:'Service4.1',name:'Subservice 2',price: 300},
          {title:'Service4.1',name:'Subservice 3',price: 300},
          {title:'Service4.1',name:'Subservice 4',price: 300}
        ]  },
      { id: '2', name: 'Service4.2', image: 'image4.2',description: 'Description about service 4.2.',
        rating: 4.5,subservices: [
          {title:'Service4.2',name:'Subservice 1',price: 300},
          {title:'Service4.2',name:'Subservice 2',price: 300},
          {title:'Service4.2',name:'Subservice 3',price: 300},
          {title:'Service4.2',name:'Subservice 4',price: 300}
        ]  },
      { id: '3', name: 'Service4.3', image: 'image4.3',description: 'Description about service 4.3.',
        rating: 4.5,subservices: [
          {title:'Service4.3',name:'Subservice 1',price: 300},
          {title:'Service4.3',name:'Subservice 2',price: 300},
          {title:'Service4.3',name:'Subservice 3',price: 300},
          {title:'Service4.3',name:'Subservice 4',price: 300}
        ]  },
      { id: '4', name: 'Service4.4', image: 'image4.4',description: 'Description about service 4.4.',
        rating: 4.5,subservices: [
          {title:'Service4.4',name:'Subservice 1',price: 300},
          {title:'Service4.4',name:'Subservice 2',price: 300},
          {title:'Service4.4',name:'Subservice 3',price: 300},
          {title:'Service4.4',name:'Subservice 4',price: 300}
        ]  },
      { id: '5', name: 'Service4.5', image: 'image4.5',description: 'Description about service 4.5.',
        rating: 4.5,subservices: [
          {title:'Service4.5',name:'Subservice 1',price: 300},
          {title:'Service4.5',name:'Subservice 2',price: 300},
          {title:'Service4.5',name:'Subservice 3',price: 300},
          {title:'Service4.5',name:'Subservice 4',price: 300}
        ]  }
    ], },
    { id: '5', name: 'Category 5', icon: require('../assets/tools.png'),services: [
      { id: '1', name: 'Service5.1', image:'image5.1',description: 'Description about service 5.1.',
        rating: 4.5,subservices: [
          {title:'Service5.1',name:'Subservice 1',price: 300},
          {title:'Service5.1',name:'Subservice 2',price: 300},
          {title:'Service5.1',name:'Subservice 3',price: 300},
          {title:'Service5.1',name:'Subservice 4',price: 300}
        ]  },
      { id: '2', name: 'Service5.2', image: 'image5.2',description: 'Description about service 5.2.',
        rating: 4.5,subservices: [
          {title:'Service5.2',name:'Subservice 1',price: 300},
          {title:'Service5.2',name:'Subservice 2',price: 300},
          {title:'Service5.2',name:'Subservice 3',price: 300},
          {title:'Service5.2',name:'Subservice 4',price: 300}
        ]   },
      { id: '3', name: 'Service5.3', image: 'image5.3',description: 'Description about service 5.3.',
        rating: 4.5,subservices: [
          {title:'Service5.3',name:'Subservice 1',price: 300},
          {title:'Service5.3',name:'Subservice 2',price: 300},
          {title:'Service5.3',name:'Subservice 3',price: 300},
          {title:'Service5.3',name:'Subservice 4',price: 300}
        ]   },
      { id: '4', name: 'Service5.4', image: 'image5.4',description: 'Description about service 5.4.',
        rating: 4.5,subservices: [
          {title:'Service5.4',name:'Subservice 1',price: 300},
          {title:'Service5.4',name:'Subservice 2',price: 300},
          {title:'Service5.4',name:'Subservice 3',price: 300},
          {title:'Service5.4',name:'Subservice 4',price: 300}
        ]   },
      { id: '5', name: 'Service5.5', image: 'image5.5',description: 'Description about service 5.5.',
        rating: 4.5,subservices: [
          {title:'Service5.5',name:'Subservice 1',price: 300},
          {title:'Service5.5',name:'Subservice 2',price: 300},
          {title:'Service5.5',name:'Subservice 3',price: 300},
          {title:'Service5.5',name:'Subservice 4',price: 300}
        ]   }
    ], },
    // { id: '6', name: 'Category 6', icon: require('./assets/category5.png') },
  ];
  const handleCategoryPress = (category) => {
    // Example: Navigate to a CategoryDetails screen
    navigation.navigate('servicedetails',{category});
  };
  const renderItem = ({ item , index }) =>{  
    const backgroundColors = ['#2E4D72', '#FEA700', '#ADD8E6', '#4FA2F0', '#D3D3D3'];
    const backgroundColor = backgroundColors[index % backgroundColors.length];
    return (
    <TouchableOpacity style={[styles.categoryCard,{backgroundColor}]} onPress={() => handleCategoryPress(item)}>
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );
};
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>{'<'} Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
        <Ionicons name="search-outline" size={20} color="#FEA700" />
        </TouchableOpacity>
      </View>

      {/* Categories List */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text>🏠</Text>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>📋</Text>
          <Text>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>👤</Text>
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>❓</Text>
          <Text>Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 16, paddingVertical:16 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16,
    marginTop: 25
  },
  backButton: { padding: 8 },
  backText: { fontSize: 16, color: '#FEA700' },
  title: { fontSize: 18, fontWeight: 'bold' , color: 'rgb(80, 80, 80)' },
  searchIcon: { fontSize: 18, color: '#007BFF' },
  flatListContent: {
    paddingBottom: 16,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 120,
    borderWidth:1,
    borderRadius: 10,
    borderColor: '#ccc',
    elevation: 3,
    padding: 16,
    marginBottom: 12,
    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)'
  },
  icon: { width: 40, height: 40, borderRadius: 20, marginRight: 16 },
  categoryText: { fontSize: 18, fontWeight: 'bold', color:'#FFFFFF' },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
  },
  navItem: { alignItems: 'center' },
});

export default CategoriesScreen;
