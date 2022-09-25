import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Textos from '../pages/Textos'
import Galeria from '../pages/Galeria'

import Dashboard from '../pages/Dashboard'

import Notifications from '../pages/Notifications'
import Profile from '../pages/Profile'

/* hidden */
import Flertes from '../pages/Flertes'
import Musica from '../pages/Musica'

import TextChannel from '../pages/TextChannel'
import TextinhoSearch from '../pages/Textos/Search'

import FlertesChannel from '../pages/FletesChannel'
import FlertesSearch from '../pages/Flertes/Search'

import MusicasChannel from '../pages/MusicasChannel'
import MusicasSearch from '../pages/Musica/Search'
import ImageOpened from '../pages/Galeria/Image'

const Tab = createBottomTabNavigator()

export default function AppRoutes() {
  return (
        <Tab.Navigator
            screenOptions={{
              tabBarStyle: {
                backgroundColor: '#252A34',
                borderTopColor: '#fff',
                height: 80,
              },
              tabBarLabelStyle: {
                display: 'none',
              },
              tabBarActiveTintColor: '#fff',
            }}
            initialRouteName='Dashboard'
        >

            <Tab.Screen
                name="Textos"
                component={Textos}
                options={
                    {
                      headerShown: false,
                      tabBarIcon: ({ size, color }) => (
                            <MaterialIcons name='menu-book' size={size} color={color} />
                      ),
                    }
                }
            />
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={
                    {
                      headerShown: false,
                      tabBarIcon: ({ size, color }) => (
                            <MaterialIcons name='favorite-border' size={size} color={color} />
                      ),
                    }
                }
            />

            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={
                    {
                      headerShown: false,
                      tabBarIcon: ({ size, color }) => (
                            <MaterialIcons name='notifications' size={size} color={color} />
                      ),
                    }
                }
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={
                    {
                      headerShown: false,
                      tabBarIcon: ({ size, color }) => (
                            <MaterialIcons name='account-circle' size={size} color={color} />
                      ),
                    }
                }
            />

            {/* Hidden */}

            <Tab.Screen
                name="Galeria"
                component={Galeria}
                options={
                    {
                      headerShown: false,
                      tabBarButton: () => null,
                      tabBarVisible: false,
                    }
                }
            />
            <Tab.Screen
                name="Flertes"
                component={Flertes}
                options={
                    {
                      headerShown: false,
                      tabBarButton: () => null,
                      tabBarVisible: false,
                    }
                }
            />
            <Tab.Screen
                name="Musicas"
                component={Musica}
                options={
                    {
                      headerShown: false,
                      tabBarButton: () => null,
                      tabBarVisible: false,
                    }
                }
            />
            <Tab.Screen
                name="Textinhos"
                component={Textos}
                options={
                    {
                      headerShown: false,
                      tabBarButton: () => null,
                      tabBarVisible: false,
                    }
                }
            />

            {/* textinhos subtab */}
            <Tab.Screen
                name="TextinhosMessages"
                component={TextChannel}
                options={
                    {
                      headerShown: false,
                      tabBarButton: () => null,
                      tabBarVisible: false,
                    }
                }
            />
            <Tab.Screen
                name="TextinhoSearch"
                component={TextinhoSearch}
                options={
                    {
                      headerShown: false,
                      tabBarButton: () => null,
                      tabBarVisible: false,
                    }
                }
            />

            {/* Flertes subtab */}
            <Tab.Screen
                name="FlertesMessage"
                component={FlertesChannel}
                options={
                    {
                      headerShown: false,
                      tabBarButton: () => null,
                      tabBarVisible: false,
                    }
                }
            />
            <Tab.Screen
                name="FlertesSearch"
                component={FlertesSearch}
                options={
                    {
                      headerShown: false,
                      tabBarButton: () => null,
                      tabBarVisible: false,
                    }
                }
            />

            {/* Musicas subtab */}
            <Tab.Screen
                name="MusicasMessage"
                component={MusicasChannel}
                options={
                    {
                      headerShown: false,
                      tabBarButton: () => null,
                      tabBarVisible: false,
                    }
                }
            />
            <Tab.Screen
                name="MusicasSearch"
                component={MusicasSearch}
                options={
                    {
                      headerShown: false,
                      tabBarButton: () => null,
                      tabBarVisible: false,
                    }
                }
            />

            {/* Image subtab */}
            <Tab.Screen
                name="ImageOpened"
                component={ImageOpened}
                options={
                    {
                      headerShown: false,
                      tabBarButton: () => null,
                      tabBarVisible: false,
                    }
                }
            />
        </Tab.Navigator>
  )
}
