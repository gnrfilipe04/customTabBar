import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons'

export function TabBar(props: BottomTabBarProps){
    const { bottom } = useSafeAreaInsets()
    const { width } = Dimensions.get('screen')

    return (
    <View style={[styles.container, { paddingBottom: bottom, }]} {...props}>    
        <Svg
            width={110}
            height={70}
            viewBox='0 0 110 70'
            translateX={(width / 2) - 55}
            style={[styles.activeBackground, { paddingBottom: bottom }]}
        >   
            <Path
                fill="#121313"
                d="M20 0H0c11.046 0 20 8.954 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.046 8.954-20 20-20H20Z"
            />
        </Svg>

        
        <View style={{
            flexDirection: 'row', 
            justifyContent: 'space-around'
        }}>
            {props.state.routes.map((route, index) => {
                const icons = {
                    home: 'home',
                    add: 'md-add',
                    detail: 'document',
                    config: 'cog',
                    shopping: 'cart',
                } as any
                

                return (
                    <View 
                        key={route.key}
                        style={index === 2 ? styles.component : styles.icons}
                    >
                        <Ionicons
                            name={icons[route.name]}
                            size={index === 2 ? 30 : 20}
                            color={index === 2 ? 'white' : 'gray'}
                            onPress={() => props.navigation.navigate(route.name)}
                        />
                    </View>
                )
            })}
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#232327',
    },
    activeBackground: {
        position: 'absolute',
    },
    component: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60, 
        width: 60, 
        borderRadius: 30,
        marginTop: -10,
        backgroundColor: '#198ccf',
    },
    icons: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60, 
        width: 60, 
        borderRadius: 30,
        marginVertical: 5,
    }
})